/* ==========================================================
 * Contact Section 04 · Partner Wall 合作伙伴
 *
 * 位置：联系与合作页最后一块（表单之后、页脚之前）
 * 结构：标题「Partners / 一路同行，共创更多可能」→ Logo 白卡片墙
 * 布局：桌面四列；≤740px 两列
 * 数据：src/data/partners.ts（和首页 Partners 区同一份）
 *
 * 待定：反馈文档要 10–20 个品牌，现在只有 8 个，剩下的找市场部要；
 *       拿到后加进 partners.ts，首页和这里会一起更新。
 * ========================================================== */
import styled from "styled-components";
import { PageSection } from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import { CONTACT_PARTNERS } from "../../data/contact";
import { PARTNERS } from "../../data/partners";
import { MEDIA } from "../../styles/breakpoints";

/* ---------- 组件 ---------- */
export default function PartnerWall() {
  return (
    <PageSection id="partners" $flush="top" aria-labelledby="partner-wall-title">
      <SectionHeading
        eyebrow={CONTACT_PARTNERS.eyebrow}
        title={CONTACT_PARTNERS.title}
        titleId="partner-wall-title"
      />

      {/* Logo 墙 */}
      <Grid>
        {PARTNERS.map((partner) => (
          <Cell key={partner.name}>
            <Logo src={partner.src} alt={partner.name} loading="lazy" $scale={partner.scale ?? 1} />
          </Cell>
        ))}
      </Grid>
    </PageSection>
  );
}

/* ---------- 样式 ---------- */

// 四列
const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 40px;

  @media ${MEDIA.mobile} {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
`;

// 白色格子：Logo 居中
const Cell = styled.li`
  display: grid;
  place-items: center;
  height: clamp(96px, 8.3vw, 120px);
  padding: 20px 28px;
  overflow: hidden;
  border-radius: var(--radius-card);
  background: var(--color-bg-card);
`;

// Logo：最高 52px、最宽 75%；部分 PNG 四周透明边多，用 scale 放大（同首页）
const Logo = styled.img<{ $scale: number }>`
  max-width: 75%;
  max-height: 52px;
  object-fit: contain;
  transform: scale(${({ $scale }) => $scale});
`;
