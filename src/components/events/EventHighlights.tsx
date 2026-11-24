/* ==========================================================
 * Event Section 02 · Highlights 活动亮点
 *
 * 位置：活动详情页第 2 块（Hero 之后）
 * 结构：标题 → 3–4 行「图 + 文」，左右交替（第 1 行图在左，第 2 行图在右……）
 * 布局：桌面图占 55%、文字 37%；≤740px 上图下文
 * 数据：src/data/eventDetails.ts 的 highlights
 *
 * Figma：行间距 112；图 480 高、圆角 12；
 *        编号行「01 —— 温暖陪伴」15 红；标题 36 Bold；正文 18 / 行高 1.75
 * ========================================================== */
import styled from "styled-components";
import { PageSection } from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import type { EventHighlight } from "../../data/eventDetails";
import { MEDIA } from "../../styles/breakpoints";

type EventHighlightsProps = {
  title: string;
  items: EventHighlight[];
};

/* ---------- 组件 ---------- */
export default function EventHighlights({ title, items }: EventHighlightsProps) {
  return (
    <PageSection aria-labelledby="highlights-title">
      {/* 标题 */}
      <SectionHeading eyebrow="活动亮点" title={title} titleId="highlights-title" />

      {/* 图文行：index 为奇数的行图片放右边 */}
      <Rows>
        {items.map((item, index) => (
          <Row key={item.title} $reverse={index % 2 === 1}>
            <Photo src={item.image} alt={item.title} loading="lazy" />

            <Copy>
              <Label>
                <Number>{String(index + 1).padStart(2, "0")}</Number>
                <Dash aria-hidden="true" />
                {item.tag}
              </Label>
              <RowTitle>{item.title}</RowTitle>
              {item.paragraphs.map((paragraph) => (
                <Paragraph key={paragraph}>{paragraph}</Paragraph>
              ))}
            </Copy>
          </Row>
        ))}
      </Rows>
    </PageSection>
  );
}

/* ---------- 样式 ---------- */

// 所有行：和标题之间、行与行之间都隔 112px（Figma）
const Rows = styled.div`
  display: grid;
  gap: clamp(64px, 7.8vw, 112px);
  margin-top: clamp(56px, 6vw, 88px);
`;

// 一行：图 55%，文字 37%，中间留白；$reverse 时图片换到右边
const Row = styled.article<{ $reverse: boolean }>`
  display: grid;
  grid-template-columns: ${({ $reverse }) => ($reverse ? "37% 55%" : "55% 37%")};
  justify-content: space-between;
  align-items: center;

  & > img {
    order: ${({ $reverse }) => ($reverse ? 2 : 0)};
  }

  @media ${MEDIA.mobile} {
    grid-template-columns: 1fr;
    gap: 28px;

    & > img {
      order: 0;
    }
  }
`;

// 图片：480 高（手机 260）
const Photo = styled.img`
  width: 100%;
  height: clamp(300px, 33.3vw, 480px);
  border-radius: var(--radius-image);
  object-fit: cover;

  @media ${MEDIA.mobile} {
    height: 260px;
  }
`;

// 文字列
const Copy = styled.div`
  display: grid;
  gap: 16px;
`;

// 编号行：「01 —— 温暖陪伴」
const Label = styled.p`
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-brand);
  font-size: 13px;
  font-weight: 700;
`;

// 编号数字用英文字体
const Number = styled.span`
  font-family: var(--font-latin);
  font-size: 15px;
  font-weight: 600;
`;

// 编号和标签之间的短横线
const Dash = styled.span`
  width: 28px;
  height: 1px;
  background: currentColor;
`;

// 行标题
const RowTitle = styled.h3`
  margin-bottom: 8px;
  font-size: clamp(26px, 2.5vw, 36px);
  font-weight: 700;
  line-height: 1.3;
`;

// 正文段落
const Paragraph = styled.p`
  color: var(--color-text-paragraph);
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  letter-spacing: 0.03em;
`;
