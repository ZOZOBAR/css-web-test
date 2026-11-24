/* ==========================================================
 * Department Section 04b · Tags 职责标签
 *
 * 位置：部门详情页第 4 块（和 Features 二选一，目前只有文娱部用）
 * 结构：标题（原文「我们负责舞台活动的」）→ 一排胶囊标签 → 一句补充说明
 * 数据：src/data/departments.ts 的 tags
 * ========================================================== */
import styled from "styled-components";
import { PageSection } from "../common/Section";
import { MEDIA } from "../../styles/breakpoints";

type DeptTagsProps = {
  title: string;
  items: string[];
  note?: string;
};

/* ---------- 组件 ---------- */
export default function DeptTags({ title, items, note }: DeptTagsProps) {
  return (
    <PageSection $flush="top" aria-labelledby="dept-tags-title">
      <Title id="dept-tags-title">{title}</Title>

      {/* 标签 */}
      <Tags>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </Tags>

      {note && <Note>{note}</Note>}
    </PageSection>
  );
}

/* ---------- 样式 ---------- */

// 标题
const Title = styled.h2`
  font-size: var(--font-size-page-heading);
  font-weight: 700;
`;

// 标签：白底胶囊，放不下换行
const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;

  li {
    padding: 14px 26px;
    border-radius: var(--radius-pill);
    background: var(--color-bg-card);
    font-size: clamp(16px, 1.4vw, 20px);
    font-weight: 700;
  }

  @media ${MEDIA.mobile} {
    gap: 10px;

    li {
      padding: 10px 18px;
    }
  }
`;

// 补充说明
const Note = styled.p`
  margin-top: 28px;
  color: var(--color-text-secondary);
  font-size: var(--font-size-body);
`;
