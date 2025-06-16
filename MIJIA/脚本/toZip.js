const fs = require('fs');
const path = require('path');

// 获取当前目录路径
const currentDir = process.cwd();

// 读取目录内容
fs.readdir(currentDir, (err, files) => {
  if (err) {
    console.error('无法读取目录:', err);
    return;
  }

  let successCount = 0;
  let errorCount = 0;

  // 过滤并处理.mpkg文件
  files.filter(file => path.extname(file).toLowerCase() === '.mpkg')
    .forEach((file) => {
      const oldPath = path.join(currentDir, file);
      const newPath = path.join(currentDir, 
        path.basename(file, '.mpkg') + '.zip'
      );

      try {
        fs.renameSync(oldPath, newPath);
        console.log(`✅ 已重命名: ${file} → ${path.basename(newPath)}`);
        successCount++;
      } catch (error) {
        console.error(`❌ 重命名失败 ${file}:`, error.message);
        errorCount++;
      }
    });

  // 显示统计信息
  console.log('\n操作完成');
  console.log(`成功: ${successCount} 个文件`);
  console.log(`失败: ${errorCount} 个文件`);
});