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

## 当前页面组合与共享视觉

- 主要输出路由包括 `/main`（主榜及主榜到副榜的衔接）、`/pick`、`/calendar`、`/extra`、`/transition` 和 `/viewpick`；`/backicons` 主要用于背景组件调试。
- `BoardHeaderDecor.vue` 是主榜、PICK UP、日历和副榜共用的顶部英文、左上标题、像素标识及装饰图形。页面只传 `title`，不要在页面内复制或重新手画这组结构。
- `BoardLogoWatermark.vue` 是上述榜单页面共用的顶部水印，负责统一资源、坐标、尺寸、透明度和层级；不要在各页面重复实现。
- `BackgroundImage.vue` 统一负责网格、噪点、主题色斜带、白色方框和背景光晕。`accent` 默认为 `true`；副榜和纯过渡背景使用 `:accent="false"`。
- OtmInk Next 的 Figma 导出资源集中在 `src/assets/otmink-next/`。已有 SVG 或图片时直接复用，不要用 CSS 重新绘制视觉近似项，也不要把 Figma 中的占位红色硬编码到页面。
- `/main` 会预载并嵌入 `ExtraView`。当 `more_data` 为非空数组时，主榜播放时长为 `full_time - side_duration`，主榜退场完成后由宿主调用副榜暴露的 `buildAnimation`、`play`、`reset` 接口完成无缝切换。
- `ExtraView` 的 `embedded` 模式不得重复注册 `window` 全局函数、键盘监听或再次规范化共享数据；独立 `/extra` 路由才自行注册这些能力。

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
- `window.test()` 是现有页面的人工重播入口，部分页面也支持按 `T` 触发。修改动画时应保持该入口可用；新增键盘监听必须使用可移除的具名处理函数。

## Vue 与 JavaScript 约定

- 使用 Vue 3 Composition API 和 `<script setup>`，与现有组件保持一致。
- 组件文件使用 PascalCase 命名；路由页面放在 `src/views/`，通用 UI 放在 `src/components/`。
- Props、事件和数据字段沿用周边代码的既有命名，避免仅为统一风格而破坏外部数据协议。
- 主榜的 `type` 会影响共享页头标题（例如 `ytpmv` 显示为 `YTPMV`）；不要在组件内部覆盖这类由注入数据决定的文案。
- `src/data/MainView_data.js` 的 `fun()` 会为 `light_color`、`dark_color` 补全 `oklch(...)`，并把 `web_prefix` 拼接到媒体路径。注入端应传未补函数名的 OKLCH 参数片段及未拼接的相对媒体路径；不要对已经规范化的数据重复调用 `fun()`，也不要只改一层数据而遗漏 `more_data`。
- 主题颜色应从规范化后的 `data.light_color`、`data.dark_color` 等现有字段读取；主榜、副榜、PICK UP 和背景之间必须保持同一套动态颜色来源。
- 优先使用局部、可读的响应式状态；涉及 DOM 或动画的逻辑放在合适的生命周期钩子中。
- 创建 GSAP timeline、监听器或挂到 `window` 的函数时，必须在 `onBeforeUnmount` 中清理。
- 页面动画采用可重复构建的 `buildAnimation({ paused })` 模式：重建前先 `kill()` 旧 timeline，用 `gsap.utils.selector` 将选择器限制在当前画板，并清理 GSAP 写入的 `transform`、`opacity`、`clipPath`、`filter` 等内联属性。
- `window.inject()` 应在数据更新和 `nextTick()` 后建立暂停时间线，供 `window.seek_frame()` 定位；`window.inject_wvc()` 在同样的准备流程后从 0 自动播放。不要把两者合并成同一种播放行为。
- 嵌入式子页面的动画由父页面通过 `defineExpose` 调度；不要让父子组件同时控制同一时间线或抢占同名 `window` 接口。
- 使用模板插值输出普通文本；只有输入已受信任且确实需要 HTML 时才使用 `v-html`。
- 图片应提供合适的 `alt`。纯装饰图片可使用空 `alt`，交互元素应有可读标签。
- 保持现有无分号、单引号的代码风格；提交前遵循仓库 ESLint 与 Prettier 配置。

## 样式与视觉实现

- 组件样式使用 SCSS。全局样式位于 `src/assets/global.scss`，共享 mixin 位于 `src/assets/_mixins.scss`。
- Vite 已自动注入 `_mixins.scss`，组件样式中无需重复导入。
- 优先复用现有颜色、字体、间距、资源和组件，不重复创建视觉近似项。
- 该项目包含面向固定画布的绝对定位和动画。修改尺寸或定位时，要同时检查溢出、层级、动画起止状态及 1920×1080 画布表现。
- 共享背景保留 Figma 大画板到 1920×1080 输出画布的坐标映射。不要在各页面对 `.background-stage`、网格、斜带、noise 或白色方框另加补偿偏移；需要调整时统一修改 `BackgroundImage.vue` 并检查全部使用页面。
- 当前通用层级约定为：背景舞台 `z-index: 1`、顶部水印和主体起始层 `z-index: 2`、右侧主体 `z-index: 3`、共享页头及前景装饰 `z-index: 4`。新增层时应确认不会让 noise 遮住水印或让背景盖住内容。
- 背景网格是 100×100 单元的横线、竖线及对角线组合，并以 4% 不透明度显示；不要退化成普通方格。白色方框使用组级 `drop-shadow`，不要替换为视觉不同的 `box-shadow`。
- `TransitionImage.vue`、`TransView.vue` 以及副榜当前使用无主题色斜带的共享背景；不要重新加入已移除的结尾色条。
- 动画应支持重复初始化：重建 timeline 前清理旧 timeline，并恢复被 GSAP 写入的内联属性。
- 不要无意中把组件样式改成 `scoped`；现有动画选择器和跨组件样式可能依赖全局类名。

## 验证要求

- 普通代码修改至少运行无修复模式的 ESLint 检查和 `npm run build`。
- 样式、布局或动画修改还应在相关路由中进行浏览器验证，检查首帧、播放过程、结束状态以及重复播放。
- 修改共享背景、页头或水印时，至少同时检查 `/main`、`/pick`、`/calendar` 和 `/extra` 的 1920×1080 表现；修改主副榜衔接时要同时验证有 `more_data` 和无 `more_data` 两种路径。
- 动画浏览器验证应实际调用两次 `window.test()`，并验证 `window.inject()` + `window.seek_frame()` 的暂停定位模式以及 `window.inject_wvc()` 的自动播放模式，而不只检查静态最终帧。
- 修改外部注入数据时，至少验证缺省数据与一组注入数据；注意字符串布尔值等既有协议，例如 `data.prevent == 'true'`。
- 当前仓库没有自动化测试脚本。不要声称测试已通过；应明确报告实际运行的检查。
- 若检查失败是由任务前已存在的问题导致，记录具体命令和错误，不要为让检查通过而扩大修改范围。

## 交付说明

- 简要说明改了什么、影响哪些页面或组件。
- 列出实际运行的验证命令及结果。
- 若未进行浏览器视觉验证或存在遗留风险，应明确指出。
