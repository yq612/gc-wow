import fs from 'fs';
import mkdirp from 'mkdirp';
import { getFiles, copyFile, getCode, copyFontFolder } from '../utils/index.js';
import chalk from 'chalk';
import boxen from 'boxen';

const TEMPLATE_FOLDER_NAME = 'native';

export const createNativeHtml = (config, rootPath) => {
  const { fontFamily, projectName } = config;

  // 创建项目根目录
  mkdirp.sync(rootPath);

  const { files, dirs } = getFiles(TEMPLATE_FOLDER_NAME);

  // 创建目录
  dirs.forEach(item => mkdirp.sync(`${rootPath}/${item}`));

  // 复制字体文件
  copyFontFolder(fontFamily, rootPath);

  // 处理文件
  files.forEach(item => {
    // 排除 .DS_Store 文件
    if (item.includes('.DS_Store')) return;

    const isEjs = item.endsWith('.ejs');
    const newItem = item.replace(/\.ejs$/, '');  // 去除 .ejs 后缀
    const newFilePath = newItem.endsWith('.json') ? newItem : newItem;  // json文件无需修改后缀

    // 处理 EJS 文件，生成代码并写入
    if (isEjs) {
      fs.writeFileSync(
        `${rootPath}/${newFilePath}`,
        getCode(config, TEMPLATE_FOLDER_NAME, item)
      );
    } else {
      // 复制非 EJS 文件
      copyFile(rootPath, TEMPLATE_FOLDER_NAME, item);
    }
  });

  // 创建完成后的提示信息
  const message = chalk.yellow(`cd ${projectName}`);

  console.log(
    boxen(message, {
      title: '🎉 创建完成，执行以下命令快速开发',
      padding: 1,
      margin: 1,
      borderStyle: 'single',
      borderColor: 'green',
    })
  );
};