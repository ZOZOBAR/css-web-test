/* ==========================================================
 * Event Section 07 · More Events 更多活动
 *
 * 位置：活动详情页最后一块（结尾号召之后、页脚之前）
 * 结构：标题 → 其他 4 个大活动的卡片（照片 + 名字 + ↗）
 * 布局：桌面四列；≤740px 两列
 * 数据：src/data/eventDetails.ts（自动排除当前活动）
 *
 * Figma：已批准的新增「底部更多活动 4 张卡片」；英文小标题 MORE EVENTS 属于小标语
 * ========================================================== */
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PageSection } from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import { EVENT_DETAILS } from "../../data/eventDetails";
import { MEDIA } from "../../styles/breakpoints";

type MoreEventsProps = {
  currentSlug: string;
};

/* ---------- 组件 ---------- */
export default function MoreEvents({ currentSlug }: MoreEventsProps) {
  const others = EVENT_DETAILS.filter((event) => event.slug !== currentSlug);

  return (
    <PageSection $flush="top" aria-labelledby="more-events-title">
      {/* 标题 */}
      <SectionHeading eyebrow="MORE EVENTS" title="更多活动" titleId="more-events-title" />

      {/* 卡片 */}
      <Cards>
        {others.map((event) => (
          <li key={event.slug}>
            <Card to={`/events/${event.slug}`}>
              <Photo src={event.hero.image} alt="" loading="lazy" />
              <Caption>
                {event.cardName ?? event.name}
                <Arrow aria-hidden="true">↗</Arrow>
              </Caption>
            </Card>
          </li>
        ))}
      </Cards>
    </PageSection>
  );
}

/* ---------- 样式 ---------- */

// 四列卡片
const Cards = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 28px;

  @media ${MEDIA.mobile} {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
`;

// 整张卡片可点；Hover 时图片稍微变暗
const Card = styled(Link)`
  display: grid;
  gap: 14px;

  &:hover img {
    filter: brightness(0.88);
  }

  &:focus-visible {
    outline: 3px solid var(--color-brand);
    outline-offset: 4px;
  }
`;

// 照片
const Photo = styled.img`
  width: 100%;
  aspect-ratio: 300 / 220;
  border-radius: var(--radius-image);
  object-fit: cover;
  transition: filter 0.3s ease;
`;

// 名字 + 箭头
const Caption = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: clamp(16px, 1.4vw, 20px);
  font-weight: 700;
`;

// 红色 ↗
const Arrow = styled.span`
  color: var(--color-brand);
`;
