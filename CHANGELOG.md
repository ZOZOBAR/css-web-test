# 更新日志

## 第二阶段 · 子页面上线第一版（2026-11-24）

按 Figma「HI-FI · 子页面」把子页面做成代码。**所有文字照搬原网站 bucssa.org，只改排版。**

**新页面**（网址和原网站对应关系见 README「页面与网址」）
- `/events` 活动总览：筛选标签、近期活动 5 张海报、公众号活动列表、精彩回顾。
- `/events/:slug` 活动详情模板，5 个大活动都已上：新生见面会、非诚勿扰、中秋国庆晚会、新春嘉年华、毕业舞会。
- `/about` 关于我们：SINCE 1994、8 个部门卡片、荣誉墙预览（当届主席团）。
- `/about/:dept` 部门详情模板，8 个部门都已上；各部门原文结构不同，没有的部分自动不显示。
- `/about/honor-wall` 荣誉墙：2025-2026 / 2024-2025 / 2023-2024 三届可切换。
- `/contact` 联系与合作：三个部门邮箱、联系表单（暂用 mailto）、合作伙伴 Logo。
- `/handbook` 新生手册：原 PDF 已失效，先放「内容整理中」。
- 404 页。

**导航**
- 三种状态：顶部全宽透明 → 滚动 100px 收成深色玻璃胶囊 → 滚出 Hero 变红色胶囊（解决以前 Hero 大标题从导航下面穿过、看不清的问题）。
- 新增 hover 下拉（子项按原网站），展开时页面加 20% 暗色遮罩；键盘 Tab 也能展开，Esc 关闭。
- 当前所在栏目下方有一条小横线。手机端汉堡菜单直接列出子项。

**共用组件**（`components/common/`）
- `PageHero`：子页面顶部大图，带两层压色层（整体 25% + 左侧加深）。
- `SectionHeading`、`PageSection`、`Eyebrow`、`CtaPanel`、`PeopleGrid`、按钮（`PrimaryButton` / `OutlineButton` / `PillLink`）、`SmartLink`（自动区分站内 / 外部链接）。

**其他**
- 加入 React Router 和 `vercel.json`（直接打开 `/about` 不会 404）；换页自动回到顶部，带 `#` 时滚到对应位置。
- 新增 Design Tokens：面板米色、分隔线、子页面字号、section 上下间距、卡片 / 面板圆角。
- 首页和页脚的链接改为指向新页面：About 按钮 → `/about`；新生手册 → `/handbook`；加入我们 → CSSA Portal；职发百宝箱、关于网站暂时链到原网站。
- 图片：从原网站下载原图，统一压成 webp（质量 80，长边 1600–2400px，人物照 900px），共约 14MB；荣誉墙照片文件名改为英文（如 `jishubu-1.webp`）。
- 验证：`npm run check`、`npm run build` 通过；桌面 1440 与手机 390 截图对照 Figma。

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
