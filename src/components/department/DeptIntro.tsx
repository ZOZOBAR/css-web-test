/* ==========================================================
 * Department Section 02 · Intro 部门介绍
 *
 * 位置：部门详情页第 2 块（Hero 之后）
 * 结构：左边小标题 + 「部门介绍」；右边介绍段落（第一段字号大一点）
 *       段落数据如果是数组，显示成列表（宣传部「你写作的功底……」）
 * 布局：桌面左 30% / 右 66%；≤740px 上下排列
 * 数据：src/data/departments.ts 的 intro
 * ========================================================== */
import styled from "styled-components";
import { PageSection, Eyebrow } from "../common/Section";
import { MEDIA } from "../../styles/breakpoints";

type DeptIntroProps = {
  intro: (string | string[])[];
};

/* ---------- 组件 ---------- */
export default function DeptIntro({ intro }: DeptIntroProps) {
  return (
    <PageSection aria-labelledby="dept-intro-title">
      <Layout>
        {/* 左：标题 */}
        <div>
          <Eyebrow>Department Introduction</Eyebrow>
          <Title id="dept-intro-title">部门介绍</Title>
        </div>

        {/* 右：段落 / 列表 */}
        <Body>
          {intro.map((block, index) =>
            Array.isArray(block) ? (
              <List key={block[0]}>
                {block.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </List>
            ) : (
              <Paragraph key={block} $isLead={index === 0}>
                {block}
              </Paragraph>
            ),
          )}
        </Body>
      </Layout>
    </PageSection>
  );
}

/* ---------- 样式 ---------- */

// 左右两栏
const Layout = styled.div`
  display: grid;
  grid-template-columns: 30% 66%;
  justify-content: space-between;

  @media ${MEDIA.mobile} {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

// 「部门介绍」
const Title = styled.h2`
  font-size: clamp(24px, 2vw, 28px);
  font-weight: 700;
`;

// 右侧正文
const Body = styled.div`
  display: grid;
  gap: 20px;
`;

// 段落：第一段 20px、颜色更深（Figma），其余 18px
const Paragraph = styled.p<{ $isLead: boolean }>`
  color: var(--color-text-paragraph);
  font-size: ${({ $isLead }) => ($isLead ? "clamp(17px, 1.4vw, 20px)" : "var(--font-size-body)")};
  line-height: ${({ $isLead }) => ($isLead ? "1.9" : "var(--line-height-body)")};
`;

// 列表：每行前面一个红点
const List = styled.ul`
  display: grid;
  gap: 8px;
  color: var(--color-text-paragraph);
  font-size: var(--font-size-body);
  line-height: 1.7;

  li {
    position: relative;
    padding-left: 18px;
  }

  li::before {
    content: "";
    position: absolute;
    top: 0.75em;
    left: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--color-brand);
  }
`;
