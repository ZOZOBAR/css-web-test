/* ==========================================================
 * About Section 03 · Departments 部门
 *
 * 位置：关于我们页第 3 块（组织介绍之后）
 * 结构：标题「部门介绍 / 部门」→ 8 张部门卡片（Logo + 中文名 + 英文名 + →）
 * 布局：桌面四列；≤1050px 三列；≤740px 两列
 * 数据：src/data/departments.ts（Logo、名字、英文名）
 *
 * 技术部 Logo 原图是方形海报，不是为圆形设计的：
 *   放进深色圆底里完整显示（logoIsSquare），待技术部出圆形版后去掉
 * ========================================================== */
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PageSection } from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import { DEPARTMENTS } from "../../data/departments";
import { MEDIA } from "../../styles/breakpoints";

/* ---------- 组件 ---------- */
export default function DepartmentGrid() {
  return (
    <PageSection id="departments" $flush="top" aria-labelledby="departments-title">
      {/* 标题 */}
      <SectionHeading eyebrow="部门介绍" title="部门" titleId="departments-title" />

      {/* 部门卡片 */}
      <Cards>
        {DEPARTMENTS.map((department) => (
          <li key={department.slug}>
            <Card to={`/about/${department.slug}`}>
              <LogoArea>
                <Logo
                  src={department.logo}
                  alt={`${department.name} Logo`}
                  loading="lazy"
                  $isSquare={department.logoIsSquare ?? false}
                />
              </LogoArea>
              <Info>
                <div>
                  <Name>{department.name}</Name>
                  <English>{department.english}</English>
                </div>
                <Arrow aria-hidden="true">→</Arrow>
              </Info>
            </Card>
          </li>
        ))}
      </Cards>
    </PageSection>
  );
}

/* ---------- 样式 ---------- */

// 卡片列表
const Cards = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px 20px;
  margin-top: 40px;

  @media ${MEDIA.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${MEDIA.mobile} {
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }
`;

// 白色卡片，Hover 时上浮并加阴影
const Card = styled(Link)`
  display: block;
  overflow: hidden;
  border-radius: var(--radius-card);
  background: var(--color-bg-card);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 30px rgba(38, 41, 43, 0.08);
  }

  &:focus-visible {
    outline: 3px solid var(--color-brand);
    outline-offset: 3px;
  }
`;

// Logo 区：210 高，Logo 居中；下方一条分隔线
const LogoArea = styled.div`
  display: grid;
  place-items: center;
  height: clamp(150px, 14.6vw, 210px);
  border-bottom: 1px solid var(--color-divider);
`;

// Logo：150 圆形。方形 Logo 放进深色圆底，留出四周空隙完整显示（Figma：圆内 124 × 94）
const Logo = styled.img<{ $isSquare: boolean }>`
  width: clamp(100px, 10.4vw, 150px);
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: ${({ $isSquare }) => ($isSquare ? "contain" : "cover")};
  padding: ${({ $isSquare }) => ($isSquare ? "8%" : "0")};
  background: ${({ $isSquare }) => ($isSquare ? "#1c2632" : "transparent")};
`;

// 名字区：左边中英文名，右边箭头
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 22px 24px 24px;

  @media ${MEDIA.mobile} {
    padding: 16px;
  }
`;

// 中文名
const Name = styled.h3`
  font-size: clamp(17px, 1.4vw, 20px);
  font-weight: 700;
`;

// 英文名
const English = styled.p`
  margin-top: 4px;
  color: var(--color-text-secondary);
  font-family: var(--font-latin);
  font-size: 12px;
`;

// 红色箭头
const Arrow = styled.span`
  color: var(--color-brand);
  font-size: 20px;
`;
