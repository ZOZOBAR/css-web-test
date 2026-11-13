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
│   └── assets/          # 图片、Logo 和社交媒体 SVG
├── src/
│   ├── components/      # Homepage 主要组件
│   ├── styles/          # GlobalStyles.ts 与 legacy.css
│   ├── App.tsx          # 页面组件组合
│   └── main.tsx         # React 入口
├── package.json
├── vite.config.ts
└── tsconfig.json
```

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
npm run typecheck    # TypeScript 类型检查
npm run build        # 构建生产版本
npm run preview      # 预览已构建版本
```

## Homepage 组件说明

- `Navigation.tsx`：固定导航、滚动状态、Brand Morph、移动菜单与语言切换演示；修改前应完成视觉检查。
- `Hero.tsx`：首屏波士顿航拍背景、标题与副标题。
- `AboutSection.tsx`：组织介绍和 About CTA。
- `EventsSection.tsx`：Featured Events 图片与 Caption。
- `CommunitySection.tsx`：社群活动 Gallery。
- `StudentsSection.tsx`：新生手册、职发百宝箱和加入 BUCSSA 内容。
- `PartnersSection.tsx`：合作伙伴 Logo Gallery。
- `Footer.tsx`：组织信息、网站链接与社交媒体图标。

## 样式与资源管理

组件使用 Styled Components 编写局部样式。`src/styles/GlobalStyles.ts` 负责载入全局样式，`src/styles/legacy.css` 保留迁移阶段所需的全局和 Navigation 样式。

- Homepage 图片和合作伙伴 Logo：`public/assets/home/`
- 组织 Logo 和社交媒体 SVG：`public/assets/`

修改全局样式前请确认不会影响其他组件；Navigation 的 DOM、布局和 Brand Morph 动画不应因普通页面修改而改变。

## GitHub 协作规范

- 不直接修改生产环境。
- 新功能优先在独立分支开发。
- 修改前同步最新代码。
- Commit 信息应清楚描述修改内容。
- 提交前运行 `npm run typecheck` 和 `npm run build`。
- 不提交 `node_modules`、`dist`、敏感信息或本地环境文件。

## 当前开发状态与后续计划

Homepage V2.0 已完成第一阶段视觉验收。后续包括其他页面开发、响应式体验完善、前端组件维护，以及与 BUCSSA 正式开发仓库整合。
