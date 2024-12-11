/**
 * @description 生成纯原生html的模板
 */

import fs from 'fs'
import mkdirp from "mkdirp";
import { getFiles, copyFile, getCode, copyFontFolder } from '../utils/index.js'
import chalk from "chalk";
import boxen from 'boxen';

const TEMPLATE_FOLDER_NAME = 'vue3'

export const createVue3Html = (config, rootPath) => {
   const { fontFamily } = config

   // 创建项目
   mkdirp.sync(rootPath)

   const { files, dirs } = getFiles(TEMPLATE_FOLDER_NAME)

   // 创建文件夹
   dirs.map(item => mkdirp.sync(`${rootPath}/${item}`))
    
   // 复制字体文件
   copyFontFolder(fontFamily, `${rootPath}/public`)

   files.map(item => {
      const isEjs = item.indexOf('.ejs') !== -1
      const ignoreFile = ['.DS_Store'].includes(item)
      if (ignoreFile) return
      // 对模板文件进行操作
      else if (isEjs) {
         // 去掉ejs后缀
         const newItem = item.replace(/.ejs/g, '')
         // json后缀名不需要处理
         const isJson = newItem.indexOf('.json') !== -1
         // 替换后缀名
         const newFilePath = isJson ? newItem : newItem
         // 写入相关模板文件
         fs.writeFileSync(
            `${rootPath}/${newFilePath}`,
            getCode(config, TEMPLATE_FOLDER_NAME, item)
         )
      } else {
         copyFile(rootPath, TEMPLATE_FOLDER_NAME, item)
      }
   })

   const message =
      chalk.yellow(`cd ${config.projectName}`) +
      "\n" +
      chalk.yellow("pnpm i") +
      "\n" +
      chalk.yellow("pnpm dev");

   console.log(
      boxen(message, {
         title: "🎉 创建完成，执行以下命令快速开发",
         padding: 1, // 设置内边距
         margin: 1,
         borderStyle: "single", // 圆角边框
         borderColor: "green", // 边框颜色
      })
   );
}
