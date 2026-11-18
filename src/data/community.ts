/* ==========================================================
 * Community 区块内容（首页第 4 块）
 * 换照片只改这里。第 1 张会显示成大图。
 * ========================================================== */
export type CommunityPhoto = {
  src: string;
  alt: string;
};

export const COMMUNITY_PHOTOS: CommunityPhoto[] = [
  { src: "/assets/home/community-crowd.png", alt: "BUCSSA 社群活动合照" },
  { src: "/assets/home/community-campus.jpg", alt: "BUCSSA 校园活动" },
  { src: "/assets/home/community-piano.jpeg", alt: "BUCSSA 音乐活动" },
];
