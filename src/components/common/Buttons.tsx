/* ==========================================================
 * Common · 按钮（子页面共用）
 *
 *   PrimaryButton   红底白字，高 52、圆角 19（和首页 About 按钮同一规格）
 *   OutlineButton   描边胶囊，如「往期精彩活动 →」「荣誉墙 →」
 *   PillLink        小号描边胶囊，如部门页底部的「市场部 →」
 *
 * 三个都是链接（底层是 SmartLink），用法：
 *   <PrimaryButton href="/events">了解更多</PrimaryButton>
 * ========================================================== */
import styled from "styled-components";
import SmartLink from "./SmartLink";

// 键盘聚焦时的描边
const FOCUS_RING = `
  &:focus-visible {
    outline: 3px solid var(--color-brand-dark);
    outline-offset: 3px;
  }
`;

// 红色主按钮
export const PrimaryButton = styled(SmartLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  height: 52px;
  padding: 0 32px;
  border-radius: 19px;
  background: var(--color-brand);
  color: var(--color-text-inverse);
  font-size: 17px;
  font-weight: 700;
  white-space: nowrap;
  transition: background-color 0.2s;

  &:hover {
    background: var(--color-brand-dark);
  }

  ${FOCUS_RING}
`;

// 描边胶囊按钮
export const OutlineButton = styled(SmartLink)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 46px;
  padding: 0 22px;
  border: 1.5px solid var(--color-text-dark);
  border-radius: var(--radius-pill);
  color: var(--color-text-dark);
  font-size: 15px;
  font-weight: 700;
  white-space: nowrap;
  transition:
    background-color 0.2s,
    color 0.2s;

  &:hover {
    background: var(--color-text-dark);
    color: var(--color-text-inverse);
  }

  ${FOCUS_RING}
`;

// 小号描边胶囊
export const PillLink = styled(SmartLink)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 40px;
  padding: 0 18px;
  border: 1px solid var(--color-line);
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.5);
  color: var(--color-text-dark);
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
  transition:
    border-color 0.2s,
    color 0.2s;

  &:hover {
    border-color: var(--color-brand);
    color: var(--color-brand);
  }

  ${FOCUS_RING}
`;
