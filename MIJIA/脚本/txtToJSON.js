const fs = require('fs');

// 读取并解析文本文件
function parseDependencies(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const result = {};

  let currentDep = null;

  lines.forEach(line => {
    line = line.trim();
    if (!line) return;

    // 匹配依赖标题行（如：1. @gorhom/portal (最高版本: 1.0.14)）
    const titleMatch = line.match(/^\d+\.\s+(.+?)\s+\(最高版本:\s*([\d.]+)\)/);
    if (titleMatch) {
      // 处理上一个依赖项
      if (currentDep) {
        findAndSetPrefix(currentDep, result);
      }
      // 初始化新依赖项
      currentDep = {
        name: titleMatch[1],
        maxVersion: titleMatch[2],
        versions: []
      };
      return;
    }

    // 匹配项目版本行（如：aa@^1.0.14）
    if (currentDep && line.startsWith(' ')) {
      const versionStr = line.trim().split('@')[1];
      const versionMatch = versionStr.match(/^([\^~>=]*)([\d.]+.*)/);
      if (versionMatch) {
        currentDep.versions.push({
          prefix: versionMatch[1],
          version: versionMatch[2]
        });
      }
    }
  });

  // 处理最后一个依赖项
  if (currentDep) {
    findAndSetPrefix(currentDep, result);
  }

  return result;
}

// 查找匹配的版本前缀
function findAndSetPrefix(depInfo, result) {
  const { name, maxVersion, versions } = depInfo;
  
  // 查找第一个匹配最大版本的项目
  const matched = versions.find(v => v.version === maxVersion);
  
  // 组合最终版本（前缀 + 最大版本）
  result[name] = matched 
    ? `${matched.prefix}${maxVersion}` 
    : maxVersion; // 找不到匹配时的降级处理
}

// 使用示例
const report = parseDependencies('input.txt');
console.log(JSON.stringify(report, null, 2));