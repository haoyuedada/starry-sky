const fs = require('fs');
const path = require('path');

const projectsDir = path.join(__dirname, 'projects');
const outputFile = path.join(__dirname, 'dependencies-report.txt');
const depsMap = {};

// 构建带版本号的依赖映射
fs.readdirSync(projectsDir).forEach(projectName => {
  const projectPath = path.join(projectsDir, projectName);
  const pkgJsonPath = path.join(projectPath, 'package.json');
  
  if (fs.statSync(projectPath).isDirectory() && fs.existsSync(pkgJsonPath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));
      const dependencies = pkg.dependencies || {};
      
      Object.keys(dependencies).forEach(dep => {
        // 初始化依赖项记录
        if (!depsMap[dep]) {
          depsMap[dep] = [];
        }
        
        // 检查是否已存在相同项目的记录
        const existingIndex = depsMap[dep].findIndex(
          item => item.project === projectName
        );

        // 不存在则添加，存在则更新版本
        if (existingIndex === -1) {
          depsMap[dep].push({
            project: projectName,
            version: dependencies[dep]
          });
        } else {
          depsMap[dep][existingIndex].version = dependencies[dep];
        }
      });
    } catch (error) {
      console.error(`[错误] 处理项目 ${projectName}:`, error.message);
    }
  }
});

// 构建输出内容
let output = '';
Object.keys(depsMap)
  .sort()  // 按依赖名称排序
  .forEach(dependency => {
    // 按项目名称排序
    const sortedProjects = depsMap[dependency].sort((a, b) => 
      a.project.localeCompare(b.project)
    );
    
    output += `${dependency}:\n`;
    sortedProjects.forEach(({ project, version }) => {
      output += `  ${project}@${version}\n`;
    });
    output += '\n';  // 不同依赖之间空一行
  });

// 写入文件
try {
  fs.writeFileSync(outputFile, output.trim(), 'utf8');
  console.log(`✅ 依赖报告已生成：${outputFile}`);
} catch (error) {
  console.error('🆘 文件写入失败:', error.message);
  process.exit(1);
}