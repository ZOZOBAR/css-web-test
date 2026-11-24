/* ==========================================================
 * Events Section 05 · Past Events 精彩回顾
 *
 * 位置：活动总览页第 5 块（公众号活动之后）
 * 结构：标题（右侧「往期精彩活动」按钮）→ 左边竖版封面 + 右边 2×2 照片
 * 布局：桌面封面占 1 份、照片区占 3 份；≤740px 封面在上、照片两列
 * 数据：src/data/eventsOverview.ts 的 PAST_EVENTS（原网站往期精彩活动页的图）
 *
 * 待定：往期精彩活动页还没做新版，按钮先链接到原网站
 * ========================================================== */
import styled from "styled-components";
import { PageSection } from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import { OutlineButton } from "../common/Buttons";
import { PAST_EVENTS } from "../../data/eventsOverview";
import { MEDIA } from "../../styles/breakpoints";

type PastEventsProps = {
  isFirst?: boolean; // 筛选后成为第一块时，补回上边距
};

/* ---------- 组件 ---------- */
export default function PastEvents({ isFirst = false }: PastEventsProps) {
  return (
    <PageSection id="past" $flush={isFirst ? undefined : "top"} aria-labelledby="past-title">
      {/* 标题 + 按钮 */}
      <SectionHeading
        eyebrow="精彩回顾"
        title="Past Events"
        titleId="past-title"
        latin
        aside={
          <OutlineButton href={PAST_EVENTS.button.href}>{PAST_EVENTS.button.label}</OutlineButton>
        }
      />

      {/* 封面 + 照片 */}
      <Gallery>
        <Cover src={PAST_EVENTS.cover.src} alt={PAST_EVENTS.cover.alt} loading="lazy" />
        {PAST_EVENTS.photos.map((photo) => (
          <Photo key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" />
        ))}
      </Gallery>
    </PageSection>
  );
}

/* ---------- 样式 ---------- */

// 网格：第一列是封面（跨两行），后面两列各两张照片
const Gallery = styled.div`
  display: grid;
  grid-template-columns: 300fr 465fr 465fr;
  grid-template-rows: repeat(2, clamp(160px, 13.2vw, 190px));
  gap: 16px;
  margin-top: 40px;

  @media ${MEDIA.mobile} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
`;

// 竖版封面
const Cover = styled.img`
  grid-row: span 2;
  width: 100%;
  height: 100%;
  border-radius: var(--radius-image);
  object-fit: cover;

  @media ${MEDIA.mobile} {
    grid-column: span 2;
    grid-row: auto;
    height: auto;
  }
`;

// 照片
const Photo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: var(--radius-image);
  object-fit: cover;

  @media ${MEDIA.mobile} {
    height: 140px;
  }
`;
