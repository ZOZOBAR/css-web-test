import { createGlobalStyle } from "styled-components";

/* ==========================================================
 * GlobalStyles —— 全站唯一的全局样式
 *
 * 这个文件只放三类东西：
 *   1. Reset：统一各浏览器的默认样式
 *   2. Design Tokens：颜色、字体、间距等"全站标准值"
 *   3. 基础元素：html / body / a / button 的默认外观
 *
 * 规则：
 *   - 只属于某一个页面或某一个 section 的样式，不允许写在这里
 *   - 组件里需要颜色、字体时，一律写 var(--xxx)，不要直接写色号
 *   - 断点不在这里，见 styles/breakpoints.ts
 * ========================================================== */
export const GlobalStyles = createGlobalStyle`
  /* ---------- 1. Reset ---------- */

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  ul,
  ol {
    margin: 0;
  }

  ul,
  ol {
    padding: 0;
    list-style: none;
  }

  /* ---------- 2. Design Tokens ---------- */

  :root {
    /* 背景色 */
    --color-bg-body: #e8e4df;            /* 页面底色（Hero 之外的空白处） */
    --color-bg-section: #f5f2ed;         /* 首页各 section 的米色背景 */
    --color-bg-card: #ffffff;            /* 白色卡片 */
    --color-bg-footer: rgba(232, 225, 215, 0.72);
    --color-bg-logo-wall: rgba(232, 225, 215, 0.3);

    /* 文字色 */
    --color-text-body: #1a1a1a;          /* body 默认文字 */
    --color-text-heading: #26292b;       /* About / Events / Community 正文 */
    --color-text-paragraph: #2b2b2b;     /* About 介绍段落（Figma） */
    --color-text-strong: #1f1f1f;        /* Resources / Partners 正文 */
    --color-text-footer: #252525;
    --color-text-secondary: #616161;     /* section 副标题 */
    --color-text-muted: #696a6b;         /* 资源卡说明文字 */
    --color-text-footer-muted: #65605d;
    --color-text-footer-faint: #66615c;
    --color-text-inverse: #ffffff;       /* 深色背景上的白字 */
    --color-icon: #333333;               /* Footer 社交图标默认色 */

    /* 品牌红（目前有多个相近色号，均按 Figma 原值保留，后续由设计统一） */
    --color-brand-dark: #772525;         /* 深红：箭头、Hover、手机菜单 */
    --color-brand: #b24d4d;              /* 主红：导航胶囊、按钮 */
    --color-brand-card: #a94447;         /* "加入我们"卡片底色 */
    --color-brand-label: #9a4849;        /* 卡片小标签 */
    --color-brand-text: #8b3034;         /* 白底按钮上的红字 */
    --color-brand-tint: #f4dcdd;         /* 红底上的浅粉标签 */
    --color-brand-tint-light: #fbecec;   /* 红底上的浅粉正文 */

    /* 线条 */
    --color-divider: #e8e4df;
    --color-line: rgba(38, 41, 43, 0.15);     /* 子页面列表分隔线、描边按钮 */

    /* 子页面（Figma HI-FI · 子页面） */
    --color-bg-panel: #e8e1d7;           /* 结尾号召面板、提示条的米色底 */
    --color-bg-tag: #ece5db;             /* 小标签底色（如"职发部"） */
    --color-text-dark: #26292b;          /* 子页面标题 */
    --color-scrim: 8, 13, 18;            /* Hero 压色层、深色玻璃（RGB，配合 rgba() 使用） */

    /* 字体 */
    --font-body: "PingFang HK", "Noto Sans HK", Inter, sans-serif;
    --font-latin: Inter, "PingFang HK", sans-serif;
    --font-arrow: "Paperlogy 6 SemiBold", Paperlogy, sans-serif;
    --font-switch: Paperlogy, "PingFang HK", "Noto Sans HK", sans-serif;

    /* 字号 */
    --font-size-section-title: clamp(32px, 3.2vw, 52px);
    --font-size-section-subtitle: clamp(17px, 1.5vw, 24px);

    /* 子页面字号（Figma：标题 46 / 正文 18 / 行高 1.75） */
    --font-size-page-heading: clamp(30px, 3.2vw, 46px);
    --font-size-body: clamp(16px, 1.25vw, 18px);
    --line-height-body: 1.75;

    /* 页面左右边距 */
    --space-page-x: clamp(24px, 6vw, 103px);
    --space-page-x-mobile: 24px;

    /* 子页面 section 上下间距（Figma：128） */
    --space-section-y: clamp(72px, 8.9vw, 128px);

    /* 圆角 */
    --radius-image: 12px;
    --radius-card: 16px;
    --radius-panel: 24px;
    --radius-pill: 999px;
  }

  /* ---------- 3. 基础元素 ---------- */

  html {
    scroll-behavior: smooth;
  }

  body {
    background: var(--color-bg-body);
    color: var(--color-text-body);
    font-family: var(--font-body);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font: inherit;
    cursor: pointer;
  }

  /* ---------- 4. 无障碍：用户开启"减少动态效果"时关闭所有动画 ---------- */

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      transition: none !important;
      animation: none !important;
    }
  }
`;
