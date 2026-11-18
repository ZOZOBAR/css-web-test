/* ==========================================================
 * Section 04 · Community 社群瞬间
 *
 * 位置：首页第 4 块（Events 之后，Resources 之前）
 * 结构：标题 → 三图画廊
 * 布局：桌面 1 大 2 小三列；手机单列
 * 数据：src/data/community.ts（每张图的取景位置也在那里）
 *
 * 设计数值（Figma HI-FI，换算到 1440px）：
 *   图片高 410px，宽度比例 640 : 296 : 280，圆角 10px
 * ========================================================== */
import styled from "styled-components";
import { SectionContainer, SectionTitle } from "../common/Section";
import { COMMUNITY_PHOTOS } from "../../data/community";
import { MEDIA } from "../../styles/breakpoints";

/* ---------- 组件 ---------- */
export default function CommunitySection() {
  return (
    <Container id="community" aria-labelledby="community-title">
      {/* 标题 */}
      <Title id="community-title">一起留下，属于我们的精彩瞬间</Title>

      {/* 三图画廊 */}
      <Gallery>
        {COMMUNITY_PHOTOS.map((photo) => (
          <GalleryImage
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            $position={photo.position ?? "center"}
          />
        ))}
      </Gallery>
    </Container>
  );
}

/* ---------- 样式 ---------- */

// 外框
const Container = styled(SectionContainer)`
  padding-top: 92px;
  padding-bottom: 118px;
  color: var(--color-text-heading);

  @media ${MEDIA.mobile} {
    padding-top: 68px;
    padding-bottom: 68px;
  }
`;

// 标题：和图片之间隔 28px
const Title = styled(SectionTitle)`
  margin-bottom: 28px;
`;

// 画廊：桌面三列，宽度比例按 Figma 640 : 296 : 280
const Gallery = styled.div`
  display: grid;
  grid-template-columns: 640fr 296fr 280fr;
  gap: 24px;

  @media ${MEDIA.mobile} {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

// 图片：统一高度和圆角；取景位置由数据里的 position 决定
const GalleryImage = styled.img<{ $position: string }>`
  display: block;
  width: 100%;
  height: 410px;
  border-radius: 10px;
  object-fit: cover;
  object-position: ${({ $position }) => $position};

  @media ${MEDIA.mobile} {
    height: 260px;
  }
`;
