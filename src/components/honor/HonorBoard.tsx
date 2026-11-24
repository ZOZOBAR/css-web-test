/* ==========================================================
 * Honor Section 02–04 · Board 荣誉墙名单
 *
 * 位置：荣誉墙页 Hero 之后
 * 结构：
 *   学年切换（2025-2026 / 2024-2025 / 2023-2024）
 *   主席团：标题「Executive Board 学年 / 主席团 Presidium」→ 照片墙（4 列）
 *   各部门：每个部门一行，左边部门中英文名，右边部长 + 副部长照片（3 列）
 * 交互：点学年按钮，下面名单切换成那一届
 * 数据：src/data/honorWall.ts（名单）、src/data/departments.ts（部门名）
 *
 * Figma：E · 荣誉墙。完全按原网站荣誉墙的学年、顺序、职位名称。
 * ========================================================== */
import { useState } from "react";
import styled from "styled-components";
import { PageSection } from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import PeopleGrid from "../common/PeopleGrid";
import { HONOR_WALL, HONOR_YEARS, type HonorYear } from "../../data/honorWall";
import { DEPARTMENTS } from "../../data/departments";
import { MEDIA } from "../../styles/breakpoints";

// 部门 slug → 部门信息（中文名、英文名）
const departmentBySlug = Object.fromEntries(DEPARTMENTS.map((d) => [d.slug, d]));

/* ---------- 组件 ---------- */
export default function HonorBoard() {
  // 当前显示的学年，默认最新一届
  const [year, setYear] = useState<HonorYear>(HONOR_YEARS[0]);
  const [presidium, ...departments] = HONOR_WALL[year];

  return (
    <>
      {/* 学年切换 */}
      <YearBar aria-label="选择学年">
        <Years role="group">
          {HONOR_YEARS.map((item) => (
            <YearButton
              key={item}
              type="button"
              aria-pressed={item === year}
              onClick={() => setYear(item)}
            >
              {item}
            </YearButton>
          ))}
        </Years>
      </YearBar>

      {/* 主席团 */}
      <PageSection aria-labelledby="presidium-title">
        <SectionHeading
          eyebrow={`Executive Board ${year}`}
          title="主席团 Presidium"
          titleId="presidium-title"
        />
        <Spacer />
        <PeopleGrid people={presidium.members} />
      </PageSection>

      {/* 各部门 */}
      <PageSection $flush="top" aria-label={`${year} 各部门负责人`}>
        {departments.map((group) => {
          const department = departmentBySlug[group.dept];

          return (
            <DeptRow key={group.dept}>
              <div>
                <DeptName>{department.name}</DeptName>
                <DeptEnglish>{department.english}</DeptEnglish>
              </div>
              <PeopleGrid people={group.members} columns={3} ratio="1 / 1" />
            </DeptRow>
          );
        })}
      </PageSection>
    </>
  );
}

/* ---------- 样式 ---------- */

// 学年切换外框
const YearBar = styled.nav`
  padding: 40px var(--space-page-x) 0;
  background: var(--color-bg-section);

  @media ${MEDIA.mobile} {
    padding-inline: var(--space-page-x-mobile);
  }
`;

const Years = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

// 学年按钮：选中时深色实心（和活动页筛选标签同一样式）
const YearButton = styled.button`
  height: 42px;
  padding: 0 22px;
  border: 1px solid var(--color-line);
  border-radius: var(--radius-pill);
  background: transparent;
  color: var(--color-text-dark);
  font-family: var(--font-latin);
  font-size: 15px;
  font-weight: 600;
  transition:
    background-color 0.2s,
    color 0.2s;

  &:hover {
    border-color: var(--color-text-dark);
  }

  &[aria-pressed="true"] {
    border-color: var(--color-text-dark);
    background: var(--color-text-dark);
    color: var(--color-text-inverse);
  }

  &:focus-visible {
    outline: 3px solid var(--color-brand);
    outline-offset: 2px;
  }
`;

// 标题和照片墙之间的距离
const Spacer = styled.div`
  height: 40px;
`;

// 部门一行：上方分隔线；左 25% 部门名，右 75% 照片
const DeptRow = styled.article`
  display: grid;
  grid-template-columns: 24% 1fr;
  gap: 20px;
  padding: 40px 0 56px;
  border-top: 1px solid var(--color-line);

  @media ${MEDIA.mobile} {
    grid-template-columns: 1fr;
    padding: 28px 0 36px;
  }
`;

// 部门中文名
const DeptName = styled.h3`
  font-size: clamp(24px, 2.2vw, 32px);
  font-weight: 700;
`;

// 部门英文名
const DeptEnglish = styled.p`
  margin-top: 6px;
  color: var(--color-text-secondary);
  font-family: var(--font-latin);
  font-size: 14px;
`;
