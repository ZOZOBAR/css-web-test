/* ==========================================================
 * Event Section 04 · Steps 参与流程
 *
 * 位置：活动详情页第 4 块（理念引言之后）
 * 结构：标题「简单三步 / 参与流程」→ 3 张白色卡片（图 + STEP 0X + 标题 + 小标题 + 说明）
 * 布局：桌面三列；≤740px 单列
 * 数据：src/data/eventDetails.ts 的 steps（原网站原文）
 *
 * Figma：卡片圆角 16、图高 240；STEP Inter 13 红；标题 28 Bold；说明 16 / 行高 1.7
 * 待定：如果某个活动没有「参与流程」，这一块整块隐藏（steps 为空时不显示）
 * ========================================================== */
import styled from "styled-components";
import { PageSection } from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import type { EventStep } from "../../data/eventDetails";
import { MEDIA } from "../../styles/breakpoints";

type EventStepsProps = {
  steps: EventStep[];
};

/* ---------- 组件 ---------- */
export default function EventSteps({ steps }: EventStepsProps) {
  if (steps.length === 0) {
    return null;
  }

  return (
    <PageSection aria-labelledby="steps-title">
      {/* 标题 */}
      <SectionHeading eyebrow="简单三步" title="参与流程" titleId="steps-title" />

      {/* 三张卡片：ol 表示有先后顺序 */}
      <Cards>
        {steps.map((step, index) => (
          <Card key={step.title}>
            <Photo src={step.image} alt="" loading="lazy" />
            <Body>
              <StepNumber>STEP {String(index + 1).padStart(2, "0")}</StepNumber>
              <CardTitle>{step.title}</CardTitle>
              <Subtitle>{step.subtitle}</Subtitle>
              <Text>{step.text}</Text>
            </Body>
          </Card>
        ))}
      </Cards>
    </PageSection>
  );
}

/* ---------- 样式 ---------- */

// 卡片列表：三列，间距 24
const Cards = styled.ol`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 48px;

  @media ${MEDIA.mobile} {
    grid-template-columns: 1fr;
  }
`;

// 白色卡片
const Card = styled.li`
  overflow: hidden;
  border-radius: var(--radius-card);
  background: var(--color-bg-card);
`;

// 卡片顶部图片
const Photo = styled.img`
  display: block;
  width: 100%;
  height: clamp(180px, 16.7vw, 240px);
  object-fit: cover;
`;

// 卡片文字区
const Body = styled.div`
  display: grid;
  gap: 8px;
  padding: 28px 32px 34px;

  @media ${MEDIA.mobile} {
    padding: 24px;
  }
`;

// 「STEP 01」
const StepNumber = styled.p`
  color: var(--color-brand);
  font-family: var(--font-latin);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
`;

// 卡片标题
const CardTitle = styled.h3`
  font-size: clamp(22px, 1.95vw, 28px);
  font-weight: 700;
  line-height: 1.3;
`;

// 小标题：「快速便捷的报名流程」
const Subtitle = styled.p`
  color: var(--color-text-secondary);
  font-size: 14px;
`;

// 说明
const Text = styled.p`
  margin-top: 6px;
  color: var(--color-text-paragraph);
  font-size: 16px;
  line-height: 1.7;
`;
