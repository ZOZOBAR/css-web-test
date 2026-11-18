# BUCSSA Website 2.0

> 波士顿大学中国学生学者联合会官方网站 2.0 — React 前端开发项目

## 项目简介

BUCSSA Website 2.0 是 BUCSSA 官方网站的前端开发项目。当前版本为 React + TypeScript 项目，Homepage 已完成第一阶段视觉设计与组件迁移。本仓库用于开发、测试和团队协作，不是正式生产环境。

## 技术栈

- React
- TypeScript
- Vite
- Styled Components
- HTML / CSS
- Git / GitHub

具体依赖和版本以 [package.json](package.json) 为准。

## 项目目录结构

```text
.
├── public/
│   └── assets/              # 图片、Logo 和社交媒体 SVG
├── src/
│   ├── pages/               # 页面：把 section 按顺序拼起来
│   ├── components/
│   │   ├── layout/          # 全站共用：Navigation、Footer
│   │   ├── common/          # 共用小组件：SectionContainer、SectionTitle
│   │   └── home/            # 首页各 section
│   ├── data/                # 文字、图片路径、链接
│   ├── styles/              # GlobalStyles.ts（全局样式 + Tokens）、breakpoints.ts
│   ├── App.tsx              # 网站外壳
│   └── main.tsx             # React 入口
├── CONVENTIONS.md           # 代码规范（开发前必读）
├── package.json
├── vite.config.ts
└── tsconfig.json
```

**写代码前请先读 [CONVENTIONS.md](CONVENTIONS.md)。**

## 如何在本地运行网站

### 第一步：安装 Node.js

请安装当前支持的 Node.js LTS 版本。安装后可在 Terminal 运行 `node -v` 与 `npm -v` 确认。

### 第二步：下载项目

```bash
git clone https://github.com/ZOZOBAR/css-web-test.git
```

### 第三步：进入项目

```bash
cd css-web-test
```

### 第四步：安装依赖

```bash
npm install
```

### 第五步：启动本地服务器

```bash
npm run dev
```

### 第六步：打开浏览器

访问 Terminal 显示的 `Local` 地址，通常是 <http://localhost:5173/>。

这是 React + Vite 项目，不能像传统 HTML 网站一样直接双击 `index.html` 运行。

## 日常开发流程

1. 使用 VS Code 打开项目文件夹。
2. 运行 `npm run dev`。
3. 修改 TSX 或样式文件后，Vite 的 Hot Module Replacement（HMR）会自动更新浏览器页面。
4. 在运行服务器的 Terminal 按 `Control + C` 停止服务。

## 常用命令

```bash
npm install          # 安装依赖
npm run dev          # 启动本地服务器
npm run check        # 提交前跑：类型检查 + ESLint + 格式检查
npm run format       # 用 Prettier 自动整理 src 里的代码格式
npm run lint         # 只跑 ESLint
npm run typecheck    # 只跑 TypeScript 类型检查
npm run build        # 构建生产版本
npm run preview      # 预览已构建版本
```

用 VS Code 打开项目时，按提示安装推荐扩展（Prettier、ESLint）。之后保存文件会自动格式化，详见 [CONVENTIONS.md](CONVENTIONS.md)。

## Homepage 组件说明

| 编号 | 文件 | 内容 | 数据 |
|---|---|---|---|
| — | `layout/Navigation.tsx` | 固定导航、滚动后红色胶囊、Brand Morph、手机菜单、语言切换（演示） | `data/navigation.ts` |
| 01 | `home/HeroSection.tsx` | 首屏波士顿背景、标题与副标题 | — |
| 02 | `home/AboutSection.tsx` | 组织介绍与按钮 | `data/about.ts` |
| 03 | `home/EventsSection.tsx` | 精选活动照片与图注 | `data/events.ts` |
| 04 | `home/CommunitySection.tsx` | 社群活动三图画廊 | `data/community.ts` |
| 05 | `home/ResourcesSection.tsx` | 新生手册、职发百宝箱、加入我们 | `data/resources.ts` |
| 06 | `home/PartnersSection.tsx` | 合作伙伴 Logo 墙 | `data/partners.ts` |
| — | `layout/Footer.tsx` | 组织信息、链接、社交图标 | `data/footer.ts` |

## 内容修改指南

### 文件分工

| 位置 | 放什么 | 不放什么 |
|---|---|---|
| `src/data/*.ts` | 文字、图片路径、图片 alt、链接地址、单张图片的显示参数（`position`、`scale`） | 布局和样式 |
| `src/components/**/*.tsx` | 结构（HTML 标签）和样式（styled-components） | 大段文字、图片列表、链接列表 |
| `src/pages/*.tsx` | 一个页面由哪些 section 组成、排列顺序 | 内容和样式 |
| `src/styles/GlobalStyles.ts` | 全站颜色、字体、字号、间距变量 | 某一个 section 专用的样式 |
| `public/assets/` | 图片文件本身 | — |

引用方向：`data` → 被 `components` 引用 → `components` 被 `pages` 引用 → `pages` 被 `App.tsx` 引用。

**换图片的步骤**：把新图片放进 `public/assets/home/`，再到对应的 `data` 文件里改路径和 `alt`。

### 各 section 内容清单

目前 section 的大标题、副标题还写在组件里，下表的"位置"一栏写明了具体文件。

#### Navigation（`components/layout/Navigation.tsx`）

| 内容 | 位置 | 字段 / 说明 |
|---|---|---|
| 5 个导航链接 | `data/navigation.ts` | `NAV_ITEMS`：`label` 显示文字，`href` 跳转地址 |
| Logo 图片 | 组件内 | `/assets/logo.png` |
| "BUCSSA" 文字、"跳转到内容"、中 / EN | 组件内 | — |

#### 01 Hero（`components/home/HeroSection.tsx`）

| 内容 | 位置 | 字段 / 说明 |
|---|---|---|
| 标题 "BUCSSA"、副标题、"SCROLL TO EXPLORE" | 组件内 | 没有 data 文件 |
| 背景图 | 组件内样式 `Container` | `/assets/home/hero-boston.png` |
| 区块 id | 组件内 | `id="top"`，导航和"返回顶部"都靠它，不能改 |

#### 02 About（`components/home/AboutSection.tsx`）

| 内容 | 位置 | 字段 / 说明 |
|---|---|---|
| 大标题 | 组件内 | "波士顿大学中国学生学者联合会" |
| 两张照片 | `data/about.ts` | `ABOUT_PHOTOS.wide`（上方横图）、`ABOUT_PHOTOS.portrait`（下方竖图），各有 `src`、`alt` |
| 两段介绍 | `data/about.ts` | `PARAGRAPH_ONE`、`PARAGRAPH_TWO`，一句一行；用 `**文字**` 标记加粗 |
| 按钮 | `data/about.ts` | `ABOUT_BUTTON`：`label`、`href` |

注意：按钮底边要和左边竖图底边对齐。文字变长以后，按钮会被往下推。改文案后需要在 1440px 宽度下检查一遍。

#### 03 Events（`components/home/EventsSection.tsx`）

| 内容 | 位置 | 字段 / 说明 |
|---|---|---|
| 大标题 | 组件内 | "在这里，发现更多精彩" |
| 左侧大图 | `data/events.ts` | `MAIN_EVENT`：`src`、`alt`、`caption`（图注） |
| 右侧两张小图 | `data/events.ts` | `SIDE_EVENTS`，从上到下；`caption` 可不填 |

#### 04 Community（`components/home/CommunitySection.tsx`）

| 内容 | 位置 | 字段 / 说明 |
|---|---|---|
| 大标题 | 组件内 | "一起留下，属于我们的精彩瞬间" |
| 三张照片 | `data/community.ts` | `COMMUNITY_PHOTOS`，第 1 张显示为大图；`src`、`alt` |
| 取景位置 | `data/community.ts` | `position`，可不填（默认居中）。人被裁掉时调这个值，例如 `"46% center"` |

#### 05 Resources（`components/home/ResourcesSection.tsx`）

| 内容 | 位置 | 字段 / 说明 |
|---|---|---|
| 大标题、副标题、"学生资源"标签 | 组件内 | — |
| 资源列表（新生手册、职发百宝箱） | `data/resources.ts` | `RESOURCES`：`title`、`description`、`href` |
| "加入我们"卡片 | `data/resources.ts` | `JOIN_CARD`：`label` 标签、`title` 两行标题、`description` 两行说明、`buttonLabel`、`href` |

#### 06 Partners（`components/home/PartnersSection.tsx`）

| 内容 | 位置 | 字段 / 说明 |
|---|---|---|
| 大标题、副标题 | 组件内 | — |
| 8 个 Logo | `data/partners.ts` | `PARTNERS`，顺序就是页面顺序（桌面每行 4 个） |
| 单个 Logo 字段 | `data/partners.ts` | `name`（同时作为 alt）、`src`、`width` / `height`（最大显示尺寸）、`scale`（放大倍数，可不填） |

注意：PNG 四周有大片透明边的 Logo，用 `scale` 放大补偿。

#### Footer（`components/layout/Footer.tsx`）

| 内容 | 位置 | 字段 / 说明 |
|---|---|---|
| 社交图标 | `data/footer.ts` | `SOCIAL_LINKS`：`name`（读屏名称）、`icon`（SVG 路径）、`href` |
| "探索"栏链接 | `data/footer.ts` | `EXPLORE_LINKS`：`label`、`href` |
| "资源"栏链接 | `data/footer.ts` | `RESOURCE_LINKS`：`label`、`href` |
| 邮箱 | `data/footer.ts` | `CONTACT_EMAIL` |
| "关于网站"链接 | `data/footer.ts` | `ABOUT_SITE_LINK` |
| 学联中英文名称、栏目标题、"返回顶部" | 组件内 | — |

注意：社交链接目前都指向 `#footer`，拿到正式账号地址后再替换。

### 页面内的跳转地址

首页各 section 的 `id`，链接写 `#id` 就能跳转过去：

| Section | id |
|---|---|
| Hero | `top` |
| 正文起点 | `main` |
| About | `about` |
| Events | `events` |
| Community | `community` |
| Resources | `resources` |
| Partners | `partners` |
| Footer | `footer` |

## 样式与资源管理

全站只有一个全局样式文件 `src/styles/GlobalStyles.ts`，里面是 Reset 和 Design Tokens（颜色、字体、间距变量）。其余样式都写在各组件里（Styled Components）。详见 [CONVENTIONS.md](CONVENTIONS.md)。

- Homepage 图片和合作伙伴 Logo：`public/assets/home/`
- 组织 Logo 和社交媒体 SVG：`public/assets/`

Navigation 的 Brand Morph 动画依赖 Hero 的 `id="top"`，修改 Hero 时不要改这个 id。

## GitHub 协作规范

- 不直接修改生产环境。
- 新功能优先在独立分支开发。
- 修改前同步最新代码。
- Commit 信息应清楚描述修改内容。
- 提交前运行 `npm run check` 和 `npm run build`。
- 不提交 `node_modules`、`dist`、敏感信息或本地环境文件。

## 当前开发状态与后续计划

Homepage 已完成第一阶段：代码规范化、Prettier / ESLint 接入、About 与 Community 按 Figma 对齐。线上预览：<https://css-web-test.vercel.app>

第二阶段计划开发其余 10 个页面（活动总览、4 个大活动详情、小活动、新生手册、学联与部门介绍、历届成员、合作与联系），之后再与 BUCSSA 正式开发仓库整合。
