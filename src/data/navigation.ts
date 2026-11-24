/* ==========================================================
 * 导航栏内容
 * 加页面或改导航文字，只改这里。
 *
 * 每个栏目：
 *   label     导航上显示的字
 *   href      点栏目本身去哪里（总览页）
 *   match     当前网址以它开头时，栏目下面显示小横线（"当前所在页"）
 *   children  hover 时弹出的下拉子项；名称、顺序按原网站导航下拉（如「国庆晚会」）
 *
 * 链接写法见 components/common/SmartLink.tsx：
 *   "/xxx" 站内页面；"https://…" 外部网站（新标签页打开）
 *
 * 暂时链到原网站的：职发百宝箱、往期精彩活动（新版页面还没做）
 * ========================================================== */
export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  match: string;
  children?: NavChild[];
};

export const NAV_ITEMS: NavItem[] = [
  { label: "主页", href: "/", match: "/" },
  {
    label: "活动",
    href: "/events",
    match: "/events",
    children: [
      { label: "新春嘉年华", href: "/events/xinchun" },
      { label: "非诚勿扰", href: "/events/feichengwurao" },
      { label: "国庆晚会", href: "/events/guoqing" },
      { label: "毕业舞会", href: "/events/biye" },
      { label: "新生见面会", href: "/events/xinsheng" },
      { label: "往期精彩活动", href: "/events#past" },
    ],
  },
  {
    label: "资源",
    href: "/#resources",
    match: "/handbook",
    children: [
      { label: "加入我们 ↗", href: "https://portal.bucssa.org/" },
      { label: "新生手册", href: "/handbook" },
      { label: "职发百宝箱 ↗", href: "https://www.bucssa.org/zh/Resources/Resources_Career" },
    ],
  },
  {
    label: "关于我们",
    href: "/about",
    match: "/about",
    children: [
      { label: "部门介绍", href: "/about#departments" },
      { label: "荣誉墙", href: "/about/honor-wall" },
    ],
  },
  {
    label: "合作",
    href: "/contact",
    match: "/contact",
    children: [
      { label: "合作伙伴", href: "/contact#partners" },
      { label: "联系我们", href: "/contact#contact-form" },
    ],
  },
];
