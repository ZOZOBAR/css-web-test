/* ==========================================================
 * Community 区块内容（首页第 4 块）
 * 换照片只改这里。第 1 张会显示成大图。
 *
 * position：图片在格子里的取景位置（CSS object-position）
 *   不填 → 居中
 *   "46% center" → 稍微往左取景
 * 换照片后如果人被裁掉，调这个值即可。
 * ========================================================== */
export type CommunityPhoto = {
  src: string;
  alt: string;
  position?: string;
};

export const COMMUNITY_PHOTOS: CommunityPhoto[] = [
  { src: "/assets/home/community-crowd.png", alt: "BUCSSA 社群活动合照" },
  {
    src: "/assets/home/community-campus.jpg",
    alt: "BUCSSA 校园活动",
    position: "46% center", // 按 Figma 取景，三个人完整入镜
  },
  { src: "/assets/home/community-piano.jpeg", alt: "BUCSSA 音乐活动" },
];
