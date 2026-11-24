/* ==========================================================
 * Department Section 03 · Motto 座右铭 / 部门宣言
 *
 * 位置：部门详情页第 3 块（部门介绍之后）
 * 结构：左边红色面板（引号 + 座右铭 + 出处）；右边一张活动照片
 * 布局：桌面左右各半，整块圆角 24；≤740px 上下排列
 * 数据：src/data/departments.ts 的 motto（没有就不显示这一块）
 *
 * 技术部：原文「"脑洞大开……"这是我们的座右铭」
 * 市场部 / 事务部 / 文娱部：原网站页面开头的几行宣言，按原文一行一行显示
 * ========================================================== */
import styled from "styled-components";
import { PageSection } from "../common/Section";
import { MEDIA } from "../../styles/breakpoints";

type DeptMottoProps = {
  lines: string[];
  label?: string;
  image: string;
};

/* ---------- 组件 ---------- */
export default function DeptMotto({ lines, label, image }: DeptMottoProps) {
  // 只有一行的座右铭用大字号；多行宣言字号小一点
  const isShort = lines.length === 1;

  return (
    <PageSection $flush="top" aria-label={label ?? "部门宣言"}>
      <Panel>
        {/* 左：红色面板 */}
        <Quote>
          <Mark aria-hidden="true">“</Mark>
          <Lines $isShort={isShort}>
            {lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </Lines>
          {label && <Label>{label}</Label>}
        </Quote>

        {/* 右：照片 */}
        <Photo src={image} alt="" loading="lazy" />
      </Panel>
    </PageSection>
  );
}

/* ---------- 样式 ---------- */

// 整块面板：左右各半
const Panel = styled.div`
  display: grid;
  grid-template-columns: 51% 49%;
  overflow: hidden;
  border-radius: var(--radius-panel);
  background: var(--color-brand);

  @media ${MEDIA.mobile} {
    grid-template-columns: 1fr;
  }
`;

// 红色文字区
const Quote = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  min-height: clamp(320px, 30.6vw, 440px);
  padding: 48px clamp(32px, 4.4vw, 64px);
  color: var(--color-text-inverse);
`;

// 大引号
const Mark = styled.span`
  height: 30px;
  font-family: var(--font-latin);
  font-size: 72px;
  line-height: 0.9;
  opacity: 0.5;
`;

// 座右铭：每行一个 span，竖排
const Lines = styled.blockquote<{ $isShort: boolean }>`
  display: grid;
  gap: 6px;
  font-size: ${({ $isShort }) =>
    $isShort ? "clamp(24px, 2.2vw, 32px)" : "clamp(18px, 1.55vw, 22px)"};
  font-weight: 700;
  line-height: 1.55;
  letter-spacing: 0.02em;
`;

// 出处：「技术部座右铭」
const Label = styled.figcaption`
  font-size: 15px;
  opacity: 0.8;
`;

// 右侧照片
const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media ${MEDIA.mobile} {
    height: 260px;
  }
`;
