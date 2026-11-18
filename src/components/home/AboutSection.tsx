/* ==========================================================
 * Section 02 · About 关于我们
 *
 * 位置：首页第 2 块（Hero 之后，Events 之前）
 * 结构：标题 → 左侧两张照片 + 右侧介绍文字和按钮
 * 布局：桌面左右两栏；≤800px 改为上下排列
 * 数据：src/data/about.ts
 *
 * 设计要求：底部按钮不加箭头（已和设计确认）
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

        {/* 右：介绍文字 + 按钮 */}
        <Copy>
          {ABOUT_PARAGRAPHS.map((paragraph) => (
            <Paragraph key={paragraph}>{paragraph}</Paragraph>
          ))}

          <Button href={ABOUT_BUTTON.href}>{ABOUT_BUTTON.label}</Button>
        </Copy>
      </Layout>
    </Container>
  );
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
  margin-bottom: 45px;
  letter-spacing: 0.02em;
`;

// 左右两栏：左边照片窄，右边文字宽
const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(320px, 0.78fr) minmax(420px, 1fr);
  align-items: start;
  gap: clamp(48px, 11vw, 190px);

  @media ${MEDIA.about} {
    grid-template-columns: 1fr;
    gap: 34px;
  }
`;

// 照片列：两张照片上下排列
const Photos = styled.div`
  display: grid;
  gap: 24px;
`;

// 照片通用样式
const Photo = styled.img`
  display: block;
  width: 100%;
  border-radius: 13px;
  object-fit: cover;
`;

// 上方横图
const WidePhoto = styled(Photo)`
  height: 282px;

  @media ${MEDIA.about} {
    height: 230px;
  }
`;

// 下方竖图：取景稍微偏上，避免裁掉人脸
const PortraitPhoto = styled(Photo)`
  height: 684px;
  object-position: center 36%;

  @media ${MEDIA.about} {
    height: 420px;
  }
`;

// 文字列
const Copy = styled.div`
  font-size: clamp(17px, 1.55vw, 25px);
  line-height: 1.62;
  letter-spacing: 0.035em;

  @media ${MEDIA.about} {
    font-size: 17px;
  }
`;

// 段落
const Paragraph = styled.p`
  margin-bottom: 28px;
`;

// 红色按钮："关于我们 · 了解各部门"
const Button = styled.a`
  display: inline-block;
  margin-top: 18px;
  padding: 16px 29px;
  border-radius: 22px;
  background: var(--color-brand);
  color: var(--color-text-inverse);
  font-size: 18px;
  font-weight: 600;

  &:focus-visible {
    outline: 3px solid var(--color-text-footer);
    outline-offset: 3px;
  }
`;
