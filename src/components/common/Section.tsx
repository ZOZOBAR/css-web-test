import styled from "styled-components";
import { MEDIA } from "../../styles/breakpoints";

/* ==========================================================
 * Section 共用组件
 *
 * 首页每一块都由这三个组件搭起来：
 *   SectionContainer   → 外框（背景色 + 左右边距）
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

// 大标题：全站统一字号
export const SectionTitle = styled.h2`
  font-size: var(--font-size-section-title);
`;

// 副标题：灰色说明文字
export const SectionSubtitle = styled.p`
  color: var(--color-text-secondary);
  font-size: var(--font-size-section-subtitle);
`;
