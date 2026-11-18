# 代码规范

> 写新页面、改组件之前请先读一遍。
> 首页的 8 个组件都按这份规范写，可以直接照着抄。最短的示例是 `src/components/home/CommunitySection.tsx`。

## 1. 文件放哪里

```text
src/
├── main.tsx                 # 入口，一般不用动
├── App.tsx                  # 网站外壳：导航 + 页面 + 页脚
├── pages/                   # 一个页面一个文件，负责把 section 按顺序拼起来
│   └── HomePage.tsx
├── components/
│   ├── layout/              # 全站共用：Navigation、Footer
│   ├── common/              # 多个 section 共用的小组件：SectionContainer、SectionTitle 等
│   └── home/                # 首页专用的 section，一个 section 一个文件
├── data/                    # 文字、图片路径、链接等内容，和组件代码分开
└── styles/
    ├── GlobalStyles.ts      # 全局样式 + Design Tokens
    └── breakpoints.ts       # 断点
```

新页面照着首页来：在 `components/` 下新建一个文件夹（比如 `events/`），在 `pages/` 下新建一个页面文件。

## 2. 样式分三层

| 层 | 文件 | 放什么 | 不放什么 |
|---|---|---|---|
| 全局 | `styles/GlobalStyles.ts` | Reset、颜色/字体/间距变量、`body`/`a`/`button` 默认样式 | 任何只属于某个页面的样式 |
| 共用 | `components/common/` | 每个 section 都一样的外框、标题 | 某一块专用的样式 |
| 组件 | 各 section 文件底部 | 这一块自己的布局和细节 | 字符串 `className`、`&&` |

**颜色和字体**一律写 `var(--xxx)`，变量都定义在 `GlobalStyles.ts` 的 `:root` 里。需要新颜色时先加变量，再使用。

**断点**一律写 `@media ${MEDIA.mobile}`。新代码只用 `mobile`（740px）和 `tablet`（1050px）。

**只属于某一块的尺寸**（某张图的高度、某个格子的间距）可以直接写数字，但上面要有注释说明是什么。

## 3. 一个组件文件长什么样

固定顺序：**标注块 → import → 组件 → 样式**。

```tsx
/* ==========================================================
 * Section 04 · Community 社群瞬间
 *
 * 位置：首页第 4 块（Events 之后，Resources 之前）
 * 结构：标题 → 三图画廊
 * 布局：桌面 1 大 2 小三列；手机单列
 * 数据：src/data/community.ts
 * ========================================================== */
import styled from "styled-components";
// ...其他 import

/* ---------- 组件 ---------- */
export default function CommunitySection() {
  return (
    <Container id="community" aria-labelledby="community-title">
      {/* 标题 */}
      <Title id="community-title">...</Title>

      {/* 三图画廊 */}
      <Gallery>...</Gallery>
    </Container>
  );
}

/* ---------- 样式 ---------- */

// 画廊：桌面三列，第一张大图占 2.15 份
const Gallery = styled.div`
  ...
`;
```

### 必须有的注释

1. **文件开头的标注块**：第几块 / 位置 / 结构 / 布局 / 数据来源。有特殊设计要求（比如"按钮不加箭头"）也写在这里。
2. **JSX 里每个子区域上方**：一行 `{/* ... */}` 说明这是什么。
3. **每个 styled component 上方**：一行 `//` 说明它是什么、有什么特别之处。
4. **样式比较长时**用 `/* -- 小标题 -- */` 再分组，比如 `/* -- 左：学生资源卡 -- */`。

注释用中文，写"这是什么、为什么这样"，不要逐行翻译代码。

## 4. 命名

| 东西 | 写法 | 例子 |
|---|---|---|
| section 组件文件 | 大驼峰 + `Section` | `EventsSection.tsx` |
| section 最外层 | `Container` | `const Container = styled(SectionContainer)` |
| section 标题 | `Title` / `Subtitle` | `const Title = styled(SectionTitle)` |
| 其他 styled component | 说清楚它是什么 | `GalleryImage`、`JoinButton` |
| 数据常量 | 全大写 + 下划线 | `COMMUNITY_PHOTOS` |
| 类型 | 大驼峰 | `CommunityPhoto` |
| 只给样式用的 props | 以 `$` 开头 | `$isScrolled`、`$scale` |
| 布尔值 | `is` / `has` 开头 | `isMenuOpen` |

组件统一用 `export default function Xxx() {}`。

## 5. 内容放 `data/`

文字、图片路径、链接放在 `src/data/` 里，组件只负责"怎么摆"。以后换届改文案、换照片，只改 data 文件。

## 6. 语义和无障碍

- 每个 section 用 `<section>`，带 `id` 和 `aria-labelledby` 指向自己的标题。
- 一个页面只有一个 `<h1>`（在 Hero）。section 标题用 `<h2>`，卡片标题用 `<h3>`。
- 列表用 `<ul>` / `<li>`，图片和图注用 `<figure>` / `<figcaption>`。
- 每张图片都要写 `alt`。纯装饰的图写 `alt=""`。
- 只有图标、没有文字的链接，要写 `aria-label`。

## 7. 一个容易踩的坑

styled-components 会把 `@media` 规则排在普通规则**后面**。如果一个值既要随状态变（比如导航滚动后），又要在手机上不一样，不能只写在 `css\`\`` 块里，要在每个断点里用 props 判断取值。例子见 `Navigation.tsx` 里的 `BrandLogo`。

## 8. 提交前

```bash
npm run typecheck
npm run build
```

两条都通过再提交。改了视觉的，在桌面和手机（≤740px）各看一遍。
