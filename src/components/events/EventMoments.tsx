/* ==========================================================
 * Event Section 05 · Moments 回忆瞬间
 *
 * 位置：活动详情页第 5 块（参与流程之后）
 * 结构：标题（右侧一句说明）→ 6 张照片
 * 布局：桌面第一排 2 张（大 + 小），第二排 4 张等宽；≤740px 两列
 * 数据：src/data/eventDetails.ts 的 moments（原网站「回忆瞬间」6 张照片）
 *
 * Figma：英文小标题 MOMENTS 属于 section 小标语（已批准的新增）
 * ========================================================== */
import styled from "styled-components";
import { PageSection } from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import { MEDIA } from "../../styles/breakpoints";

type EventMomentsProps = {
  title: string;
  subtitle: string;
  images: string[];
  eventName: string; // 用于图片的替代文字
};

/* ---------- 组件 ---------- */
export default function EventMoments({ title, subtitle, images, eventName }: EventMomentsProps) {
  return (
    <PageSection $flush="top" aria-labelledby="moments-title">
      {/* 标题 + 右侧说明 */}
      <SectionHeading eyebrow="MOMENTS" title={title} titleId="moments-title" aside={subtitle} />

      {/* 照片墙：前两张在第一排 */}
      <Gallery>
        {images.map((src, index) => (
          <Photo
            key={`${src}-${index}`}
            src={src}
            alt={`${eventName}活动照片 ${index + 1}`}
            loading="lazy"
            $isTopRow={index < 2}
          />
        ))}
      </Gallery>
    </PageSection>
  );
}

/* ---------- 样式 ---------- */

// 网格：12 列。第一排 8 + 4，第二排 3 + 3 + 3 + 3
const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  margin-top: 28px;

  & > img:nth-child(1) {
    grid-column: span 8;
  }

  & > img:nth-child(2) {
    grid-column: span 4;
  }

  & > img:nth-child(n + 3) {
    grid-column: span 3;
  }

  @media ${MEDIA.mobile} {
    grid-template-columns: 1fr 1fr;
    gap: 12px;

    && > img {
      grid-column: span 1;
    }

    && > img:first-child {
      grid-column: span 2;
    }
  }
`;

// 照片：第一排 460 高，第二排 300 高
const Photo = styled.img<{ $isTopRow: boolean }>`
  width: 100%;
  height: ${({ $isTopRow }) =>
    $isTopRow ? "clamp(260px, 32vw, 460px)" : "clamp(180px, 20.8vw, 300px)"};
  border-radius: var(--radius-image);
  object-fit: cover;

  @media ${MEDIA.mobile} {
    height: 180px;
  }
`;
