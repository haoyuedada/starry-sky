#!/bin/bash

# 批量解压当前目录下的mpkg文件脚本
# 功能：自动识别格式 | 创建独立目录 | 支持常见压缩格式和macOS安装包

# 依赖检测函数
check_dependency() {
  if ! command -v $1 &> /dev/null; then
    echo "错误：需要安装 $1"
    echo "请使用以下命令安装："
    case $1 in
      "unar")  echo "  macOS: brew install unar" ;;
      "xar")   echo "  macOS: 已内置" ;;
      "cpio")  echo "  macOS: 已内置" ;;
    esac
    exit 1
  fi
}

# 检查必要依赖
check_dependency unar
check_dependency xar
check_dependency cpio

# 解压计数器
success_count=0
fail_count=0

# 主处理循环
for mpkg_file in *.mpkg; do
  # 跳过不匹配的文件
  [ -e "$mpkg_file" ] || continue

  echo "正在处理: $mpkg_file"
  
  # 生成输出目录名称（移除扩展名）
  output_dir="${mpkg_file%.mpkg}"
  
  # 避免覆盖已有目录
  if [ -d "$output_dir" ]; then
    echo "  警告：目录 $output_dir 已存在，跳过处理"
    ((fail_count++))
    continue
  fi

  # 创建输出目录
  mkdir -p "$output_dir" || {
    echo "  错误：无法创建目录 $output_dir"
    ((fail_count++))
    continue
  }

  # 文件类型检测
  file_type=$(file -b "$mpkg_file")

  case $file_type in
    *"XAR archive"*)
      # macOS 安装包处理
      echo "  检测到 macOS 安装包格式"
      (
        cd "$output_dir"
        xar -xf "../$mpkg_file"
        # 处理Payload文件
        if [ -f Payload ]; then
          echo "  正在解压Payload..."
          mkdir payload_contents
          mv Payload payload_contents/
          cd payload_contents
          cat Payload | gzip -d | cpio -i
          rm Payload
        fi
      )
      ;;
    *"Zip archive"*)
      unar -o "$output_dir" "$mpkg_file" ;;
    *"gzip compressed"*)
      unar -o "$output_dir" "$mpkg_file" ;;
    *"bzip2 compressed"*)
      unar -o "$output_dir" "$mpkg_file" ;;
    *)
      echo "  错误：未知文件类型 - $file_type"
      ((fail_count++))
      continue ;;
  esac

  if [ $? -eq 0 ]; then
    echo "  成功解压到：$output_dir"
    ((success_count++))
  else
    echo "  解压失败"
    rm -rf "$output_dir"
    ((fail_count++))
  fi
done

# 输出统计信息
echo "操作完成"
echo "成功解压: $success_count 个文件"
echo "失败处理: $fail_count 个文件"