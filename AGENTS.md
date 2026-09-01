# AGENTS.md

本文件适用于整个仓库，供在此项目中工作的自动化编码代理使用。

## 项目概览

- 技术栈：Vue 3、Vite 4、Vue Router、SCSS、GSAP。
- 包管理器：npm；以 `package-lock.json` 为准，不要混用 pnpm 或 yarn。
- 应用入口：`src/main.js`。
- 页面路由：`src/router/index.js`。
- 页面组件位于 `src/views/`，可复用组件位于 `src/components/`。
- 页面数据与注入逻辑位于 `src/data/`，静态资源位于 `src/assets/`。
- `@` 指向 `src/`，由 `vite.config.js` 配置。

## 常用命令

```sh
npm install       # 安装依赖
npm run dev       # 启动本地开发服务器
npm run build     # 生产构建
npm run lint      # ESLint 检查并自动修复
npm run format    # 使用 Prettier 格式化 src/
```

`npm run lint` 和 `npm run format` 会修改文件。仅检查时优先运行：

```sh
npx eslint . --ext .vue,.js,.jsx,.cjs,.mjs --ignore-path .gitignore
npx prettier --check src/
```

## 修改原则

- 开始前先检查 `git status --short`，保留用户已有的未提交改动。
- 只修改完成任务所必需的文件；不要顺手重构无关代码或批量格式化整个项目。
- 不要手工编辑 `src/auto-import.d.ts` 和 `src/components.d.ts`；它们由 Vite 插件生成。若构建或开发服务器更新了这些文件，仅在生成结果确有必要时保留。
- 新增依赖前先确认现有依赖无法满足需求，并同步提交 `package.json` 与 `package-lock.json` 的变化。
- 不要提交构建产物、依赖目录、日志或本地环境文件。
- 避免删除或重命名外部注入依赖的全局函数、DOM 类名和属性，除非任务明确要求。当前页面可能由宿主通过 `window.inject`、`window.inject_wvc`、`window.seek_frame` 等接口驱动。

## Vue 与 JavaScript 约定

- 使用 Vue 3 Composition API 和 `<script setup>`，与现有组件保持一致。
- 组件文件使用 PascalCase 命名；路由页面放在 `src/views/`，通用 UI 放在 `src/components/`。
- Props、事件和数据字段沿用周边代码的既有命名，避免仅为统一风格而破坏外部数据协议。
- 优先使用局部、可读的响应式状态；涉及 DOM 或动画的逻辑放在合适的生命周期钩子中。
- 创建 GSAP timeline、监听器或挂到 `window` 的函数时，必须在 `onBeforeUnmount` 中清理。
- 使用模板插值输出普通文本；只有输入已受信任且确实需要 HTML 时才使用 `v-html`。
- 图片应提供合适的 `alt`。纯装饰图片可使用空 `alt`，交互元素应有可读标签。
- 保持现有无分号、单引号的代码风格；提交前遵循仓库 ESLint 与 Prettier 配置。

## 样式与视觉实现

- 组件样式使用 SCSS。全局样式位于 `src/assets/global.scss`，共享 mixin 位于 `src/assets/_mixins.scss`。
- Vite 已自动注入 `_mixins.scss`，组件样式中无需重复导入。
- 优先复用现有颜色、字体、间距、资源和组件，不重复创建视觉近似项。
- 该项目包含面向固定画布的绝对定位和动画。修改尺寸或定位时，要同时检查溢出、层级、动画起止状态及 1920×1080 画布表现。
- 动画应支持重复初始化：重建 timeline 前清理旧 timeline，并恢复被 GSAP 写入的内联属性。
- 不要无意中把组件样式改成 `scoped`；现有动画选择器和跨组件样式可能依赖全局类名。

## 验证要求

- 普通代码修改至少运行无修复模式的 ESLint 检查和 `npm run build`。
- 样式、布局或动画修改还应在相关路由中进行浏览器验证，检查首帧、播放过程、结束状态以及重复播放。
- 修改外部注入数据时，至少验证缺省数据与一组注入数据；注意字符串布尔值等既有协议，例如 `data.prevent == 'true'`。
- 当前仓库没有自动化测试脚本。不要声称测试已通过；应明确报告实际运行的检查。
- 若检查失败是由任务前已存在的问题导致，记录具体命令和错误，不要为让检查通过而扩大修改范围。

## 交付说明

- 简要说明改了什么、影响哪些页面或组件。
- 列出实际运行的验证命令及结果。
- 若未进行浏览器视觉验证或存在遗留风险，应明确指出。
