/* ==========================================================
 * Section 06 · Partners 合作伙伴
 *
 * 位置：首页第 6 块（Resources 之后，Footer 之前）
 * 结构：标题 + 副标题 → Logo 墙
 * 布局：桌面 4 列 × 2 行；手机 2 列
 * 数据：src/data/partners.ts（顺序、尺寸、放大倍数都在那里改）
 * ========================================================== */
import styled from "styled-components";
import { SectionContainer, SectionSubtitle, SectionTitle } from "../common/Section";
import { PARTNERS } from "../../data/partners";
import { MEDIA } from "../../styles/breakpoints";

/* ---------- 组件 ---------- */
export default function PartnersSection() {
  return (
    <Container id="partners" aria-labelledby="partners-title">
      {/* 标题 + 副标题 */}
      <Title id="partners-title">一路同行，共创更多可能</Title>
      <Subtitle>感谢合作伙伴的支持，与我们一起为 BU 中国学生学者社区创造更多精彩</Subtitle>

      {/* Logo 墙 */}
      <LogoGrid>
        {PARTNERS.map((partner) => (
          <LogoCell key={partner.name}>
            <Logo
              src={partner.src}
              alt={partner.name}
              $maxWidth={partner.width}
              $maxHeight={partner.height}
              $scale={partner.scale ?? 1}
            />
          </LogoCell>
        ))}
      </LogoGrid>
    </Container>
  );
}

/* ---------- 样式 ---------- */

// 外框：左右边距按 Figma 比其他 section 略窄；底部留白较大（下面接 Footer）
const Container = styled(SectionContainer)`
  padding: 94px clamp(24px, 5.6vw, 95px) 205px;
  color: var(--color-text-strong);

  @media ${MEDIA.mobile} {
    padding: 68px var(--space-page-x-mobile) 100px;
  }
`;

// 标题
const Title = styled(SectionTitle)`
  margin-bottom: 15px;
`;

// 副标题
const Subtitle = styled(SectionSubtitle)`
  margin-bottom: 73px;
`;

// Logo 墙：浅色底，桌面 4 列，手机 2 列
const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 55px 78px;
  padding: 41px 60px;
  background: var(--color-bg-logo-wall);

  @media ${MEDIA.mobile} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 35px 28px;
    padding: 32px 22px;
  }
`;

// 单个格子：Logo 居中；超出格子的部分裁掉（放大后不会盖到隔壁）
const LogoCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  height: 112px;
  overflow: hidden;

  @media ${MEDIA.mobile} {
    height: 72px;
  }
`;

type LogoProps = {
  $maxWidth: string;
  $maxHeight: string;
  $scale: number;
};

// Logo 图片：按数据里的尺寸限制大小，再按 scale 放大
const Logo = styled.img<LogoProps>`
  display: block;
  width: min(100%, ${({ $maxWidth }) => $maxWidth});
  height: auto;
  max-height: ${({ $maxHeight }) => $maxHeight};
  object-fit: contain;
  transform: scale(${({ $scale }) => $scale});

  @media ${MEDIA.mobile} {
    max-height: 72px;
  }
`;
