/* ==========================================================
 * 活动总览页内容（/events）
 *
 * 文字来源：原网站「活动」页和「往期精彩活动」页原文。
 * 设计：Figma「HI-FI · 子页面」A · 活动总览
 *
 * 近期活动的 5 张海报卡片直接读 eventDetails.ts，不在这里重复写。
 *
 * 已批准的新增：顶部筛选标签、「公众号活动」整区（反馈文档要求分开排）。
 * 待定：公众号活动每一行的推文链接 —— 拿到链接后填进 href，「阅读推文 ↗」才会出现。
 * ========================================================== */

export type WechatEvent = {
  date: string; // 没有日期写 "—"
  title: string;
  department: string;
  href?: string; // 公众号推文链接（待补）
};

// 页面顶部
export const EVENTS_HERO = {
  eyebrow: "EVENTS",
  title: "活动",
  subtitle: "近期活动与精彩回顾",
};

// 筛选标签：id 对应下面三个 section 的 id
export const EVENT_FILTERS = [
  { id: "all", label: "全部" },
  { id: "current", label: "近期活动" },
  { id: "wechat", label: "公众号活动" },
  { id: "past", label: "精彩回顾" },
] as const;

export type EventFilterId = (typeof EVENT_FILTERS)[number]["id"];

// 公众号活动列表
export const WECHAT_EVENTS: WechatEvent[] = [
  { date: "2024-01-26", title: "【职发部】BUCSSA圆桌分享会", department: "职发部" },
  { date: "每年10月中旬", title: "女巫镇奇遇！", department: "事务部" },
  { date: "—", title: "电竞活动", department: "事务部" },
  { date: "—", title: "BackRoom 万圣节活动", department: "事务部" },
  { date: "—", title: "摄影展", department: "宣传部" },
];

// 精彩回顾：左边一张竖版封面，右边四张照片（取自原网站往期精彩活动页）
export const PAST_EVENTS = {
  cover: { src: "/assets/events/posters/past-cover.webp", alt: "职发部圆桌分享会海报" },
  photos: [
    { src: "/assets/events/past/zhilaizhiwang_6.webp", alt: "职发部圆桌分享会" },
    { src: "/assets/events/past/nvwuzhen_2.webp", alt: "女巫镇奇遇" },
    { src: "/assets/events/past/nvwuzhen_3.webp", alt: "女巫镇奇遇活动照片" },
    { src: "/assets/events/past/nvwuzhen_4.webp", alt: "女巫镇奇遇活动照片" },
  ],
  // 往期精彩活动页还没做新版，先链接到原网站
  button: {
    label: "往期精彩活动 ↗",
    href: "https://www.bucssa.org/zh/Activity/Activity_PastEvents",
  },
};

// 结尾（原网站往期精彩活动页结尾原文）
export const EVENTS_CTA = {
  title: ["期待与你一起", "创造更多精彩回忆"],
  description: "关注BUCSSA，不错过每一个精彩活动",
};
