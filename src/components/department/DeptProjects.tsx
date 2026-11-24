/* ==========================================================
 * Department Section 05 · Projects 现有项目（目前只有技术部）
 *
 * 位置：部门详情页第 5 块（特色之后）
 * 结构：标题「现有项目」→ 每个项目一行（浏览器窗口样式的截图 + 编号 / 名字 / 英文名 / 介绍），
 *       左右交替 → 最后一条「计划中」提示条
 * 布局：桌面截图 57%、文字 36%；≤740px 上下排列
 * 数据：src/data/departments.ts 的 projects、planned
 *
 * Figma：项目截图是已批准的新增（原网站没有项目图）
 * ========================================================== */
import styled from "styled-components";
import { PageSection } from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import { MEDIA } from "../../styles/breakpoints";

type Project = { name: string; english: string; text: string; image: string };

type DeptProjectsProps = {
  projects: Project[];
  planned?: string;
};

/* ---------- 组件 ---------- */
export default function DeptProjects({ projects, planned }: DeptProjectsProps) {
  return (
    <PageSection $flush="top" aria-labelledby="dept-projects-title">
      {/* 标题 */}
      <SectionHeading eyebrow="现有项目" title="现有项目" titleId="dept-projects-title" />

      {/* 项目：第二个项目截图放右边 */}
      <Rows>
        {projects.map((project, index) => (
          <Row key={project.name} $reverse={index % 2 === 1}>
            {/* 浏览器窗口：顶部三个圆点 + 截图 */}
            <Window aria-hidden="true">
              <WindowBar>
                <span />
                <span />
                <span />
              </WindowBar>
              <Screenshot src={project.image} alt="" loading="lazy" />
            </Window>

            <Copy>
              <Number>{String(index + 1).padStart(2, "0")}</Number>
              <Name>{project.name}</Name>
              <English>{project.english}</English>
              <Text>{project.text}</Text>
            </Copy>
          </Row>
        ))}
      </Rows>

      {/* 计划中的项目 */}
      {planned && (
        <Planned>
          <Badge>计划中</Badge>
          <p>{planned}</p>
        </Planned>
      )}
    </PageSection>
  );
}

/* ---------- 样式 ---------- */

// 项目列表
const Rows = styled.div`
  display: grid;
  gap: clamp(56px, 6.9vw, 100px);
  margin-top: clamp(48px, 5vw, 72px);
`;

// 一行：$reverse 时截图在右
const Row = styled.article<{ $reverse: boolean }>`
  display: grid;
  grid-template-columns: ${({ $reverse }) => ($reverse ? "36% 57%" : "57% 36%")};
  justify-content: space-between;
  align-items: center;

  & > div:first-child {
    order: ${({ $reverse }) => ($reverse ? 2 : 0)};
  }

  @media ${MEDIA.mobile} {
    grid-template-columns: 1fr;
    gap: 24px;

    & > div:first-child {
      order: 0;
    }
  }
`;

// 浏览器窗口外框
const Window = styled.div`
  overflow: hidden;
  border-radius: var(--radius-image);
  background: var(--color-bg-card);
  box-shadow: 0 18px 40px rgba(38, 41, 43, 0.1);
`;

// 窗口顶栏：三个灰色圆点
const WindowBar = styled.div`
  display: flex;
  gap: 6px;
  padding: 10px 14px;
  background: var(--color-bg-panel);

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(38, 41, 43, 0.25);
  }
`;

// 截图
const Screenshot = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 1440 / 920;
  object-fit: cover;
  object-position: top;
`;

// 文字列
const Copy = styled.div`
  display: grid;
  gap: 10px;
`;

// 编号
const Number = styled.span`
  color: var(--color-brand);
  font-family: var(--font-latin);
  font-size: 14px;
  font-weight: 600;
`;

// 项目名
const Name = styled.h3`
  font-size: clamp(26px, 2.5vw, 36px);
  font-weight: 700;
`;

// 英文名
const English = styled.p`
  margin-bottom: 18px;
  color: var(--color-text-secondary);
  font-family: var(--font-latin);
  font-size: 16px;
`;

// 介绍
const Text = styled.p`
  color: var(--color-text-paragraph);
  font-size: var(--font-size-body);
  line-height: 1.85;
`;

// 计划中提示条：米色底圆角
const Planned = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: clamp(56px, 6vw, 88px);
  padding: 22px 32px;
  border-radius: var(--radius-card);
  background: var(--color-bg-panel);
  font-size: var(--font-size-body);

  @media ${MEDIA.mobile} {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }
`;

// 「计划中」红色小标签
const Badge = styled.span`
  flex-shrink: 0;
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  background: var(--color-brand);
  color: var(--color-text-inverse);
  font-size: 13px;
  font-weight: 700;
`;
