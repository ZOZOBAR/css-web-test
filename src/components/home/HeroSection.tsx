/* ==========================================================
 * Section 01 · Hero 首屏
 *
 * 位置：首页第 1 块，导航栏下方
 * 结构：背景大图 → 左侧 "BUCSSA" + 中文全称 → 右下角滚动提示
 * 布局：桌面高度最多 970px；手机最小 610px
 *
 * 注意：id="top" 不能改。
 *   - 导航栏靠它判断"是否已经滚出首屏"
 *   - "主页"和"返回顶部"链接都跳到这里
 * ========================================================== */
import styled from "styled-components";
import { MEDIA } from "../../styles/breakpoints";

/* ---------- 组件 ---------- */
export default function HeroSection() {
  return (
    <Container id="top" aria-labelledby="hero-title">
      {/* 标题区 */}
      <Content>
        <Title id="hero-title">BUCSSA</Title>
        <Subtitle>波士顿大学中国学生学者联合会</Subtitle>
      </Content>

      {/* 右下角滚动提示 */}
      <ScrollCue>
        SCROLL TO EXPLORE
        <span aria-hidden="true">↓</span>
      </ScrollCue>
    </Container>
  );
}

/* ---------- 样式 ---------- */

// 首屏容器：波士顿城市背景图 + 上下渐变遮罩（让白字更清楚）
const Container = styled.section`
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  height: min(100svh, 970px);
  min-height: 650px;
  background-image:
    linear-gradient(180deg, rgba(8, 12, 18, 0.3), rgba(8, 12, 18, 0.12) 42%, rgba(8, 12, 18, 0.48)),
    url("/assets/home/hero-boston.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--color-text-inverse);

  @media ${MEDIA.mobile} {
    min-height: 610px;
  }
`;

// 标题区：靠左，距顶部留出导航栏的位置
const Content = styled.div`
  width: min(100% - 11vw, 1500px);
  margin: 6vh auto 0 clamp(28px, 5.5vw, 94px);
  padding-top: 124px;

  @media ${MEDIA.mobile} {
    width: calc(100% - 48px);
    margin-top: 9vh;
    margin-left: 26px;
    padding-top: 74px;
  }
`;

// 大标题 "BUCSSA"
const Title = styled.h1`
  font-size: clamp(72px, 8vw, 120px);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: 0.19em;
  white-space: nowrap;

  @media ${MEDIA.mobile} {
    letter-spacing: 0.12em;
  }
`;

// 中文全称
const Subtitle = styled.p`
  margin-top: 4px;
  font-size: clamp(24px, 2.7vw, 45px);
  font-weight: 600;
  letter-spacing: 0.16em;

  @media ${MEDIA.mobile} {
    max-width: 310px;
    line-height: 1.45;
  }
`;

// 滚动提示：固定在首屏右下角
const ScrollCue = styled.span`
  position: absolute;
  right: 5.5vw;
  bottom: 34px;
  font-size: 11px;
  letter-spacing: 0.18em;
`;
