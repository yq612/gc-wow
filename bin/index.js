#! /usr/bin/env node
/**
 * @description 脚手架入口文件
 */
import path from "path";

import command from "./commands/index.js";
import { createNativeHtml } from "./build/native.js"
import { createVue3Html } from "./build/vue3.js"

let config = await command();

const { framework, fontFamily, projectName } = config;
const rootPatch = `${path.resolve("./")}/${projectName}`

if (framework === 'vue3') {
    createVue3Html({ fontFamily, projectName }, rootPatch)
} else {
    createNativeHtml({ fontFamily, projectName }, rootPatch)
}
