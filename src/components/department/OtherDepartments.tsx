/* ==========================================================
 * Department Section 08 · Other Departments 其他部门
 *
 * 位置：部门详情页最后一块（页脚之前）
 * 结构：小标题「其他部门」→ 其余 7 个部门的胶囊链接
 * 数据：src/data/departments.ts（自动排除当前部门）
 *
 * Figma：已批准的新增「底部其他部门切换」（原网站在侧栏）
 * ========================================================== */
import styled from "styled-components";
import { PageSection, Eyebrow } from "../common/Section";
import { PillLink } from "../common/Buttons";
import { DEPARTMENTS } from "../../data/departments";

type OtherDepartmentsProps = {
  currentSlug: string;
};

/* ---------- 组件 ---------- */
export default function OtherDepartments({ currentSlug }: OtherDepartmentsProps) {
  const others = DEPARTMENTS.filter((department) => department.slug !== currentSlug);

  return (
    <PageSection $flush="top" aria-labelledby="other-depts-title">
      <Eyebrow id="other-depts-title">其他部门</Eyebrow>
      <List>
        {others.map((department) => (
          <li key={department.slug}>
            <PillLink href={`/about/${department.slug}`}>{department.name} →</PillLink>
          </li>
        ))}
      </List>
    </PageSection>
  );
}

/* ---------- 样式 ---------- */

// 胶囊一排，放不下换行
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
`;
