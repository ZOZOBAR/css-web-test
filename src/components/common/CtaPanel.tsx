/* ==========================================================
 * Common · CtaPanel 结尾号召面板（活动详情、活动总览共用）
 *
 * 结构：米色圆角面板，居中两行大标题 → 说明 → 按钮（按钮可不放）
 * Figma：标题 56 Bold / 行高 1.25；说明 20；面板圆角 24
 * 文字全部来自原网站各页结尾，例如"准备好开始你的 / 波士顿之旅了吗？"
 * ========================================================== */
import styled from "styled-components";
import { PageSection } from "./Section";
import { PrimaryButton } from "./Buttons";
import { MEDIA } from "../../styles/breakpoints";

type CtaPanelProps = {
  title: string[]; // 每个元素一行
  description: string;
  button?: { label: string; href: string };
  isFirst?: boolean; // 紧跟在 Hero 后面时，补回上边距（新生手册页）
};

/* ---------- 组件 ---------- */
export default function CtaPanel({ title, description, button, isFirst = false }: CtaPanelProps) {
  return (
    <PageSection $flush={isFirst ? undefined : "top"} aria-label={title.join("")}>
      <Panel>
        <Title>
          {title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </Title>
        <Description>{description}</Description>
        {button && <PrimaryButton href={button.href}>{button.label}</PrimaryButton>}
      </Panel>
    </PageSection>
  );
}

/* ---------- 样式 ---------- */

// 面板：米色底，内容居中
const Panel = styled.div`
  display: grid;
  justify-items: center;
  gap: 22px;
  padding: clamp(52px, 6vw, 88px) 24px;
  border-radius: var(--radius-panel);
  background: var(--color-bg-panel);
  text-align: center;
`;

// 两行大标题
const Title = styled.h2`
  display: grid;
  font-size: clamp(30px, 3.9vw, 56px);
  font-weight: 700;
  line-height: 1.25;

  @media ${MEDIA.mobile} {
    font-size: 28px;
  }
`;

// 说明文字；和按钮之间多留一点距离
const Description = styled.p`
  margin-bottom: 10px;
  color: var(--color-text-secondary);
  font-size: clamp(16px, 1.4vw, 20px);
  line-height: 1.5;
`;
