BUCSSA Website Test

BUCSSA 网站前端开发与测试项目

项目概述（Overview）

BUCSSA Website Test 是一个用于 BUCSSA 网站的独立前端开发与测试仓库。

本项目主要用于：

* Figma 设计稿的前端实现
* 新功能开发与实验
* UI/UX 视觉设计优化
* 响应式布局测试
* 交互原型验证

注意： 本项目为独立开发与测试环境，并非 BUCSSA 官方正式网站，不会直接影响正式网站的运行。

当前功能（Current Features）

* Hero Section： 首页主视觉区域
* Responsive Navigation： 响应式导航栏
* Floating Navigation： 页面滚动后切换为悬浮导航栏
* Mobile Hamburger Menu： 移动端折叠菜单
* Language Switch： 中英文切换按钮（目前仅为交互演示，尚未实现实际语言切换）
* Global Footer： 全局页脚及社交媒体图标
* Glass-style UI： 半透明玻璃质感交互控件

技术栈（Tech Stack）

本项目使用原生前端技术开发：

* HTML5： 页面结构
* CSS3： 视觉样式、布局及响应式设计
* Vanilla JavaScript： 页面交互与动态效果

目前未使用 React、Vue 等前端框架，也不依赖额外的构建工具。

项目结构（Project Structure）

.
├── assets/          # 图片、Logo 及社交媒体 SVG 图标
├── index.html       # 页面 HTML 结构
├── styles.css       # 视觉样式与响应式布局
├── script.js        # 导航栏及基础交互逻辑
├── README.md        # 项目说明文档
└── CHANGELOG.md     # 开发更新日志

本地开发（Local Development）

本项目无需安装额外依赖，也不需要执行构建操作。

方法一：直接在浏览器中打开

1. 克隆或下载本项目。
2. 进入项目文件夹。
3. 使用浏览器打开 index.html。
4. 即可预览当前网页。

方法二：使用本地服务器

在项目根目录打开 Terminal，执行：

python3 -m http.server 5500

随后在浏览器访问：

http://localhost:5500

即可通过本地服务器预览项目。

网站部署（Deployment）

本项目为静态网站，可以使用 GitHub Pages 进行部署。

部署步骤：

1. 打开 GitHub 项目仓库。
2. 进入 Settings → Pages。
3. 在 Build and deployment 中选择 Deploy from a branch。
4. 选择 main 分支及 / (root) 目录。
5. 保存设置并等待 GitHub 完成部署。
6. 通过生成的网站地址检查部署结果。

注意： 本文档不代表 GitHub Pages 已经成功部署，实际部署状态需要在仓库中确认。

开发状态（Development Status）

当前版本：v0.1.0

版本阶段：初始测试版本（Initial Testing Release）

目前已经完成网站的基础视觉结构、导航交互和第一轮响应式布局。

后续将逐步完善其他页面、语言切换功能及交互体验。

更新日志（Changelog）

项目开发过程中的功能新增、视觉优化、问题修复及后续计划统一记录在：

CHANGELOG.md

建议每完成一个明确的开发阶段后更新日志，以便追踪项目进展和版本变化。
