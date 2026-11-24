/* ==========================================================
 * Layout · ScrollManager 换页滚动（全站共用，不显示任何东西）
 *
 * 单页应用换页时，浏览器不会自动回到顶部，这个组件负责：
 *   - 网址没有 #：回到页面顶部
 *   - 网址带 #xxx（比如 /about#departments）：滚到 id="xxx" 的位置
 *
 * 为什么要等一帧：新页面的内容要先渲染出来，才能找到 #xxx 的元素。
 * ========================================================== */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* ---------- 组件 ---------- */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    const frame = requestAnimationFrame(() => {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
