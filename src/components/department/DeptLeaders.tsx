/* ==========================================================
 * Department Section 06 · Leaders 部门负责人
 *
 * 位置：部门详情页第 6 块
 * 结构：标题「Leadership / 部门负责人」→ 负责人照片墙
 * 布局：主席团 4 列，其他部门 3 列
 * 数据：src/data/departments.ts 的 leaders（按原网站部门页）
 *
 * 待定：名单以哪届为准（部门页和荣誉墙 2025-2026 不一致）
 * ========================================================== */
import styled from "styled-components";
import { PageSection } from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import PeopleGrid from "../common/PeopleGrid";
import type { Leader } from "../../data/departments";

type DeptLeadersProps = {
  leaders: Leader[];
};

/* ---------- 组件 ---------- */
export default function DeptLeaders({ leaders }: DeptLeadersProps) {
  return (
    <PageSection $flush="top" aria-labelledby="dept-leaders-title">
      <SectionHeading eyebrow="Leadership" title="部门负责人" titleId="dept-leaders-title" />
      <Grid>
        <PeopleGrid
          people={leaders}
          columns={leaders.length >= 4 ? 4 : 3}
          ratio={leaders.length >= 4 ? "3 / 4" : "405 / 420"}
        />
      </Grid>
    </PageSection>
  );
}

/* ---------- 样式 ---------- */

const Grid = styled.div`
  margin-top: 40px;
`;
