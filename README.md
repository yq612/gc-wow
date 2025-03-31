# gc-wow

一个现代化的官网脚手架工具，支持多种技术栈和模板。

## 特性

- 🚀 快速创建：一键生成项目
- 🎨 多模板支持：Vue3、原生 HTML
- 📱 响应式设计：适配移动端
- 🎯 性能优化：支持 WOFF/WOFF2 字体
- 🔧 开发友好：集成常用工具链

## 安装

```bash
pnpm i gc-wow -g
```

## 使用

```bash
wow create
```

## 支持的模板

### Vue3 模板
- 基于 Vite 构建
- TypeScript 支持
- Vue Router + Pinia
- ESLint + Prettier
- Husky + lint-staged
- Vitest 测试框架
- PWA 支持
- AOS 动画库
- 响应式设计

### 原生 HTML 模板
- 轻量级结构
- 响应式布局
- 模块化 CSS
- 性能优化

## 字体支持

支持 WOFF 和 WOFF2 格式的字体文件，请在 `bin/source/fonts/[字体名称]` 目录下提供以下文件：
- [字体名称]-Light.woff2 和 [字体名称]-Light.woff
- [字体名称]-Regular.woff2 和 [字体名称]-Regular.woff
- [字体名称]-Bold.woff2 和 [字体名称]-Bold.woff

## 开发

```bash
# 安装依赖
pnpm install

# 启动开发
pnpm start
```

## 许可证

ISC

<img src='README.assets/capture1.png'/>

