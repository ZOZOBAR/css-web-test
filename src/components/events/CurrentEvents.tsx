/* ==========================================================
 * Events Section 03 · Current Events 近期活动
 *
 * 位置：活动总览页第 3 块（筛选标签之后）
 * 结构：标题 → 5 张海报卡片（海报 + 活动名 + →），点击进入活动详情
 * 布局：桌面五列；≤1050px 三列；≤740px 两列
 * 数据：src/data/eventDetails.ts（海报 poster、名字 cardName / name），顺序同原网站
 * ========================================================== */
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PageSection } from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import { EVENT_DETAILS } from "../../data/eventDetails";
import { MEDIA } from "../../styles/breakpoints";

/* ---------- 组件 ---------- */
export default function CurrentEvents() {
  return (
    <PageSection id="current" aria-labelledby="current-title">
      {/* 标题 */}
      <SectionHeading eyebrow="近期活动" title="Current Events" titleId="current-title" latin />

      {/* 海报卡片 */}
      <Cards>
        {EVENT_DETAILS.map((event) => (
          <li key={event.slug}>
            <Card to={`/events/${event.slug}`}>
              <Poster src={event.poster} alt={`${event.name}海报`} loading="lazy" />
              <Caption>
                {event.cardName ?? event.name}
                <Arrow aria-hidden="true">→</Arrow>
              </Caption>
            </Card>
          </li>
        ))}
      </Cards>
    </PageSection>
  );
}

/* ---------- 样式 ---------- */

// 卡片列表
const Cards = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-top: 40px;

  @media ${MEDIA.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${MEDIA.mobile} {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
`;

// 整张卡片可点；Hover 时海报上移
const Card = styled(Link)`
  display: grid;
  gap: 16px;

  &:hover img {
    transform: translateY(-6px);
  }

  &:focus-visible {
    outline: 3px solid var(--color-brand);
    outline-offset: 4px;
  }
`;

// 竖版海报：宽高比按 Figma 237 : 330
const Poster = styled.img`
  width: 100%;
  aspect-ratio: 237 / 330;
  border-radius: var(--radius-image);
  object-fit: cover;
  transition: transform 0.3s ease;
`;

// 活动名 + 箭头
const Caption = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: clamp(16px, 1.3vw, 19px);
  font-weight: 700;
`;

// 红色 →
const Arrow = styled.span`
  color: var(--color-brand);
`;
