# 更新日志

## 文档 — README 内容修改指南（2026-11-18）

- README 新增"内容修改指南"：文件分工、各 section 的内容清单（每项内容写在哪个文件、哪个字段）、页面内跳转 id 一览。
- `data/partners.ts`：8 个 Logo 统一改为多行写法，数值不变。

## About / Community 对齐 Figma（2026-11-18）

按 Figma HI-FI 稿（换算到 1440px 宽度）调整两个区块，其他区块不变。

**About**
- 正文 22px、行高 1.6、字距 0.05em、颜色 #2b2b2b；5 处关键词加粗（成立于1994年、BUCSSA的核心使命、全面的支持和服务、促进文化交流和培养社群意识、归属感和友情）。
- 正文改用 Figma 稿原文（含半角标点），保证文字长度与设计一致。
- 两栏宽度按 Figma：照片 35.8%、留白 13.4%、文字 47%。
- 按钮底边与左侧竖图底边对齐，消除右下多余留白；按钮 230 × 52，圆角 19，字号 17。
- 照片：横图 242px、竖图 584px（靠底部裁切）、间距 38px、圆角 11px。

**Community**
- 图片高 410px、宽度比例 640 : 296 : 280、圆角 10px，标题下间距 28px。
- 第二张照片取景从 61% 改为 46%，三个人完整入镜（原来左边第一个人的头被裁掉）。
- 取景位置移到 `data/community.ts` 的 `position` 字段，换照片时直接改。

## 开发工具 — Prettier + ESLint（2026-11-18）

页面视觉没有任何变化。

- 新增 Prettier：统一代码格式（每行最多 100 字符、2 格缩进、双引号、分号）。配置在 `.prettierrc.json`。
- 新增 ESLint：检查未使用变量、Hooks 用法等问题。配置在 `eslint.config.js`。
- 新增 `.vscode/` 设置：保存时自动格式化，并推荐安装 Prettier、ESLint、styled-components 扩展。
- 新增命令：`npm run check`（类型检查 + lint + 格式检查）、`npm run format`、`npm run lint`。
- 用 Prettier 整理了 6 个文件的换行和对齐，没有改动任何内容。
- 更新 `CONVENTIONS.md` 和 README 的提交前检查说明。
- 验证：check、build 通过；22 张截图与重构前逐像素一致。

## Homepage V2.1 — 代码规范化（2026-11-18）

页面视觉没有任何变化，只改代码结构。

- 首页 8 个组件按统一规范重写，每个文件开头有 section 标注，组件和样式都有中文注释。
- 删除 `legacy.css`（1077 行），样式全部改为 Styled Components；不再需要 `&&` 和 `display: none` 压样式。
- 新增 `GlobalStyles.ts` Design Tokens：颜色、字体、间距统一用 CSS 变量。
- 新增 `breakpoints.ts`，断点统一管理。
- 新增 `components/common/Section.tsx`：所有 section 共用的外框、标题、副标题。
- 文字、图片、链接移到 `src/data/`，和组件代码分开。
- 目录调整：`components/layout/`（全站共用）、`components/home/`（首页）、`pages/`（页面）。
- 重命名：`Hero` → `HeroSection`，`StudentsSection` → `ResourcesSection`。
- Navigation 改为用 React state 控制样式，不再直接操作 DOM class。
- 删除未使用的 `DemoPlaceholder.tsx`。
- 修复：`<main>` 补上 `id="main"`，"跳转到内容"链接可以正常使用。
- 修复：Community 区块补上 `id="community"`。
- 改进：社交图标的读屏名称改为中文（微信、小红书等）；资源列表改用 `<ul>/<li>`，卡片改用 `<article>`。
- 新增 `CONVENTIONS.md` 代码规范。
- 验证：typecheck、build 通过；8 种屏幕宽度（390–1440px）、滚动前后、手机菜单展开共 22 张截图与重构前逐像素一致。

## Homepage V2.0 — React 迁移

- 完成 React + TypeScript 前端项目迁移。
- 完成 Homepage 组件化。
- 完善 Navigation 交互与 Brand Morph 动画。
- 更新 Featured Events 布局。
- 完善 Partners Logo Gallery。
- 增加 Footer 社交图标与 Hover 动画。
- 增加 Student Resources、Join Us 与 About 按钮交互。
- 完成 TypeScript 检查与 Vite Build 验证。
- 迁移至 GitHub 测试仓库 `ZOZOBAR/css-web-test`。
