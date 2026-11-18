/* ==========================================================
 * Resources 区块内容（首页第 5 块）
 * 左边是"学生资源"列表，右边是"加入我们"卡片。
 * ========================================================== */
export type Resource = {
  title: string;
  description: string;
  href: string;
};

// 左侧：学生资源列表
export const RESOURCES: Resource[] = [
  {
    title: "新生手册",
    description: "从入学准备到校园生活，帮助你更快适应波士顿",
    href: "#resources",
  },
  {
    title: "职发百宝箱",
    description: "探索实习求职、职业发展与经验分享",
    href: "#resources",
  },
];

// 右侧："加入我们"卡片
// title 和 description 每个数组元素占一行
export const JOIN_CARD = {
  label: "加入我们",
  title: ["不止是参与", "更是一起创造"],
  description: ["加入 BUCSSA，认识志同道合的伙伴", "一起创造属于我们的校园记忆"],
  buttonLabel: "了解如何加入",
  href: "#footer",
};
