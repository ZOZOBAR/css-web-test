import styled from "styled-components";
import { MEDIA } from "../../styles/breakpoints";

/* ==========================================================
 * Section 共用组件
 *
 * 首页每一块都由这三个组件搭起来：
 *   SectionContainer   → 外框（背景色 + 左右边距）
 *   PageSection        → 子页面用的外框（再加统一的上下间距）
 *   Eyebrow            → 子页面标题上方的红色小标题
 *   SectionTitle       → 大标题
 *   SectionSubtitle    → 标题下面的灰色说明
 *
 * 分工：
 *   - 这里只管"所有 section 都一样"的部分
 *   - 上下内边距、标题下方间距每块不同，由各 section 自己设定，
 *     写法：const Container = styled(SectionContainer)`...`
 * ========================================================== */

// 外框：米色背景，统一左右边距；手机端收窄到 24px
export const SectionContainer = styled.section`
  padding-inline: var(--space-page-x);
  background: var(--color-bg-section);

  @media ${MEDIA.mobile} {
    padding-inline: var(--space-page-x-mobile);
  }
`;

// 子页面 section 外框：在 SectionContainer 上加统一的上下间距（Figma 128）
// 如果上一块已经留了下边距，可以用 $flush="top" 去掉上边距，避免两段空白叠加
export const PageSection = styled(SectionContainer)<{ $flush?: "top" | "bottom" }>`
  padding-top: ${({ $flush }) => ($flush === "top" ? "0" : "var(--space-section-y)")};
  padding-bottom: ${({ $flush }) => ($flush === "bottom" ? "0" : "var(--space-section-y)")};
  color: var(--color-text-dark);
`;

// 大标题：全站统一字号
export const SectionTitle = styled.h2`
  font-size: var(--font-size-section-title);
`;

// 副标题：灰色说明文字
export const SectionSubtitle = styled.p`
  color: var(--color-text-secondary);
  font-size: var(--font-size-section-subtitle);
`;

// 子页面红色小标题（SectionHeading 里用，部门页等地方也单独用）
export const Eyebrow = styled.p`
  margin-bottom: 14px;
  color: var(--color-brand);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.08em;
`;
