/* ==========================================================
 * 导航栏内容
 * 加页面或改导航文字，只改这里。
 * ========================================================== */
export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "主页", href: "#top" },
  { label: "活动", href: "#events" },
  { label: "资源", href: "#resources" },
  { label: "关于我们", href: "#about" },
  { label: "合作", href: "#partners" },
];
