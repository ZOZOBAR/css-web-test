# BUCSSA Website Test — 更新日志

本文件用于记录 BUCSSA 网站独立测试项目的功能开发、
视觉优化、交互调整及问题修复。

本项目为独立开发与测试环境，不直接影响 BUCSSA 正式网站。

## [v0.1.0] — 2026-11-11

版本状态：初始测试版本

### 新增功能（Added）

- 完成基于 Figma 设计稿的独立前端 Demo。
- 实现 Hero 首页主要视觉布局。
- 实现响应式导航栏。
- 实现滚动后切换为悬浮导航栏的交互。
- 实现移动端 Hamburger Menu 及展开、关闭动画。
- 添加中英文切换按钮的基础交互状态。
- 完成 Footer 基础布局及社交媒体图标。
- 建立独立 GitHub 测试仓库。

### 视觉优化（Improved）

- 调整 Hero 页面文字与按钮布局。
- 优化 CSSA Portal 按钮的玻璃材质效果。
- 统一 Hero 页面 Language Switch 与 Hamburger 的半透明玻璃风格。
- 优化按钮 Hover 状态与过渡动画。
- 保留 Scrolled Navigation 的品牌红色视觉设计。
- 调整移动端导航栏的响应式表现。

### 已知限制（Known Limitations）

- Language Switch 暂未实现真正的中英文内容切换。
- 部分网站内容仍为占位内容。
- 尚未完成全部设备尺寸的响应式测试。
- CSS 中存在部分重复样式，后续需要整理。

### 后续开发计划（Roadmap）

- CSS 样式整理与重复代码清理
- Responsive QA
- Language Switch 动画优化
- 完整中英文内容切换
- 其他网站页面开发
- 无障碍体验优化

## 文档维护规则

### README.md

- 使用英文，主要介绍项目定位、功能、技术栈和运行方式。
- 重大功能变化时更新。

### CHANGELOG.md

- 使用中文，记录实际完成的功能和设计变化。
- 版本条目按 Added / Improved / Fixed / Removed 分类。
- 未完成的功能不得记录为已完成。
- 不需要每次修改 CSS 都升级版本。
- 下一次有意义的更新可使用 v0.1.1。
