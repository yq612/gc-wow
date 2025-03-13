#! /usr/bin/env node
/**
 * @description 脚手架入口文件
 */
import path from "path";

import command from "./commands/index.js";
import { createNativeHtml } from "./build/native.js"
import { createVue3Html } from "./build/vue3.js"
import { createVue3UnocssHtml } from "./build/vue3-unocss.js"
let config = await command();


const { framework, fontFamily, projectName, aos } = config;
const rootPatch = `${path.resolve("./")}/${projectName}`

if (framework === 'vue3') {
    createVue3Html({ fontFamily, aos, projectName }, rootPatch)
} else if (framework === 'vue3-unocss') {
    createVue3UnocssHtml({ fontFamily, aos, projectName }, rootPatch)
} else {
    createNativeHtml({ fontFamily, projectName }, rootPatch)
}
