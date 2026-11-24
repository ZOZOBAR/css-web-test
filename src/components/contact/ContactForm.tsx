/* ==========================================================
 * Contact Section 03 · Form 联系表单
 *
 * 位置：联系与合作页第 3 块（三个部门之后）
 * 结构：白色大卡片；左边标题「CONTACT / 联系我们」+ 说明；右边表单
 *       表单：姓名 | 邮箱 → 联系部门（下拉）→ 留言 → 发送
 * 布局：桌面左 32% / 右 61%；≤740px 上下排列，姓名和邮箱也改成上下
 * 数据：src/data/contact.ts（部门和邮箱）
 *
 * 发送方式（暂定）：mailto —— 打开访客的邮件 App，收件人 = 选中部门的邮箱，
 *   标题和正文自动填好。不需要后端，但访客电脑上要有邮件 App。
 * 待定：改用 Formspree / EmailJS 直接发送（需要接收邮箱授权），到时只改 handleSubmit。
 * ========================================================== */
import type { FormEvent } from "react";
import styled from "styled-components";
import { PageSection, Eyebrow } from "../common/Section";
import { CONTACT_DEPARTMENTS, CONTACT_FORM } from "../../data/contact";
import { MEDIA } from "../../styles/breakpoints";

/* ---------- 组件 ---------- */
export default function ContactForm() {
  // 提交：拼出 mailto 链接并打开
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const to = String(data.get("department") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `【BUCSSA 官网留言】${name}`;
    const body = `${message}\n\n——\n姓名：${name}\n邮箱：${email}`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <PageSection id="contact-form" $flush="top" aria-labelledby="contact-form-title">
      <Card>
        {/* 左：标题 */}
        <div>
          <Eyebrow>{CONTACT_FORM.eyebrow}</Eyebrow>
          <Title id="contact-form-title">{CONTACT_FORM.title}</Title>
          <Description>{CONTACT_FORM.description}</Description>
        </div>

        {/* 右：表单 */}
        <Form onSubmit={handleSubmit}>
          <Field>
            <Label htmlFor="contact-name">姓名</Label>
            <Input id="contact-name" name="name" autoComplete="name" required />
          </Field>

          <Field>
            <Label htmlFor="contact-email">邮箱</Label>
            <Input id="contact-email" name="email" type="email" autoComplete="email" required />
          </Field>

          <Field $wide>
            <Label htmlFor="contact-department">联系部门</Label>
            <Select id="contact-department" name="department" required defaultValue="">
              <option value="" disabled>
                市场部 / 宣传部 / 职发部
              </option>
              {CONTACT_DEPARTMENTS.map((item) => (
                <option key={item.email} value={item.email}>
                  {item.name}
                </option>
              ))}
            </Select>
          </Field>

          <Field $wide>
            <Label htmlFor="contact-message">留言</Label>
            <Textarea id="contact-message" name="message" rows={5} required />
          </Field>

          <Submit type="submit">发送</Submit>
        </Form>
      </Card>
    </PageSection>
  );
}

/* ---------- 样式 ---------- */

// 白色大卡片
const Card = styled.div`
  display: grid;
  grid-template-columns: 32% 61%;
  justify-content: space-between;
  padding: clamp(32px, 4.4vw, 64px);
  border-radius: var(--radius-panel);
  background: var(--color-bg-card);

  @media ${MEDIA.mobile} {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 28px 22px;
  }
`;

// 标题
const Title = styled.h2`
  font-size: clamp(28px, 2.8vw, 40px);
  font-weight: 700;
`;

// 说明
const Description = styled.p`
  margin-top: 16px;
  color: var(--color-text-secondary);
  font-size: 15px;
  line-height: 1.7;
`;

// 表单：两列网格（姓名、邮箱并排）
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px 16px;

  @media ${MEDIA.mobile} {
    grid-template-columns: 1fr;
  }
`;

// 一个字段（$wide 时占满两列）
const Field = styled.div<{ $wide?: boolean }>`
  display: grid;
  gap: 10px;
  grid-column: ${({ $wide }) => ($wide ? "1 / -1" : "auto")};
`;

// 字段名
const Label = styled.label`
  font-size: 13px;
  font-weight: 700;
`;

// 输入框通用样式：米色底、无边框，聚焦时红色描边
const FIELD_STYLE = `
  width: 100%;
  padding: 14px 16px;
  border: 1.5px solid transparent;
  border-radius: 10px;
  background: var(--color-bg-section);
  color: var(--color-text-dark);
  font: inherit;
  font-size: 15px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: var(--color-brand);
  }
`;

const Input = styled.input`
  ${FIELD_STYLE}
`;

const Select = styled.select`
  ${FIELD_STYLE}
`;

const Textarea = styled.textarea`
  ${FIELD_STYLE}
  resize: vertical;
`;

// 发送按钮：红底
const Submit = styled.button`
  justify-self: start;
  height: 48px;
  padding: 0 32px;
  border: none;
  border-radius: 16px;
  background: var(--color-brand);
  color: var(--color-text-inverse);
  font-size: 16px;
  font-weight: 700;
  transition: background-color 0.2s;

  &:hover {
    background: var(--color-brand-dark);
  }

  &:focus-visible {
    outline: 3px solid var(--color-brand-dark);
    outline-offset: 3px;
  }
`;
