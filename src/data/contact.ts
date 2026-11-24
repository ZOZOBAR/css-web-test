/* ==========================================================
 * 联系与合作页内容（/contact）
 *
 * 文字来源：原网站「联系我们 / 合作」页原文全文。
 * 设计：Figma「HI-FI · 子页面」F · 联系与合作
 *
 * 已批准的新增：联系表单（反馈文档：加一下发 Email 的框）、合作伙伴 Logo 墙。
 * 表单目前用 mailto：点「发送」会打开访客自己的邮件 App，收件人是选中部门的邮箱。
 *   以后接 Formspree / EmailJS 时，只改 ContactForm.tsx 的 handleSubmit。
 * 合作伙伴 Logo 读首页的 data/partners.ts（还差 8 个，找市场部要）。
 * ========================================================== */

export const CONTACT_HERO = {
  eyebrow: "Partnership & Sponsorship",
  title: "合作",
  subtitle: "欢迎商家与机构与 BUCSSA 开展合作。请通过下方对应部门邮箱与我们联系。",
};

export type ContactDepartment = {
  dept: string; // 部门 slug，用来读英文名（departments.ts）
  name: string;
  text: string;
  email: string;
};

export const CONTACT_DEPARTMENTS: ContactDepartment[] = [
  {
    dept: "shichangbu",
    name: "市场部",
    text: "BUCSSA 市场部负责协商对外商业合作与品牌合作事务。我们已与波士顿及海内外百余家企业、品牌建立长期合作关系，为合作伙伴提供活动赞助、品牌推广、校园营销等多元化合作服务。依托 BU 中国学生群体及广泛的校园影响力，我们致力于为品牌打造精准、高效的校园传播方案。如果您希望触达波士顿大学中国学生群体、提升品牌影响力，欢迎与我们联系，共同探索定制化合作机会。",
    email: "hchai@bu.edu",
  },
  {
    dept: "xuanchuanbu",
    name: "宣传部",
    text: "BUCSSA 的品牌传播与内容输出窗口，负责学联各项活动的记录、报道与多平台发布。我们运营微信公众号、Instagram、小红书、抖音等官方账号，为合作方提供活动曝光、推文宣传、短视频及现场拍摄等整合传播服务。若您希望通过优质内容触达 BU 华人学生社群，欢迎与我们沟通宣传合作细节。",
    email: "bucssaxcb@gmail.com",
  },
  {
    dept: "zhifabu",
    name: "职发部",
    text: "连接企业与 BU 中国留学生求职社群的桥梁。我们定期举办企业宣讲会、圆桌分享会、校友职业分享等活动，并通过职发百宝箱、社群推广大幅触达有实习与全职需求的留学生群体。若您的企业希望开展校园招聘、雇主品牌宣传或行业干货分享，欢迎与我们洽谈合作。",
    email: "bucssacareerdevelopment@gmail.com",
  },
];

// 表单标题区
export const CONTACT_FORM = {
  eyebrow: "CONTACT",
  title: "联系我们",
  description: "选择对应部门，点击发送会打开你的邮件 App，发到该部门邮箱。",
};

// 合作伙伴区标题（沿用首页 Partners 区标题）
export const CONTACT_PARTNERS = {
  eyebrow: "Partners",
  title: "一路同行，共创更多可能",
};
