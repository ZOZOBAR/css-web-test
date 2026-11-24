/* ==========================================================
 * About Section 02 · Intro 组织介绍
 *
 * 位置：关于我们页第 2 块（Hero 之后）
 * 结构：左边「SINCE / 1994」→ 介绍段落 → 分隔线 + 4 个服务范围；右边竖版合照
 * 布局：桌面左右两栏（文字 40% / 照片 48%）；≤740px 上下排列
 * 数据：src/data/aboutPage.ts 的 ABOUT_INTRO
 * ========================================================== */
import styled from "styled-components";
import { PageSection, Eyebrow } from "../common/Section";
import { ABOUT_INTRO } from "../../data/aboutPage";
import { MEDIA } from "../../styles/breakpoints";

/* ---------- 组件 ---------- */
export default function AboutIntro() {
  return (
    <PageSection aria-labelledby="intro-year">
      <Layout>
        {/* 左：年份 + 介绍 + 服务范围 */}
        <Copy>
          <Eyebrow>{ABOUT_INTRO.eyebrow}</Eyebrow>
          <Year id="intro-year">{ABOUT_INTRO.year}</Year>
          <Paragraph>{ABOUT_INTRO.paragraph}</Paragraph>
          <Scopes>
            {ABOUT_INTRO.scopes.map((scope) => (
              <li key={scope}>{scope}</li>
            ))}
          </Scopes>
        </Copy>

        {/* 右：合照 */}
        <Photo src={ABOUT_INTRO.photo.src} alt={ABOUT_INTRO.photo.alt} />
      </Layout>
    </PageSection>
  );
}

/* ---------- 样式 ---------- */

// 两栏：文字和照片顶部对齐
const Layout = styled.div`
  display: grid;
  grid-template-columns: 43% 50%;
  justify-content: space-between;
  align-items: start;

  @media ${MEDIA.mobile} {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

// 文字列
const Copy = styled.div`
  display: grid;
`;

// 「1994」：英文字体，特大号
const Year = styled.h2`
  margin-bottom: 36px;
  font-family: var(--font-latin);
  font-size: clamp(88px, 10.4vw, 150px);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.02em;
`;

// 介绍段落
const Paragraph = styled.p`
  color: var(--color-text-paragraph);
  font-size: clamp(16px, 1.4vw, 20px);
  line-height: 1.8;
`;

// 服务范围：上方一条深色分隔线，4 个词横排
const Scopes = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 56px;
  padding-top: 24px;
  border-top: 1.5px solid var(--color-text-dark);
  font-size: clamp(18px, 1.5vw, 22px);
  font-weight: 700;
`;

// 竖版合照
const Photo = styled.img`
  width: 100%;
  aspect-ratio: 630 / 755;
  border-radius: var(--radius-image);
  object-fit: cover;

  @media ${MEDIA.mobile} {
    aspect-ratio: 4 / 5;
  }
`;
