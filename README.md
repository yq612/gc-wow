# gc-wow
官网项目脚手架工具，支持一键生成官网，目前集成的模板有
- 纯原生官网
- 基于Vue3的官网

## 全局安装
```js
pnpm i gc-wow -g
```

## 使用
```shell
wow create
```
按照提示一步一步创建即可

## 字体格式
本工具使用 WOFF 和 WOFF2 格式的字体文件。请确保在 `bin/source/fonts/[字体名称]` 目录下提供以下格式的字体文件：
- [字体名称]-Light.woff2 和 [字体名称]-Light.woff
- [字体名称]-Regular.woff2 和 [字体名称]-Regular.woff
- [字体名称]-Bold.woff2 和 [字体名称]-Bold.woff

<img src='README.assets/capture1.png'/>

