/* ==========================================================
 * Department Section 05b · Photos 活动照片
 *
 * 位置：部门详情页（没有座右铭面板的部门用，放在部门介绍之后）
 * 结构：一排照片，没有文字（原网站这些照片也没有说明）
 * 布局：一张时通栏；多张时等分
 * 数据：src/data/departments.ts 的 photos
 * ========================================================== */
import styled from "styled-components";
import { PageSection } from "../common/Section";
import { MEDIA } from "../../styles/breakpoints";

type DeptPhotosProps = {
  photos: string[];
  departmentName: string;
};

/* ---------- 组件 ---------- */
export default function DeptPhotos({ photos, departmentName }: DeptPhotosProps) {
  return (
    <PageSection $flush="top" aria-label={`${departmentName}活动照片`}>
      <Row $count={photos.length}>
        {photos.map((src) => (
          <Photo key={src} src={src} alt={`${departmentName}活动照片`} loading="lazy" />
        ))}
      </Row>
    </PageSection>
  );
}

/* ---------- 样式 ---------- */

// 照片等分
const Row = styled.div<{ $count: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $count }) => $count}, 1fr);
  gap: 20px;

  @media ${MEDIA.mobile} {
    grid-template-columns: 1fr;
  }
`;

// 照片：520 高
const Photo = styled.img`
  width: 100%;
  height: clamp(280px, 36vw, 520px);
  border-radius: var(--radius-panel);
  object-fit: cover;
`;
