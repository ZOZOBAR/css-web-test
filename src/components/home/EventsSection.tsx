/* ==========================================================
 * Section 03 · Events 精选活动
 *
 * 位置：首页第 3 块（About 之后，Community 之前）
 * 结构：标题 → 左侧大图（主打活动）+ 右侧两张小图
 * 布局：桌面左大右小；手机单列
 * 数据：src/data/events.ts
 *
 * 字体：标题和图注按 Figma 使用 Inter
 * ========================================================== */
import styled from "styled-components";
import { SectionContainer, SectionTitle } from "../common/Section";
import { MAIN_EVENT, SIDE_EVENTS } from "../../data/events";
import { MEDIA } from "../../styles/breakpoints";

/* ---------- 组件 ---------- */
export default function EventsSection() {
  return (
    <Container id="events" aria-labelledby="events-title">
      {/* 标题 */}
      <Title id="events-title">在这里，发现更多精彩</Title>

      <Grid>
        {/* 左：主打活动大图 */}
        <Figure>
          <MainImage src={MAIN_EVENT.src} alt={MAIN_EVENT.alt} />
          <Caption>{MAIN_EVENT.caption}</Caption>
        </Figure>

        {/* 右：两张小图，上下排列 */}
        <SideColumn>
          {SIDE_EVENTS.map((event) => (
            <Figure key={event.src}>
              <SideImage src={event.src} alt={event.alt} />
              {event.caption && <Caption>{event.caption}</Caption>}
            </Figure>
          ))}
        </SideColumn>
      </Grid>
    </Container>
  );
}

/* ---------- 样式 ---------- */

// 外框
const Container = styled(SectionContainer)`
  padding-top: 94px;
  padding-bottom: 114px;
  color: var(--color-text-heading);

  @media ${MEDIA.mobile} {
    padding-top: 68px;
    padding-bottom: 68px;
  }
`;

// 标题
const Title = styled(SectionTitle)`
  margin-bottom: 48px;
  font-family: var(--font-latin);
`;

// 左右两栏：左 1.6 份，右 1 份
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  align-items: start;
  gap: 31px;

  @media ${MEDIA.mobile} {
    grid-template-columns: 1fr;
  }
`;

// 右侧小图列：两行，每行 241px
const SideColumn = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 241px);
  gap: 28px;

  @media ${MEDIA.mobile} {
    grid-template-rows: none;
    gap: 30px;
  }
`;

// 图片 + 图注的组合
const Figure = styled.figure`
  margin: 0;
`;

// 左侧大图
const MainImage = styled.img`
  display: block;
  width: 100%;
  height: 510px;
  border-radius: var(--radius-image);
  object-fit: cover;
  object-position: center 38%;

  @media ${MEDIA.mobile} {
    height: 270px;
  }
`;

// 右侧小图：在大图基础上改高度
const SideImage = styled(MainImage)`
  height: 241px;

  @media ${MEDIA.mobile} {
    height: 270px;
  }
`;

// 图注
const Caption = styled.figcaption`
  padding-top: 21px;
  font-family: var(--font-latin);
  font-size: clamp(15px, 1.35vw, 22px);
  font-weight: 700;
  letter-spacing: 0.03em;
`;
