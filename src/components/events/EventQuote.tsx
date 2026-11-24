/* ==========================================================
 * Event Section 03 · Quote 理念引言
 *
 * 位置：活动详情页第 3 块（活动亮点之后）
 * 结构：大引号 → 引言 → 出处（如「BUCSSA 团队理念」）
 * 布局：品牌红底整条通栏，文字居中
 * 数据：src/data/eventDetails.ts 的 quote（原网站原文）
 *
 * Figma：上下 136；引号 Inter 96 白色 50%；引言 40 Bold；出处 16 白色 75%
 * 待定：红底 or 全出血照片压字（等团队反馈，现在按红底）
 * ========================================================== */
import styled from "styled-components";
import { MEDIA } from "../../styles/breakpoints";

type EventQuoteProps = {
  text: string;
  source: string;
};

/* ---------- 组件 ---------- */
export default function EventQuote({ text, source }: EventQuoteProps) {
  return (
    <Container aria-label="活动理念">
      <Quote>
        <Mark aria-hidden="true">“</Mark>
        <Text>{text}</Text>
        <Source>{source}</Source>
      </Quote>
    </Container>
  );
}

/* ---------- 样式 ---------- */

// 红色通栏
const Container = styled.section`
  padding: clamp(88px, 9.4vw, 136px) var(--space-page-x);
  background: var(--color-brand);
  color: var(--color-text-inverse);
  text-align: center;

  @media ${MEDIA.mobile} {
    padding-inline: var(--space-page-x-mobile);
  }
`;

// 引言块：限制宽度，三行内容居中
const Quote = styled.figure`
  display: grid;
  justify-items: center;
  gap: 28px;
  max-width: 940px;
  margin: 0 auto;
`;

// 大引号
const Mark = styled.span`
  height: 40px;
  font-family: var(--font-latin);
  font-size: 96px;
  font-weight: 600;
  line-height: 0.9;
  opacity: 0.5;
`;

// 引言
const Text = styled.blockquote`
  font-size: clamp(24px, 2.8vw, 40px);
  font-weight: 700;
  line-height: 1.45;
  letter-spacing: 0.02em;
`;

// 出处
const Source = styled.figcaption`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.08em;
  opacity: 0.75;
`;
