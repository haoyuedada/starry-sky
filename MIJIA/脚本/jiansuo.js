const fs = require('fs');
const path = require('path');
const semver = require('semver'); // 需要先运行 npm install semver

const projectsDir = path.join(__dirname, 'projects');
const outputFile = path.join(__dirname, 'dependencies-report.txt');
const depsMap = {};

// 遍历项目目录
fs.readdirSync(projectsDir).forEach(projectName => {
  const projectPath = path.join(projectsDir, projectName);
  const pkgJsonPath = path.join(projectPath, 'package.json');
  
  if (fs.statSync(projectPath).isDirectory() && fs.existsSync(pkgJsonPath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));
      const dependencies = pkg.dependencies || {};
      
      Object.entries(dependencies).forEach(([dep, version]) => {
        if (!depsMap[dep]) {
          depsMap[dep] = {
            maxVersion: null,
            projects: []
          };
        }
        
        // 记录项目版本信息
        depsMap[dep].projects.push({
          project: projectName,
          version
        });

        // 计算最高版本（清洗语义化版本）
        const cleanVersion = version.replace(/^[\^~]/g, '');
        if (semver.valid(cleanVersion)) {
          if (!depsMap[dep].maxVersion || semver.gt(cleanVersion, depsMap[dep].maxVersion)) {
            depsMap[dep].maxVersion = cleanVersion;
          }
        }
      });
    } catch (error) {
      console.error(`处理项目 ${projectName} 失败:`, error.message);
    }
  }
});

// 生成报告
let output = '';
Object.keys(depsMap)
  .sort()
  .forEach((dep, index) => {
    const entry = depsMap[dep];
    output += `${index + 1}. ${dep} (最高版本: ${entry.maxVersion || '未知'})\n`;
    
    entry.projects
      .sort((a, b) => a.project.localeCompare(b.project))
      .forEach(p => {
        output += `   ${p.project}@${p.version}\n`;
      });
    
    output += '\n';
  });

// 写入文件
fs.writeFileSync(outputFile, output.trim());
console.log(`报告已生成：${outputFile}`);