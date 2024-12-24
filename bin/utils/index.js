import ejs from "ejs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import mime from "mime-types";

const __dirname = fileURLToPath(import.meta.url);
const PLUGIN_TEMPLATE_PATH = path.resolve(__dirname, '../../source/templates');
const PLUGIN_FONT_PATH = path.resolve(__dirname, '../../source/fonts');

/** 解析 ejs 模板 */
export function getCode(config, templateName, templatePath) {
  const template = fs.readFileSync(path.resolve(PLUGIN_TEMPLATE_PATH, templateName, templatePath));
  return ejs.render(template.toString(), { ...config });
}

/** 复制文件，比如图片/图标静态资源 */
export function copyFile(rootPath, template, item) {
  const fromFileName = path.resolve(PLUGIN_TEMPLATE_PATH, template, item);
  const toFileName = path.join(rootPath, item);
  const mimeType = mime.lookup(fromFileName);
  const isText = mimeType && mimeType.startsWith("text");

  const rs = fs.createReadStream(fromFileName, {
    encoding: isText ? "utf-8" : null,
    highWaterMark: 64 * 1024 * 1024,
  });

  const ws = fs.createWriteStream(toFileName, {
    encoding: isText ? "utf-8" : null,
    highWaterMark: 16 * 1024 * 1024,
  });

  rs.pipe(ws);
}

/** 获取模板内的文件和目录 */
export function getFiles(template, dir = '') {
  const templatePath = path.resolve(PLUGIN_TEMPLATE_PATH, template);
  const rootFiles = fs.readdirSync(templatePath);

  let files = [], dirs = [];

  rootFiles.forEach(item => {
    const itemPath = path.join(templatePath, item);
    const isDir = fs.lstatSync(itemPath).isDirectory();

    if (isDir) {
      const itemDir = path.join(dir, item);
      dirs.push(itemDir);
      const nestedResult = getFiles(path.join(template, item), itemDir);
      dirs = dirs.concat(nestedResult.dirs);
      files = files.concat(nestedResult.files);
    } else {
      files.push(path.join(dir, item));
    }
  });

  return { files, dirs };
}

/** 复制字体文件 */
export function copyFontFolder(fontFamily, rootPath) {
  const fontSourcePath = path.join(PLUGIN_FONT_PATH, fontFamily);
  const fontsDir = path.join(rootPath, "fonts");

  if (!fs.existsSync(fontsDir)) fs.mkdirSync(fontsDir);

  fs.readdirSync(fontSourcePath).forEach((file) => {
    const sourceFile = path.join(fontSourcePath, file);
    const destinationFile = path.join(fontsDir, file);
    if (fs.lstatSync(sourceFile).isFile()) {
      fs.copyFileSync(sourceFile, destinationFile);
    }
  });
}

/** 获取当前字体目录 */
export function getFonts() {
  return fs.readdirSync(PLUGIN_FONT_PATH)
  .filter(file => fs.statSync(path.join(PLUGIN_FONT_PATH, file)).isDirectory()); 
}