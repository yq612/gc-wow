/**
 * @description 创建项目指令
 */

import inquirer from "inquirer";
import { InvalidArgumentError } from "commander";
import chalk from "chalk";
import { getFonts } from "../../utils/index.js"

export default (program, call) => {
  program
    .command("create")
    .description("创建一个官网项目")
    .action(async () => {
      // 第一步：选择官网类型
      const { framework } = await inquirer.prompt([
        {
          type: "list",
          name: "framework",
          message: "请选择官网类型：",
          choices: [
            { name: "Vue3 官网", value: "vue3" },
            { name: "Vue3 官网（unocss）", value: "vue3-unocss" },
            { name: "纯原生官网", value: "native" },
          ],
        },
      ]);

      // vue 官网可选动画
      let aos = false;
      if (['vue3', 'vue3-unocss'].includes(framework)) {
        const result = await inquirer.prompt([
          {
            type: 'confirm',
            name: 'aos',
            message: '开启AOS动画选项',
            default: true,  // 默认选项，如果是 true，默认是 "Yes"
          },
        ]);
        aos = result?.aos
      }

      // 第二步：选择字体
      const { fontFamily } = await inquirer.prompt([
        {
          type: "list",
          name: "fontFamily",
          message: "请选择字体：",
          choices: getFonts(),
        },
      ]);

      // 第三步：输入官网名称
      const { projectName } = await inquirer.prompt([
        {
          type: "input",
          name: "projectName",
          message: "请输入官网名称：",
          validate: validateAppName,
        },
      ]);
      call && call({ framework, projectName, aos, fontFamily });
    });
};


/**
 * @description 校验项目名称
 * @param {String} appName 项目名称
 * @returns appName
 */
function validateAppName(appName) {
  var reg = /^[a-zA-Z][-_a-zA-Z0-9]/;
  if (!reg.test(appName)) {
    throw new InvalidArgumentError(
      chalk.red(`
       项目名称必须以字母开头且长度大于2，请重新输入！`)
    );
  }
  return true;
}
