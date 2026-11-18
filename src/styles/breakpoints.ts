/* ==========================================================
 * 断点
 *
 * CSS 变量不能写在 @media 里，所以断点单独写成 TS 常量。
 * 用法：@media ${MEDIA.mobile} { ... }
 *
 * 新代码请只用 mobile 和 tablet。
 * phone / about / footer 是首页迁移时留下的特殊断点，
 * 按原设计保留，后续统一时再合并。
 * ========================================================== */
export const MEDIA = {
  phone: "(max-width: 520px)", // 小屏手机（Footer 单列）
  mobile: "(max-width: 740px)", // 手机：全站主断点
  about: "(max-width: 800px)", // About 图文改为上下排列
  footer: "(max-width: 850px)", // Footer 改为两列
  tablet: "(max-width: 1050px)", // 平板：导航隐藏 BUCSSA 文字
};
