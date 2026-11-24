/* ==========================================================
 * About Section 04 · Honor Preview 荣誉墙预览
 *
 * 位置：关于我们页最后一块（部门之后、页脚之前）
 * 结构：标题「Honor Wall / CSSA 荣誉墙」+ 右侧「荣誉墙 →」按钮 → 当届主席团 4 人 → 一行说明
 * 数据：src/data/honorWall.ts（第一个学年的第一组 = 当届主席团）
 *
 * Figma：已批准的新增「荣誉墙预览放进关于我们」（反馈文档要求）
 * ========================================================== */
import styled from "styled-components";
import { PageSection } from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import PeopleGrid from "../common/PeopleGrid";
import { OutlineButton } from "../common/Buttons";
import { HONOR_WALL, HONOR_YEARS } from "../../data/honorWall";

/* ---------- 组件 ---------- */
export default function HonorPreview() {
  const currentYear = HONOR_YEARS[0];
  const presidium = HONOR_WALL[currentYear][0];

  return (
    <PageSection $flush="top" aria-labelledby="honor-preview-title">
      {/* 标题 + 按钮 */}
      <SectionHeading
        eyebrow="Honor Wall"
        title="CSSA 荣誉墙"
        titleId="honor-preview-title"
        aside={<OutlineButton href="/about/honor-wall">荣誉墙 →</OutlineButton>}
      />

      {/* 当届主席团 */}
      <Board>
        <PeopleGrid people={presidium.members} />
        <Caption>Executive Board {currentYear} · 主席团 Presidium</Caption>
      </Board>
    </PageSection>
  );
}

/* ---------- 样式 ---------- */

// 照片墙离标题 40px
const Board = styled.div`
  margin-top: 40px;
`;

// 底部说明
const Caption = styled.p`
  margin-top: 28px;
  color: var(--color-text-secondary);
  font-size: 14px;
`;
