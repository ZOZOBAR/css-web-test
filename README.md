# BUCSSA Interactive Demo v0.2

独立的 HTML/CSS/JavaScript 交互演示，不会修改正式 BUCSSA 项目。

## 如何打开（Mac）

1. 解压 ZIP。
2. 用终端进入解压后的 `BUCSSA_Demo_v0.2` 文件夹。
3. 运行 `python3 -m http.server 5500`。
4. 浏览器打开 `http://localhost:5500`。

也可以用 VS Code 的 Live Server。

## 当前范围
- 真实 Figma Boston Hero 图片及 BUCSSA Logo
- HTML 可编辑主标题、中文副标题和 Portal CTA
- IntersectionObserver：Hero 离开视口后导航转为深红色悬浮胶囊，支持滚回恢复
- Footer 真实六个 SVG 图标、联系信息、返回顶部
- 中间内容为滚动测试占位区；语言切换仅为视觉交互；导航/社交链接为演示锚点，不代表已接入真实页面

## 视觉还原注意
- 字体优先调用本机 PingFang HK / PingFang SC；未内嵌商业字体文件。
- Figma 源图宽约 2931px，网页使用响应式 CSS，不直接将 Figma 像素尺寸固定为浏览器像素。
- Footer 样式已按已知视觉规范搭建，仍需要在浏览器中与 Figma 并排对照微调。
- 设计资产来自用户提供的 `设计转开发.zip`。
