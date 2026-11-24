/* ==========================================================
 * Department Section 04 · Features 部门特色
 *
 * 位置：部门详情页第 4 块（座右铭之后）
 * 结构：标题 → 一排白色卡片（编号 01 → 标题 → 说明）；没有标题的卡片只显示编号和说明
 * 布局：桌面四列；≤740px 一列
 * 数据：src/data/departments.ts 的 features（技术部「四大特色」、市场部「日常活动」）
 * ========================================================== */
import styled from "styled-components";
import { PageSection } from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import { MEDIA } from "../../styles/breakpoints";

type DeptFeaturesProps = {
  eyebrow: string;
  title: string;
  items: { title?: string; text: string }[];
};

/* ---------- 组件 ---------- */
export default function DeptFeatures({ eyebrow, title, items }: DeptFeaturesProps) {
  return (
    <PageSection $flush="top" aria-labelledby="dept-features-title">
      {/* 标题 */}
      <SectionHeading eyebrow={eyebrow} title={title} titleId="dept-features-title" />

      {/* 卡片 */}
      <Cards>
        {items.map((item, index) => (
          <Card key={item.text}>
            <Number>{String(index + 1).padStart(2, "0")}</Number>
            {item.title && <CardTitle>{item.title}</CardTitle>}
            <Text>{item.text}</Text>
          </Card>
        ))}
      </Cards>
    </PageSection>
  );
}

/* ---------- 样式 ---------- */

// 四列卡片
const Cards = styled.ol`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 40px;

  @media ${MEDIA.mobile} {
    grid-template-columns: 1fr;
  }
`;

// 白色卡片
const Card = styled.li`
  display: grid;
  align-content: start;
  gap: 12px;
  padding: 28px 28px 32px;
  border-radius: var(--radius-card);
  background: var(--color-bg-card);
`;

// 编号
const Number = styled.span`
  color: var(--color-brand);
  font-family: var(--font-latin);
  font-size: 14px;
  font-weight: 600;
`;

// 卡片标题
const CardTitle = styled.h3`
  font-size: clamp(24px, 2.2vw, 32px);
  font-weight: 700;
`;

// 说明
const Text = styled.p`
  color: var(--color-text-paragraph);
  font-size: 15px;
  line-height: 1.75;
`;
