/* ==========================================================
 * Common · SectionHeading 子页面 section 标题（所有子页面共用）
 *
 * 结构：红色小标题（eyebrow）→ 大标题；右边可放一个附加内容（aside）
 *       aside 用来放说明文字或按钮，底部和大标题对齐。
 *
 * Figma：小标题 15 Bold 红色、字距 8%；大标题 46 Bold
 * 用法：
 *   <SectionHeading eyebrow="活动亮点" title="精彩内容" />
 *   <SectionHeading eyebrow="精彩回顾" title="Past Events" aside={<按钮/>} />
 * ========================================================== */
import type { ReactNode } from "react";
import styled from "styled-components";
import { Eyebrow } from "./Section";
import { MEDIA } from "../../styles/breakpoints";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  titleId?: string; // 给 section 的 aria-labelledby 用
  aside?: ReactNode;
  latin?: boolean; // 标题是英文时用 Inter（如 "Current Events"）
};

/* ---------- 组件 ---------- */
export default function SectionHeading({
  eyebrow,
  title,
  titleId,
  aside,
  latin = false,
}: SectionHeadingProps) {
  return (
    <Container>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Title id={titleId} $latin={latin}>
          {title}
        </Title>
      </div>

      {/* 右侧附加内容（可选） */}
      {aside && <Aside>{aside}</Aside>}
    </Container>
  );
}

/* ---------- 样式 ---------- */

// 外框：左标题、右附加内容，底部对齐；手机端上下排列
const Container = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px 40px;

  @media ${MEDIA.mobile} {
    align-items: flex-start;
  }
`;

// 大标题
const Title = styled.h2<{ $latin: boolean }>`
  color: var(--color-text-dark);
  font-family: ${({ $latin }) => ($latin ? "var(--font-latin)" : "inherit")};
  font-size: var(--font-size-page-heading);
  font-weight: 700;
  line-height: 1.2;
`;

// 右侧附加内容
const Aside = styled.div`
  color: var(--color-text-secondary);
  font-size: clamp(16px, 1.4vw, 20px);
`;
