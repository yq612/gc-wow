/**
 * @description 创建模板相关工具函数
 */
import ejs from "ejs";
import fs from "fs";
import path from "path";
import { execa } from "execa";
import { fileURLToPath } from "url";
import mime from "mime-types";

const BASE_TEMPLATE_PATH = '../../source/templates';
const BASE_FONT_PATH = '../../source/fonts';
const __dirname = fileURLToPath(import.meta.url);

/**
 * @description 解析ejs模板
 * @param {Object} config
 * @param {String} templateName
 * @param {String} templatePath
 * @returns code
 */
export function getCode(config, templateName, templatePath) {
  const template = fs.readFileSync(
    path.resolve(__dirname, `${BASE_TEMPLATE_PATH}/${templateName}/${templatePath}`)
  );
  const code = ejs.render(template.toString(), {
    ...config,
  });
  return code;
}

/**
 * @description 创建文件或者文件夹
 * @example 创建vue文件 new fileName -vue --file
 * @param {String} fileName 文件名称
 * @param {Object} option 指令项
 */
export function createFile(fileName, option) {
  const options = Object.keys(option);
  if (!options.length && fileName) fs.mkdirSync(`./${fileName}`);
  options.map((type) => {
    if (type !== "file" && type !== "folder") newFile(fileName, option, type);
  });
}

/**
 * @description 安装插件
 * @param {String} pluginName 插件名称
 * @param {Object} option 指令项
 */
export function installPlugin(pluginName, option) {
  const options = Object.keys(option);
  const isYarn = option.Yarn ? "add" : "i";
  const isSaveDev = option.saveDev ? "-D" : "-S";
  if (pluginName && !options.length) {
    execa(`npm i ${pluginName}`, {
      cwd: "./",
      stdio: [2, 2, 2],
      shell: true,
    });
  }
  options.map((type) => {
    if (type === "saveDev" || type === "save") false;
    else {
      const tool = type.toLowerCase();
      const installStr = `${tool} ${isYarn} ${pluginName} ${isSaveDev}`;
      execa(installStr, {
        cwd: "./",
        stdio: [2, 2, 2],
        shell: true,
      });
    }
  });
}

/**
 * @description 复制文件，比如图片/图标静态资源
 * @param {*} rootPath 根目录
 * @param {*} template 模板
 * @param {*} item 静态模板文件
 */
export function copyFile(rootPath, template, item) {
  const fromFileName = path.resolve(
    __dirname,
    `${BASE_TEMPLATE_PATH}/${template}/${item}`
  );
  const toFileName = `${rootPath}/${item}`;

  // 根据文件扩展名获取 MIME 类型
  const mimeType = mime.lookup(fromFileName);

  // 判断是否为文本类型
  const isText = mimeType && mimeType.startsWith("text");

  const rs = fs.createReadStream(fromFileName, {
    autoClose: true,
    highWaterMark: 64 * 1024 * 1024,
    flags: "r",
    encoding: isText ? "utf-8" : null, // 文本文件设置编码，二进制文件保持为 null
  });

  const ws = fs.createWriteStream(toFileName, {
    flags: "w", // 使用写入模式，避免追加
    highWaterMark: 16 * 1024 * 1024,
    autoClose: true,
    encoding: isText ? "utf-8" : null,
  });

  rs.on("data", (chunk) => {
    const wsFlag = ws.write(chunk);
    if (!wsFlag) {
      rs.pause();
    }
  });

  ws.on("drain", () => {
    rs.resume();
  });

  rs.on("end", () => {
    ws.end();
  });

  rs.on("error", (err) => {
    console.error(`Error reading file ${fromFileName}:`, err);
  });

  ws.on("error", (err) => {
    console.error(`Error writing file ${toFileName}:`, err);
  });
}

function newFile(fileName, option, type) {
  const isFolder = option.folder ? true : false;
  const fileType = type.toLowerCase();

  if (isFolder) fs.mkdirSync(`./${fileName}`);
  else {
    fs.writeFileSync(`./${fileName}.${fileType}`, "vue");
  }
}

export function hasTemplate(template) {
  return ['vue', 'vue-ts', 'react', 'react-ts'].includes(template)
}

export function getSupportTs(template) {
  return ['vue-ts', 'react-ts'].includes(template)
}

export function getFiles(template, dir = '') {
  const templatePath = `./bin/source/templates/${template}/`
  const rootFiles = fs.readdirSync(templatePath, 'utf-8')

  let files = [] // 当前函数内独立存储文件
  let dirs = []  // 当前函数内独立存储目录

  rootFiles.forEach(item => {
    const stat = fs.lstatSync(templatePath + item)
    const isDir = stat.isDirectory()
    if (isDir) {
      const itemDir = `${dir}${item}/` // 拼接子目录路径
      dirs.push(itemDir)              // 记录当前目录
      const nestedResult = getFiles(`${template}/${item}`, itemDir) // 递归获取子目录内容
      dirs = dirs.concat(nestedResult.dirs) // 合并子目录的结果
      files = files.concat(nestedResult.files) // 合并子文件的结果
    } else {
      files.push(`${dir}${item}`) // 添加文件
    }
  })

  return { files, dirs } // 返回当前级别的结果
}
// 定义 getAvailableFontPaths 函数
function getAvailableFontPaths(fontsSourcePath) {
  const availableFontPaths = {};
  try {
    if (!fs.existsSync(fontsSourcePath)) {
      throw new Error(`字体源路径 "${fontsSourcePath}" 不存在`);
    }

    const fontFolders = fs.readdirSync(fontsSourcePath).filter((item) => {
      const fullPath = path.join(fontsSourcePath, item);
      return fs.lstatSync(fullPath).isDirectory();
    });

    fontFolders.forEach((folder) => {
      availableFontPaths[folder] = path.join(fontsSourcePath, folder);
    });

    return availableFontPaths;
  } catch (error) {
    console.error("❌ 动态获取字体路径时发生错误：", error.message);
    return availableFontPaths;
  }
}

export function copyFontFolder(fontFamily, rootPath) {
  try {
    // 动态获取字体路径
    const fontPath = path.resolve(__dirname, BASE_FONT_PATH)
    const availableFontPaths = getAvailableFontPaths(fontPath);

    // 检查用户选择的字体是否存在
    const fontSourcePath = availableFontPaths[fontFamily];
    if (!fontSourcePath) return

    // 目标 fonts 文件夹路径
    const fontsDir = path.join(rootPath, "fonts");
    if (!fs.existsSync(fontsDir)) fs.mkdirSync(fontsDir)

    // 遍历源文件夹中的所有文件并复制到目标路径
    fs.readdirSync(fontSourcePath).forEach((file) => {
      const sourceFile = path.join(fontSourcePath, file);
      const destinationFile = path.join(fontsDir, file); // 直接复制到 fonts 文件夹

      if (fs.lstatSync(sourceFile).isFile()) {
        fs.copyFileSync(sourceFile, destinationFile);
      }
    });
  } catch (error) {
    console.error("❌ 复制字体文件夹时发生错误：", error.message);
  }
}