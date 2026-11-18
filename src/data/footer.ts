/* ==========================================================
 * Footer 内容（全站共用）
 * 改链接、邮箱、社交账号，只改这里。
 * ========================================================== */
export type FooterLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  name: string; // 读屏软件念出来的名字
  icon: string; // 图标文件路径（SVG，颜色由 CSS 控制）
  href: string;
};

// 左侧：社交图标，从左到右
// 链接暂时都指向 #footer，拿到正式账号地址后替换
export const SOCIAL_LINKS: SocialLink[] = [
  { name: "微信", icon: "/assets/wechat.svg", href: "#footer" },
  { name: "小红书", icon: "/assets/xiaohongshu.svg", href: "#footer" },
  { name: "微博", icon: "/assets/weibo.svg", href: "#footer" },
  { name: "哔哩哔哩", icon: "/assets/bilibili.svg", href: "#footer" },
  { name: "抖音", icon: "/assets/douyin.svg", href: "#footer" },
  { name: "Instagram", icon: "/assets/instagram.svg", href: "#footer" },
];

// 中间："探索"一栏
export const EXPLORE_LINKS: FooterLink[] = [
  { label: "主页", href: "#top" },
  { label: "活动", href: "#events" },
  { label: "关于我们", href: "#about" },
  { label: "CSSA 荣誉墙", href: "#footer" },
  { label: "合作", href: "#partners" },
];

// 中间："资源"一栏
export const RESOURCE_LINKS: FooterLink[] = [
  { label: "新生手册", href: "#resources" },
  { label: "职发百宝箱", href: "#resources" },
  { label: "加入我们", href: "#footer" },
];

// 右侧："联系与关注"一栏
export const CONTACT_EMAIL = "bucssatech@gmail.com";
export const ABOUT_SITE_LINK: FooterLink = { label: "关于网站 ↗", href: "#about" };
