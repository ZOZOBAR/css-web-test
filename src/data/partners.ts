/* ==========================================================
 * Partners 区块内容（首页第 6 块）
 *
 * 顺序就是页面上的顺序：桌面每行 4 个，共 2 行。
 *
 * 字段说明：
 *   width / height  → Logo 最大显示尺寸（按 Figma）
 *   scale           → 放大倍数，可不填（默认 1）
 *
 * 为什么有 scale：
 *   部分合作方给的 PNG 四周有很大的透明边，
 *   不放大的话 Logo 看起来比其他的小。
 *   放大只作用在自己的格子里，不影响别的 Logo。
 * ========================================================== */
export type Partner = {
  name: string;
  src: string;
  width: string;
  height: string;
  scale?: number;
};

export const PARTNERS: Partner[] = [
  // 第一行
  { name: "Alipay", src: "/assets/home/logo-alipay.png", width: "222px", height: "56px" },
  { name: "Visa", src: "/assets/home/logo-visa.png", width: "209px", height: "61px" },
  { name: "Fantuan", src: "/assets/home/logo-fantuan.png", width: "176px", height: "74px", scale: 1.7 },
  { name: "BOSS直聘", src: "/assets/home/logo-boss.png", width: "89px", height: "89px" },

  // 第二行
  { name: "Weee!", src: "/assets/home/logo-weee.png", width: "200px", height: "61px" },
  { name: "iQIYI", src: "/assets/home/logo-iqiyi.png", width: "273px", height: "61px", scale: 2.97 },
  { name: "OSSC 留学生网", src: "/assets/home/logo-ossc.png", width: "181px", height: "71px", scale: 3.16 },
  { name: "刘一手火锅", src: "/assets/home/logo-liuyishou.png", width: "115px", height: "112px", scale: 1.82 },
];
