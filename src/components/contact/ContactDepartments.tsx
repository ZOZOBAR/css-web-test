/* ==========================================================
 * Contact Section 02 · Departments 三个合作部门
 *
 * 位置：联系与合作页第 2 块（Hero 之后）
 * 结构：3 行，每行：左边编号 + 部门名 + 英文名；右边介绍 + 邮箱胶囊
 * 布局：桌面左 30% / 右 64%，每行之间一条分隔线；≤740px 上下排列
 * 数据：src/data/contact.ts 的 CONTACT_DEPARTMENTS（原网站原文）
 * ========================================================== */
import styled from "styled-components";
import { PageSection } from "../common/Section";
import { CONTACT_DEPARTMENTS } from "../../data/contact";
import { findDepartment } from "../../data/departments";
import { MEDIA } from "../../styles/breakpoints";

/* ---------- 组件 ---------- */
export default function ContactDepartments() {
  return (
    <PageSection aria-label="合作部门">
      <List>
        {CONTACT_DEPARTMENTS.map((item, index) => (
          <Row key={item.email}>
            {/* 左：编号 + 部门名 */}
            <div>
              <Number>{String(index + 1).padStart(2, "0")}</Number>
              <Name>{item.name}</Name>
              <English>{findDepartment(item.dept)?.english}</English>
            </div>

            {/* 右：介绍 + 邮箱 */}
            <Body>
              <Text>{item.text}</Text>
              <Email href={`mailto:${item.email}`}>
                <MailIcon aria-hidden="true">✉</MailIcon>
                {item.email}
              </Email>
            </Body>
          </Row>
        ))}
      </List>
    </PageSection>
  );
}

/* ---------- 样式 ---------- */

// 列表：上下都有分隔线
const List = styled.ul`
  border-bottom: 1px solid var(--color-line);
`;

// 一行
const Row = styled.li`
  display: grid;
  grid-template-columns: 30% 64%;
  justify-content: space-between;
  padding: 48px 0;
  border-top: 1px solid var(--color-line);

  @media ${MEDIA.mobile} {
    grid-template-columns: 1fr;
    gap: 18px;
    padding: 32px 0;
  }
`;

// 编号
const Number = styled.p`
  color: var(--color-brand);
  font-family: var(--font-latin);
  font-size: 14px;
  font-weight: 600;
`;

// 部门名
const Name = styled.h2`
  margin-top: 6px;
  font-size: clamp(28px, 2.6vw, 38px);
  font-weight: 700;
`;

// 英文名
const English = styled.p`
  margin-top: 4px;
  color: var(--color-text-secondary);
  font-family: var(--font-latin);
  font-size: 13px;
`;

// 右侧
const Body = styled.div`
  display: grid;
  justify-items: start;
  gap: 24px;
`;

// 介绍
const Text = styled.p`
  color: var(--color-text-paragraph);
  font-size: var(--font-size-body);
  line-height: 1.8;
`;

// 邮箱胶囊：白底，Hover 变红字
const Email = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  border-radius: var(--radius-pill);
  background: var(--color-bg-card);
  font-family: var(--font-latin);
  font-size: 15px;
  font-weight: 600;
  word-break: break-all;
  transition: color 0.2s;

  &:hover {
    color: var(--color-brand);
  }
`;

// 信封图标
const MailIcon = styled.span`
  color: var(--color-text-secondary);
  font-size: 13px;
`;
