/* ==========================================================
 * Common · PeopleGrid 人物照片墙（部门负责人、荣誉墙、关于我们预览共用）
 *
 * 结构：一排人物卡片，每张：照片（3:4 竖版）→ 姓名 → 职位
 * 布局：columns 决定桌面列数（默认 4）；≤740px 两列
 *
 * 照片统一裁成同一比例（默认 3:4）、从上方取景（保证头不被裁掉）。
 * ========================================================== */
import styled from "styled-components";
import { MEDIA } from "../../styles/breakpoints";

type Person = { name: string; role: string; photo: string };

type PeopleGridProps = {
  people: Person[];
  columns?: number;
  ratio?: string; // 照片宽高比，默认 3 / 4（竖版）；部门负责人用 Figma 的 405 / 420
};

/* ---------- 组件 ---------- */
export default function PeopleGrid({ people, columns = 4, ratio = "3 / 4" }: PeopleGridProps) {
  return (
    <Grid $columns={columns}>
      {people.map((person) => (
        <li key={`${person.name}-${person.role}`}>
          <Photo
            src={person.photo}
            alt={`${person.role} ${person.name}`}
            loading="lazy"
            $ratio={ratio}
          />
          <Name>{person.name}</Name>
          <Role>{person.role}</Role>
        </li>
      ))}
    </Grid>
  );
}

/* ---------- 样式 ---------- */

// 网格
const Grid = styled.ul<{ $columns: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);
  gap: 32px 20px;

  @media ${MEDIA.mobile} {
    grid-template-columns: 1fr 1fr;
    gap: 24px 14px;
  }
`;

// 照片：默认 3:4，从上方 20% 处取景
const Photo = styled.img<{ $ratio: string }>`
  width: 100%;
  aspect-ratio: ${({ $ratio }) => $ratio};
  margin-bottom: 14px;
  border-radius: var(--radius-image);
  background: var(--color-bg-panel);
  object-fit: cover;
  object-position: center 20%;
`;

// 姓名
const Name = styled.p`
  font-size: clamp(16px, 1.3vw, 19px);
  font-weight: 700;
`;

// 职位
const Role = styled.p`
  margin-top: 4px;
  color: var(--color-text-secondary);
  font-size: 14px;
`;
