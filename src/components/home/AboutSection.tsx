/* ==========================================================
 * Section 02 · About 关于我们
 *
 * 位置：首页第 2 块（Hero 之后，Events 之前）
 * 结构：标题 → 左侧两张照片 + 右侧介绍文字和按钮
 * 布局：桌面左右两栏；≤800px 改为上下排列
 * 数据：src/data/about.ts
 *
 * 设计要求（Figma HI-FI，数值已换算到 1440px 网页宽度）：
 *   - 右侧文字从竖图顶部开始，按钮底边和左侧竖图底边对齐
 *   - 正文 22px，行高 1.6，字距 0.05em；关键词加粗
 *   - 按钮 230 × 52，不加箭头
 * ========================================================== */
import styled from "styled-components";
import { SectionContainer, SectionTitle } from "../common/Section";
import { ABOUT_BUTTON, ABOUT_PARAGRAPHS, ABOUT_PHOTOS } from "../../data/about";
import { MEDIA } from "../../styles/breakpoints";

/* ---------- 组件 ---------- */
export default function AboutSection() {
  return (
    <Container id="about" aria-labelledby="about-title">
      {/* 标题 */}
      <Title id="about-title">波士顿大学中国学生学者联合会</Title>

      <Layout>
        {/* 左：照片 */}
        <Photos>
          <WidePhoto src={ABOUT_PHOTOS.wide.src} alt={ABOUT_PHOTOS.wide.alt} />
          <PortraitPhoto src={ABOUT_PHOTOS.portrait.src} alt={ABOUT_PHOTOS.portrait.alt} />
        </Photos>

        {/* 右：介绍文字（上） + 按钮（贴底） */}
        <Copy>
          <Paragraphs>
            {ABOUT_PARAGRAPHS.map((paragraph) => (
              <Paragraph key={paragraph}>{renderBold(paragraph)}</Paragraph>
            ))}
          </Paragraphs>

          <Button href={ABOUT_BUTTON.href}>{ABOUT_BUTTON.label}</Button>
        </Copy>
      </Layout>
    </Container>
  );
}

/* ---------- 工具函数 ---------- */

// 把文字里 **xxx** 包住的部分变成加粗
// 例："成立于**1994年**" → 成立于<Bold>1994年</Bold>
function renderBold(text: string) {
  return text
    .split("**")
    .map((part, index) => (index % 2 === 1 ? <Bold key={index}>{part}</Bold> : part));
}

/* ---------- 样式 ---------- */

// 外框：在共用 SectionContainer 上设定本块的上下间距
const Container = styled(SectionContainer)`
  padding-top: 100px;
  padding-bottom: 118px;
  color: var(--color-text-heading);

  @media ${MEDIA.about} {
    padding: 68px var(--space-page-x-mobile) 76px;
  }
`;

// 标题：比其他 section 稍微拉开一点字距
const Title = styled(SectionTitle)`
  margin-bottom: 48px;
  letter-spacing: 0.02em;
`;

// 左右两栏（按 Figma 比例）：照片 35.8%，中间留白 13.4%，文字 47%，右侧留 3.8%
// 两栏等高（stretch），这样右侧按钮才能贴到和竖图一样的底边
const Layout = styled.div`
  display: grid;
  grid-template-columns: 35.8% 47%;
  column-gap: 13.4%;
  align-items: stretch;

  @media ${MEDIA.about} {
    grid-template-columns: 1fr;
    gap: 34px;
  }
`;

// 照片列：两张照片上下排列
const Photos = styled.div`
  display: grid;
  align-content: start;
  gap: 38px;
`;

// 照片通用样式
const Photo = styled.img`
  display: block;
  width: 100%;
  border-radius: 11px;
  object-fit: cover;
`;

// 上方横图
const WidePhoto = styled(Photo)`
  height: 242px;

  @media ${MEDIA.about} {
    height: 230px;
  }
`;

// 下方竖图：按 Figma 靠底部裁切，保留站在楼梯下方的人
const PortraitPhoto = styled(Photo)`
  height: 584px;
  object-position: center bottom;

  @media ${MEDIA.about} {
    height: 420px;
  }
`;

// 文字列：文字在上，按钮贴底；文字太长时按钮至少和文字隔 33px
const Copy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 33px;
  color: var(--color-text-paragraph);
  font-size: clamp(17px, 1.53vw, 22px);
  line-height: 1.6;
  letter-spacing: 0.05em;

  @media ${MEDIA.about} {
    font-size: 17px;
  }
`;

// 段落组：两段之间隔 63px
const Paragraphs = styled.div`
  display: grid;
  gap: 63px;

  @media ${MEDIA.about} {
    gap: 28px;
  }
`;

// 段落
const Paragraph = styled.p``;

// 加粗关键词：Figma 里加粗字的字距比正文略紧
const Bold = styled.strong`
  font-weight: 700;
  letter-spacing: 0.0125em;
`;

// 红色按钮："关于我们 · 了解各部门"（Figma：230 × 52，圆角 19）
const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  min-width: 230px;
  height: 52px;
  padding: 0 27px;
  border-radius: 19px;
  background: var(--color-brand);
  color: var(--color-text-inverse);
  font-size: 17px;
  font-weight: 600;
  letter-spacing: normal;
  white-space: nowrap;

  &:focus-visible {
    outline: 3px solid var(--color-text-footer);
    outline-offset: 3px;
  }
`;
