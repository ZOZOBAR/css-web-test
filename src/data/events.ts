/* ==========================================================
 * Events 区块内容（首页第 3 块）
 * 换活动照片或改图注，只改这里。
 * ========================================================== */
export type EventPhoto = {
  src: string;
  alt: string;
  caption?: string; // 图注，可不填
};

// 左侧大图：主打活动
export const MAIN_EVENT: EventPhoto = {
  src: "/assets/home/event-group.jpg",
  alt: "BUCSSA 集体合照",
  caption: "精选活动 / FEATURED EVENT",
};

// 右侧两张小图：从上到下
export const SIDE_EVENTS: EventPhoto[] = [
  {
    src: "/assets/home/event-stage.jpg",
    alt: "BUCSSA 舞台表演",
  },
  {
    src: "/assets/home/event-dj.jpg",
    alt: "BUCSSA 活动现场的 DJ",
    caption: "LIVE EDGE / BOC",
  },
];
