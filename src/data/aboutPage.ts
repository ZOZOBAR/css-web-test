/* ==========================================================
 * 关于我们页内容（/about）
 *
 * 文字来源：原网站「关于我们」页原文。
 * 设计：Figma「HI-FI · 子页面」C · 关于我们
 *
 * 部门卡片读 departments.ts，荣誉墙预览读 honorWall.ts（当届主席团）。
 *
 * 已批准的新增：「1994」放大展示、服务范围 4 个词（都取自原文）；
 *               荣誉墙预览放进关于我们（反馈文档要求）。
 * ========================================================== */

export const ABOUT_HERO = {
  eyebrow: "About CSSA",
  title: "关于我们",
};

// 组织介绍
export const ABOUT_INTRO = {
  eyebrow: "SINCE",
  year: "1994",
  paragraph:
    "波士顿大学中国学生学者联合会（Boston University Chinese Students and Scholars Association）成立于1994年，是由波士顿大学中国学生学者志愿者自发组织的非盈利性机构，旨在为波士顿大学的中国学生学者，在学习、生活、文化、娱乐等方面提供全方位的服务，并为波士顿大学乃至波士顿地区的华人社区贡献自己的一份力量。",
  scopes: ["学习", "生活", "文化", "娱乐"],
  photo: { src: "/assets/about/group-photo.webp", alt: "BUCSSA 成员比心合照" },
};
