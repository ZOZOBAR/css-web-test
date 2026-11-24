/* ==========================================================
 * 荣誉墙内容（/about/honor-wall，关于我们页也会预览当届主席团）
 *
 * 来源：原网站荣誉墙 bucssa.org/zh/Honor_Wall，三届名单、职位、顺序完全照搬。
 * 照片：原网站荣誉墙照片，文件名统一改成「部门-序号」，如 jishubu-1.webp。
 *
 * 加新一届：在 HONOR_YEARS 最前面加学年，再在 HONOR_WALL 里加同名的一整块。
 * 部门的中文名、英文名读 departments.ts，这里只写部门 slug。
 * ========================================================== */

export type HonorMember = { name: string; role: string; photo: string };
export type HonorGroup = { dept: string; members: HonorMember[] };

// 学年：第一个是默认显示的「当届」
export const HONOR_YEARS = ["2025-2026", "2024-2025", "2023-2024"] as const;
export type HonorYear = (typeof HONOR_YEARS)[number];

// 每一届：第一组是主席团，后面是 7 个部门（顺序同原网站）
export const HONOR_WALL: Record<HonorYear, HonorGroup[]> = {
  "2025-2026": [
    {
      dept: "zhuxituan",
      members: [
        { name: "陈桔皓", role: "主席", photo: "/assets/honor/2025-2026/zhuxituan-1.webp" },
        { name: "龚田悦", role: "副主席", photo: "/assets/honor/2025-2026/zhuxituan-2.webp" },
        { name: "王品涵", role: "秘书", photo: "/assets/honor/2025-2026/zhuxituan-3.webp" },
        { name: "陈焦阳", role: "财务", photo: "/assets/honor/2025-2026/zhuxituan-4.webp" },
      ],
    },
    {
      dept: "jishubu",
      members: [
        { name: "范予菲", role: "部长", photo: "/assets/honor/2025-2026/jishubu-1.webp" },
        { name: "屠嘉勇", role: "副部长", photo: "/assets/honor/2025-2026/jishubu-2.webp" },
        { name: "严肇琪", role: "副部长", photo: "/assets/honor/2025-2026/jishubu-3.webp" },
      ],
    },
    {
      dept: "shichangbu",
      members: [
        { name: "颜婧怡", role: "部长", photo: "/assets/honor/2025-2026/shichangbu-1.webp" },
        { name: "陈爽生", role: "副部长", photo: "/assets/honor/2025-2026/shichangbu-2.webp" },
        { name: "李泓辰", role: "副部长", photo: "/assets/honor/2025-2026/shichangbu-3.webp" },
      ],
    },
    {
      dept: "shiwubu",
      members: [
        { name: "赵梦琪", role: "部长", photo: "/assets/honor/2025-2026/shiwubu-1.webp" },
        { name: "柯迪夫", role: "副部长", photo: "/assets/honor/2025-2026/shiwubu-2.webp" },
        { name: "吴昕诺", role: "副部长", photo: "/assets/honor/2025-2026/shiwubu-3.webp" },
      ],
    },
    {
      dept: "wenyubu",
      members: [
        { name: "郭星辰", role: "部长", photo: "/assets/honor/2025-2026/wenyubu-1.webp" },
        { name: "赵彦坤", role: "副部长", photo: "/assets/honor/2025-2026/wenyubu-2.webp" },
        { name: "吴楚天", role: "副部长", photo: "/assets/honor/2025-2026/wenyubu-3.webp" },
      ],
    },
    {
      dept: "xuanchuanbu",
      members: [
        { name: "傅之馨", role: "部长", photo: "/assets/honor/2025-2026/xuanchuanbu-1.webp" },
        { name: "郑奕辰", role: "副部长", photo: "/assets/honor/2025-2026/xuanchuanbu-2.webp" },
        { name: "张艺帆", role: "副部长", photo: "/assets/honor/2025-2026/xuanchuanbu-3.webp" },
      ],
    },
    {
      dept: "yingshibu",
      members: [
        { name: "王语楼", role: "部长", photo: "/assets/honor/2025-2026/yingshibu-1.webp" },
        { name: "李怡希", role: "副部长", photo: "/assets/honor/2025-2026/yingshibu-2.webp" },
      ],
    },
    {
      dept: "zhifabu",
      members: [
        { name: "David Zhong", role: "部长", photo: "/assets/honor/2025-2026/zhifabu-1.webp" },
        { name: "魏子轩", role: "副部长", photo: "/assets/honor/2025-2026/zhifabu-2.webp" },
        { name: "杨文迪", role: "副部长", photo: "/assets/honor/2025-2026/zhifabu-3.webp" },
      ],
    },
  ],
  "2024-2025": [
    {
      dept: "zhuxituan",
      members: [
        { name: "任雨桐", role: "主席", photo: "/assets/honor/2024-2025/zhuxituan-1.webp" },
        { name: "张邱天", role: "副主席", photo: "/assets/honor/2024-2025/zhuxituan-2.webp" },
        { name: "王品涵", role: "秘书", photo: "/assets/honor/2024-2025/zhuxituan-3.webp" },
        { name: "张潇予", role: "财务", photo: "/assets/honor/2024-2025/zhuxituan-4.webp" },
        { name: "薛珺冉", role: "财务", photo: "/assets/honor/2024-2025/zhuxituan-5.webp" },
        { name: "陈蕉阳", role: "财务", photo: "/assets/honor/2024-2025/zhuxituan-6.webp" },
      ],
    },
    {
      dept: "jishubu",
      members: [
        { name: "匡嘉洋", role: "部长", photo: "/assets/honor/2024-2025/jishubu-1.webp" },
        { name: "朱义凡", role: "副部长", photo: "/assets/honor/2024-2025/jishubu-2.webp" },
        { name: "孙明远", role: "副部长", photo: "/assets/honor/2024-2025/jishubu-3.webp" },
      ],
    },
    {
      dept: "shichangbu",
      members: [
        { name: "王怡宁", role: "部长", photo: "/assets/honor/2024-2025/shichangbu-1.webp" },
        { name: "廖俊杰", role: "副部长", photo: "/assets/honor/2024-2025/shichangbu-2.webp" },
        { name: "陈爽生", role: "副部长", photo: "/assets/honor/2024-2025/shichangbu-3.webp" },
      ],
    },
    {
      dept: "shiwubu",
      members: [
        { name: "陈桔皓", role: "部长", photo: "/assets/honor/2024-2025/shiwubu-1.webp" },
        { name: "李胤京", role: "副部长", photo: "/assets/honor/2024-2025/shiwubu-2.webp" },
        { name: "江艾洋", role: "副部长", photo: "/assets/honor/2024-2025/shiwubu-3.webp" },
      ],
    },
    {
      dept: "wenyubu",
      members: [
        { name: "秦禄涛", role: "部长", photo: "/assets/honor/2024-2025/wenyubu-1.webp" },
        { name: "Crimson", role: "副部长", photo: "/assets/honor/2024-2025/wenyubu-2.webp" },
        { name: "龚田悦", role: "副部长", photo: "/assets/honor/2024-2025/wenyubu-3.webp" },
      ],
    },
    {
      dept: "xuanchuanbu",
      members: [
        { name: "赵一涵", role: "部长", photo: "/assets/honor/2024-2025/xuanchuanbu-1.webp" },
        { name: "何静宜", role: "副部长", photo: "/assets/honor/2024-2025/xuanchuanbu-2.webp" },
        { name: "崔思涵", role: "副部长", photo: "/assets/honor/2024-2025/xuanchuanbu-3.webp" },
      ],
    },
    {
      dept: "yingshibu",
      members: [
        { name: "刘馨怡", role: "部长", photo: "/assets/honor/2024-2025/yingshibu-1.webp" },
        { name: "何金星", role: "副部长", photo: "/assets/honor/2024-2025/yingshibu-2.webp" },
        { name: "王语楼", role: "副部长", photo: "/assets/honor/2024-2025/yingshibu-3.webp" },
      ],
    },
    {
      dept: "zhifabu",
      members: [
        { name: "白家玮", role: "部长", photo: "/assets/honor/2024-2025/zhifabu-1.webp" },
        { name: "David Zhong", role: "副部长", photo: "/assets/honor/2024-2025/zhifabu-2.webp" },
        { name: "谢雨芊", role: "副部长", photo: "/assets/honor/2024-2025/zhifabu-3.webp" },
      ],
    },
  ],
  "2023-2024": [
    {
      dept: "zhuxituan",
      members: [
        { name: "吴博洋", role: "主席", photo: "/assets/honor/2023-2024/zhuxituan-1.webp" },
        { name: "杨小禹", role: "副主席", photo: "/assets/honor/2023-2024/zhuxituan-2.webp" },
        { name: "杨睿涵", role: "秘书", photo: "/assets/honor/2023-2024/zhuxituan-3.webp" },
        { name: "姜泽长", role: "财务", photo: "/assets/honor/2023-2024/zhuxituan-4.webp" },
      ],
    },
    {
      dept: "jishubu",
      members: [
        { name: "邬皓天", role: "部长", photo: "/assets/honor/2023-2024/jishubu-1.webp" },
        { name: "程心扬", role: "副部长", photo: "/assets/honor/2023-2024/jishubu-2.webp" },
        { name: "孙明远", role: "副部长", photo: "/assets/honor/2023-2024/jishubu-3.webp" },
      ],
    },
    {
      dept: "shichangbu",
      members: [
        { name: "戴溦", role: "部长", photo: "/assets/honor/2023-2024/shichangbu-1.webp" },
        { name: "侯葳", role: "副部长", photo: "/assets/honor/2023-2024/shichangbu-2.webp" },
        { name: "盛文捷", role: "副部长", photo: "/assets/honor/2023-2024/shichangbu-3.webp" },
      ],
    },
    {
      dept: "shiwubu",
      members: [
        { name: "丁馨尧", role: "部长", photo: "/assets/honor/2023-2024/shiwubu-1.webp" },
        { name: "陈文熙", role: "副部长", photo: "/assets/honor/2023-2024/shiwubu-2.webp" },
        { name: "杨启正", role: "副部长", photo: "/assets/honor/2023-2024/shiwubu-3.webp" },
      ],
    },
    {
      dept: "wenyubu",
      members: [
        { name: "张邱天", role: "部长", photo: "/assets/honor/2023-2024/wenyubu-1.webp" },
        { name: "任雨桐", role: "副部长", photo: "/assets/honor/2023-2024/wenyubu-2.webp" },
        { name: "何蔚然", role: "副部长", photo: "/assets/honor/2023-2024/wenyubu-3.webp" },
      ],
    },
    {
      dept: "xuanchuanbu",
      members: [
        { name: "李禹佳", role: "部长", photo: "/assets/honor/2023-2024/xuanchuanbu-1.webp" },
        { name: "陈宇轩", role: "副部长", photo: "/assets/honor/2023-2024/xuanchuanbu-2.webp" },
        { name: "陈东山", role: "副部长", photo: "/assets/honor/2023-2024/xuanchuanbu-3.webp" },
      ],
    },
    {
      dept: "yingshibu",
      members: [
        { name: "马婉婷", role: "部长", photo: "/assets/honor/2023-2024/yingshibu-1.webp" },
        { name: "熊语时", role: "副部长", photo: "/assets/honor/2023-2024/yingshibu-2.webp" },
        { name: "黄艺瑄", role: "副部长", photo: "/assets/honor/2023-2024/yingshibu-3.webp" },
      ],
    },
    {
      dept: "zhifabu",
      members: [
        { name: "陈烁文", role: "部长", photo: "/assets/honor/2023-2024/zhifabu-1.webp" },
        { name: "王千千", role: "副部长", photo: "/assets/honor/2023-2024/zhifabu-2.webp" },
        { name: "曲姝南", role: "副部长", photo: "/assets/honor/2023-2024/zhifabu-3.webp" },
      ],
    },
  ],
};
