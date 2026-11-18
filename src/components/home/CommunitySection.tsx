/* ==========================================================
 * Section 04 · Community 社群瞬间
 *
 * 位置：首页第 4 块（Events 之后，Resources 之前）
 * 结构：标题 → 三图画廊
 * 布局：桌面 1 大 2 小三列；手机单列
 * 数据：src/data/community.ts
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
          <GalleryImage key={photo.src} src={photo.src} alt={photo.alt} />
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

// 标题
const Title = styled(SectionTitle)`
  margin-bottom: 48px;
`;

// 画廊：桌面三列，第一张大图占 2.15 份
const Gallery = styled.div`
  display: grid;
  grid-template-columns: 2.15fr 1fr 1fr;
  gap: 32px;

  @media ${MEDIA.mobile} {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

// 图片：统一高度和圆角；第二张单独调整取景位置
const GalleryImage = styled.img`
  display: block;
  width: 100%;
  height: 480px;
  border-radius: var(--radius-image);
  object-fit: cover;

  &:nth-child(2) {
    object-position: 61% center;
  }

  @media ${MEDIA.mobile} {
    height: 260px;
  }
`;
