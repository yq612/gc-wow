import fs from 'fs';
import mkdirp from 'mkdirp';
import { getFiles, copyFile, getCode, copyFontFolder } from '../utils/index.js';
import chalk from 'chalk';
import boxen from 'boxen';

const TEMPLATE_FOLDER_NAME = 'vue3-unocss';

export const createVue3UnocssHtml = (config, rootPath) => {
  const { fontFamily, projectName } = config;

  // 创建项目根目录
  mkdirp.sync(rootPath);

  const { files, dirs } = getFiles(TEMPLATE_FOLDER_NAME);

  // 创建目录
  dirs.forEach(item => mkdirp.sync(`${rootPath}/${item}`));

  // 复制字体文件到 public 文件夹
  copyFontFolder(fontFamily, `${rootPath}/public`);

  // 处理文件
  files.forEach(item => {
    if (item.includes('.DS_Store')) return;  // 排除 .DS_Store 文件

    const isEjs = item.endsWith('.ejs');
    const newItem = item.replace(/\.ejs$/, '');  // 去除 .ejs 后缀

    if (isEjs) {
      const isJson = newItem.endsWith('.json');  // 判断是否是 json 文件
      const newFilePath = isJson ? newItem : newItem;  // json 文件不需要进一步修改

      // 渲染 EJS 模板并写入文件
      fs.writeFileSync(
        `${rootPath}/${newFilePath}`,
        getCode(config, TEMPLATE_FOLDER_NAME, item)
      );
    } else {
      // 复制非 EJS 文件
      copyFile(rootPath, TEMPLATE_FOLDER_NAME, item);
    }
  });

  // 输出提示信息
  const message = [
    chalk.yellow(`cd ${projectName}`),
    chalk.yellow('pnpm i'),
    chalk.yellow('pnpm dev'),
  ].join('\n');

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