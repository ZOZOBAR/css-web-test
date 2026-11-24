/* ==========================================================
 * Common · SmartLink 通用链接
 *
 * data/ 里的链接有三种写法，这个组件自动选对的标签：
 *   "/events"、"/about#departments"  → 站内页面：用 React Router 的 <Link>（不刷新页面）
 *   "#top"                          → 当前页面内跳转：普通 <a>
 *   "https://…"、"mailto:…"          → 外部链接：普通 <a>，网页链接在新标签页打开
 *
 * 用法和 <a> 一样：<SmartLink href="/events">活动</SmartLink>
 * 写样式：const Button = styled(SmartLink)`...`
 * ========================================================== */
import type { AnchorHTMLAttributes } from "react";
import { Link } from "react-router-dom";

type SmartLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/* ---------- 工具函数 ---------- */

// 外部网页（http 开头）
function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

/* ---------- 组件 ---------- */
export default function SmartLink({ href, children, ...rest }: SmartLinkProps) {
  // 站内页面
  if (href.startsWith("/")) {
    return (
      <Link to={href} {...rest}>
        {children}
      </Link>
    );
  }

  // 外部网页：新标签页打开
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  // 页内跳转、邮件
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
