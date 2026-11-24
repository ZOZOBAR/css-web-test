/* ==========================================================
 * 活动详情页内容（/events/:slug，5 个大活动共用一个模板）
 *
 * 文字来源：原网站 bucssa.org 各活动页原文，一字不改。
 * 图片来源：原网站该页图片，位置和原页面一一对应。
 * 设计：Figma「HI-FI · 子页面」B · 活动详情模板（以新生见面会为例）
 *
 * 新增一个活动：复制一整块 {...}，改 slug 和内容即可，页面会自动生成。
 *   slug 就是网址的最后一段：/events/xinsheng
 *
 * Hero 信息栏 meta：已批准的新增（时间 · 地点 · 主办），只取正文里写到的信息，
 *   没写到的就不放（比如新春嘉年华只写了主办部门）。
 * ========================================================== */

export type EventHighlight = {
  tag: string; // 小标签，如「温暖陪伴」
  title: string; // 标题，如「缓解焦虑，建立连接」
  paragraphs: string[];
  image: string;
};

export type EventStep = {
  title: string; // 「注册报名」
  subtitle: string; // 「快速便捷的报名流程」
  text: string;
  image: string;
};

export type EventDetail = {
  slug: string;
  name: string; // 活动名（Hero 大标题、卡片标题）
  cardName?: string; // 活动总览卡片上的名字（和原网站一致，如「2024新春嘉年华」）
  poster: string; // 活动总览页的海报
  hero: { image: string; meta: string[]; position?: string };
  highlights: { title: string; items: EventHighlight[] }; // 小标题固定为「活动亮点」
  quote: { text: string; source: string };
  steps: EventStep[]; // 「简单三步 / 参与流程」
  moments: { title: string; subtitle: string; images: string[] };
  cta: { title: string[]; description: string };
};

// 所有活动详情页底部的按钮（原网站「了解更多」链接到 CSSA Portal）
export const EVENT_CTA_BUTTON = { label: "了解更多", href: "https://portal.bucssa.org/" };

// 图片路径简写：img("xinsheng", "fig17") → /assets/events/xinsheng/fig17.webp
const img = (slug: string, name: string) => `/assets/events/${slug}/${name}.webp`;

export const EVENT_DETAILS: EventDetail[] = [
  /* ---------- 01 新生见面会 ---------- */
  {
    slug: "xinsheng",
    name: "新生见面会",
    poster: "/assets/events/posters/xinsheng.webp",
    hero: {
      image: img("xinsheng", "fig17"),
      meta: ["每年六月到七月", "深圳 · 上海 · 北京", "事务部"],
    },
    highlights: {
      title: "精彩内容",
      items: [
        {
          tag: "温暖陪伴",
          title: "缓解焦虑，建立连接",
          paragraphs: [
            "为了缓解新生出国留学前的焦虑，为了减轻家长对孩子们即将身处异国他乡而产生的顾虑，BUCSSA事务部每年六月到七月组织三场新生见面会，帮助新生们能更快更好地找到组织。",
            "新生见面会不仅是学生之间相互认识的机会，也是家长们彼此交流、获取实用信息的重要平台。我们用心营造温馨的氛围，让每一位参与者都能感受到家的温暖。",
          ],
          image: img("xinsheng", "fig14"),
        },
        {
          tag: "全国三地",
          title: "多城市联动覆盖",
          paragraphs: [
            "本科新生，转学生，研究生，家长都可以参加本次活动，并且三场见面会分别在不同的城市，同学们可以根据自己的需求来选择相应的场次。",
            "我们鼓励每位新生带上家人一起前来，提前了解生活环境和学习资源。深圳、上海、北京三地同步举办，确保全国各地的新生都能方便参与。",
          ],
          image: img("xinsheng", "fig2"),
        },
        {
          tag: "全面宣讲",
          title: "学业生活全解析",
          paragraphs: [
            "我们将对于波士顿大学的学习、住宿生活、学费、实习、以及在波士顿的吃喝玩乐、学校每年的最新政策进行宣讲。不管您是来排忧解难，还是来寻找校友，BUCSSA新生见面会欢迎您的到来。",
            "活动现场还会有互动游戏、小礼品抽奖等丰富环节。包括经典的你画我猜、歌曲竞猜、以及通过爱好特征找朋友等团队游戏，营造轻松愉快的氛围，促进大家相互了解。",
          ],
          image: img("xinsheng", "fig19"),
        },
        {
          tag: "校友分享",
          title: "前辈答疑解惑",
          paragraphs: [
            "邀请优秀的学长学姐和已毕业校友分享他们的留学经历、求职经验和人生感悟。从学业规划到职业发展，从生活技巧到个人成长，全方位的经验传授。",
            "设置专门的问答环节，新生和家长可以自由提问，获得最实用的建议。我们的分享嘉宾来自不同专业和年级，确保每个人都能找到适合自己的指导和启发。",
          ],
          image: img("xinsheng", "fig18"),
        },
      ],
    },
    quote: {
      text: "在BUCSSA新生见面会，我们相信陪伴和交流是留学路上最温暖的力量",
      source: "BUCSSA 团队理念",
    },
    steps: [
      {
        title: "注册报名",
        subtitle: "快速便捷的报名流程",
        text: "关注微信公众号报名，选择适合的城市和时间。我们会及时确认并发送详细信息。",
        image: img("xinsheng", "fig15"),
      },
      {
        title: "活动参与",
        subtitle: "丰富多彩的现场体验",
        text: "参与各种互动环节，聆听学长学姐分享，与新朋友建立联系，获得实用建议。",
        image: img("xinsheng", "fig11"),
      },
      {
        title: "后续支持",
        subtitle: "持续的关怀与帮助",
        text: "活动结束后，我们会建立专属群聊，持续为大家提供学习生活上的支持。",
        image: img("xinsheng", "fig7"),
      },
    ],
    moments: {
      title: "回忆瞬间",
      subtitle: "记录每一个珍贵的相遇时刻",
      images: [
        "fig3",
        "fig9",
        "xinshengjianmianhui_6",
        "xinshengjianmianhui_5",
        "fig11",
        "fig6",
      ].map((name) => img("xinsheng", name)),
    },
    cta: {
      title: ["准备好开始你的", "波士顿之旅了吗？"],
      description: "加入我们，让BUCSSA成为你留学路上的第一个温暖港湾",
    },
  },

  /* ---------- 02 非诚勿扰 ---------- */
  {
    slug: "feichengwurao",
    name: "非诚勿扰",
    poster: "/assets/events/posters/feichengwurao.webp",
    hero: { image: img("feichengwurao", "FCWR-1"), meta: ["每年11月", "文娱部"] },
    highlights: {
      title: "心动体验",
      items: [
        {
          tag: "心动邂逅",
          title: "寻找你的专属TA",
          paragraphs: [
            "BUCSSA文娱部一年一度的留学生恋爱向交友活动——非诚勿扰会在每年11月重磅上新！通过活动中的各种小游戏和环节，让心动氛围逐渐升温。",
            "现场设置多个互动环节，包括破冰游戏、速配对话、才艺展示等，帮助大家在轻松愉快的氛围中认识彼此，发现共同兴趣。",
          ],
          image: img("feichengwurao", "FCWR-2"),
        },
        {
          tag: "浪漫氛围",
          title: "追寻自我与爱的旅程",
          paragraphs: [
            "在这里，希望大家与我们一起踏上这次追寻自我与爱的全新旅程。抓住秋天的尾巴，邂逅你专属的TA！",
            "精心布置的活动现场营造浪漫温馨的氛围，专业的灯光音响设备，让每一个瞬间都充满仪式感，为你的邂逅增添难忘的回忆。",
          ],
          image: img("feichengwurao", "FCWR-4"),
        },
        {
          tag: "丰富活动",
          title: "互动游戏与惊喜礼品",
          paragraphs: [
            "活动现场不仅有精彩的互动游戏，还有丰富的小礼品抽奖环节。无论你是来寻找缘分，还是结交新朋友，BUCSSA非诚勿扰都欢迎你的到来。",
            "多样化的活动安排确保每位参与者都能找到适合自己的环节，从团队合作游戏到个人展示平台，每个人都有机会展现最好的自己。",
          ],
          image: img("feichengwurao", "FCWR-6"),
        },
      ],
    },
    quote: {
      text: "爱情不分国界，在BUCSSA非诚勿扰，每一次心动都值得被认真对待",
      source: "BUCSSA 文娱部理念",
    },
    steps: [
      {
        title: "报名参与",
        subtitle: "简单快捷的报名流程",
        text: "关注BUCSSA微信公众号，填写报名信息。我们会根据报名情况进行匹配，确保活动的多样性和趣味性。",
        image: img("feichengwurao", "FCWR-3"),
      },
      {
        title: "现场互动",
        subtitle: "多元化的交流体验",
        text: "参与各种精心设计的互动环节，从破冰游戏到深度对话，在轻松愉快的氛围中认识新朋友。",
        image: img("feichengwurao", "FCWR-5"),
      },
      {
        title: "后续联系",
        subtitle: "延续美好的开始",
        text: "活动结束后，我们会协助感兴趣的朋友们建立进一步的联系，为美好的友谊或爱情搭建桥梁。",
        image: img("feichengwurao", "FCWR-7"),
      },
    ],
    moments: {
      title: "心动瞬间",
      subtitle: "记录每一个美好的邂逅时刻",
      images: ["FCWR-2", "FCWR-3", "FCWR-4", "FCWR-5", "FCWR-6", "FCWR-7"].map((name) =>
        img("feichengwurao", name),
      ),
    },
    cta: {
      title: ["准备好开启你的", "心动旅程了吗？"],
      description: "在BUCSSA非诚勿扰，每一次相遇都可能改变你的人生轨迹",
    },
  },

  /* ---------- 03 中秋国庆晚会 ---------- */
  {
    slug: "guoqing",
    name: "中秋国庆晚会",
    poster: "/assets/events/posters/guoqing.webp",
    hero: { image: img("guoqing", "guoqingwanhui_1"), meta: ["每年九月", "文娱部"] },
    highlights: {
      title: "节日盛典",
      items: [
        {
          tag: "传统佳节",
          title: "中秋国庆双节庆典",
          paragraphs: [
            "每年九月风起，瑞月当空，异国他乡迎来佳节时光。在此中秋与国庆共聚之际，BUCSSA文娱部会举办一场如梦如幻的国庆中秋晚会！",
            "精心策划的晚会融合传统文化与现代元素，让每一位海外学子都能感受到浓浓的节日氛围和家国情怀。",
          ],
          image: img("guoqing", "guoqingwanhui_3"),
        },
        {
          tag: "精彩演出",
          title: "文艺表演与互动游戏",
          paragraphs: [
            "晚会现场不仅有精彩的文艺表演，还有丰富的互动游戏和抽奖环节。让我们共襄盛举，共赏明月，感受家的温暖与团圆。",
            "从传统舞蹈到现代音乐，从诗歌朗诵到相声表演，多元化的节目安排让每个人都能找到自己喜爱的内容。",
          ],
          image: img("guoqing", "guoqingwanhui_5"),
        },
        {
          tag: "温暖聚会",
          title: "异国他乡的家庭聚会",
          paragraphs: [
            "无论你是新生还是老友，BUCSSA国庆晚会都欢迎你的到来。让我们在异国他乡共度美好夜晚，留下难忘回忆。",
            "在这个特别的夜晚，我们不仅是同学，更是彼此的家人。一起品尝家乡美食，分享节日祝福，感受家的温暖。",
          ],
          image: img("guoqing", "guoqingwanhui_6"),
        },
      ],
    },
    quote: {
      text: "无论身在何处，家国情怀常在心头。BUCSSA国庆晚会，与你共度温馨夜晚",
      source: "BUCSSA 文娱部理念",
    },
    steps: [
      {
        title: "关注报名",
        subtitle: "便捷的参与方式",
        text: "关注BUCSSA微信公众号，获取活动最新信息和报名链接。我们会及时发布活动详情和注意事项。",
        image: img("guoqing", "guoqingwanhui_2"),
      },
      {
        title: "晚会参与",
        subtitle: "丰富的节日体验",
        text: "参加精彩的文艺演出，体验传统节日游戏，品尝节日美食，与朋友们共度美好时光。",
        image: img("guoqing", "guoqingwanhui_4"),
      },
      {
        title: "留下回忆",
        subtitle: "珍贵的节日记忆",
        text: "在活动中留下美好回忆，与新老朋友建立深厚友谊，让这个特别的夜晚成为留学生活中的亮点。",
        image: img("guoqing", "guoqingwanhui_1"),
      },
    ],
    moments: {
      title: "节日回忆",
      subtitle: "记录每一个珍贵的庆祝时刻",
      images: [2, 3, 4, 5, 6, 1].map((n) => img("guoqing", `guoqingwanhui_${n}`)),
    },
    cta: {
      title: ["准备好与我们", "共度佳节了吗？"],
      description: "让BUCSSA国庆晚会成为你留学生活中最温暖的节日记忆",
    },
  },

  /* ---------- 04 新春嘉年华 ---------- */
  {
    slug: "xinchun",
    name: "新春嘉年华",
    cardName: "2024新春嘉年华",
    poster: "/assets/events/posters/xinchun.webp",
    hero: { image: img("xinchun", "xinchunjianianhua_1"), meta: ["文娱部"] },
    highlights: {
      title: "新春盛典",
      items: [
        {
          tag: "传统文化",
          title: "新春传统庙会体验",
          paragraphs: [
            "2025 BUCSSA新春嘉年华如约而至！春节是每一位海外学子和华人家庭最重要的节日，而嘉年华更是我们团聚、传承、分享年味的特别时刻。",
            "本次活动现场布置洋溢新年气氛，红灯笼、中国结、窗花，还有手写春联，让你一进门就感受到家的温暖。",
          ],
          image: img("xinchun", "xinchunjianianhua_3"),
        },
        {
          tag: "创意摊位",
          title: "民俗体验与美食盛宴",
          paragraphs: [
            "本届嘉年华集民俗庙会、创意摊位、精彩演出、美食体验于一体。手工糖画、投壶、写春联、年画DIY等，经典传统与现代创意结合，等你来打卡！",
            "现场不仅有琳琅满目的年货、零食、互动小游戏，还有幸运抽奖，奖品升级，现场氛围持续嗨翻。",
          ],
          image: img("xinchun", "xinchunjianianhua_6"),
        },
        {
          tag: "精彩表演",
          title: "多元化文艺演出",
          paragraphs: [
            "重磅嘉宾带来舞龙舞狮、乐队、民乐、舞蹈、相声、魔术等多元化表演，百花齐放，高潮不断。节目融汇中西，既有家乡味道，也有国际新意。",
            "今年还特别邀请校内外优秀团队参演，现场BGM刷爆全场，让每一位参与者都能感受到节日的欢乐氛围。",
          ],
          image: img("xinchun", "xinchunjianianhua_7"),
        },
        {
          tag: "温情记忆",
          title: "留影纪念与温暖传递",
          paragraphs: [
            "感谢所有志愿者和社团小伙伴的付出，本次嘉年华还设有温情留影区、朋友圈照片打印、写明信片寄回家等环节，把温暖和祝福带给每一位BUCSSA人。",
            "在这个特别的时刻，我们不仅庆祝新年，更要将这份温暖和祝福传递给远方的家人朋友，让爱跨越距离。",
          ],
          image: img("xinchun", "xinchunjianianhua_9"),
        },
      ],
    },
    quote: {
      text: "传承千年文化，共享新春温暖。在BUCSSA新春嘉年华，每个人都是家人",
      source: "BUCSSA 文娱部理念",
    },
    steps: [
      {
        title: "报名参与",
        subtitle: "简单便捷的入场方式",
        text: "关注BUCSSA微信公众号，获取活动详细信息。无需复杂报名流程，现场直接参与各种精彩活动。",
        image: img("xinchun", "xinchunjianianhua_2"),
      },
      {
        title: "体验嘉年华",
        subtitle: "丰富多彩的节日活动",
        text: "参与传统民俗游戏，欣赏精彩文艺演出，品尝地道美食，体验手工制作，感受浓浓年味。",
        image: img("xinchun", "xinchunjianianhua_5"),
      },
      {
        title: "留下回忆",
        subtitle: "珍贵的新年记忆",
        text: "在留影区拍摄美好瞬间，写明信片寄给家人，带走专属的新年祝福和温暖回忆。",
        image: img("xinchun", "xinchunjianianhua_8"),
      },
    ],
    moments: {
      title: "新春回忆",
      subtitle: "记录每一个温暖的节日瞬间",
      images: [2, 5, 8, 9, 10, 11].map((n) => img("xinchun", `xinchunjianianhua_${n}`)),
    },
    cta: {
      title: ["准备好与我们", "共庆新春了吗？"],
      description: "让BUCSSA新春嘉年华成为你留学生活中最温暖的节日记忆",
    },
  },

  /* ---------- 05 毕业舞会 ---------- */
  {
    slug: "biye",
    name: "毕业舞会",
    poster: "/assets/events/posters/biye.webp",
    hero: { image: img("biye", "biyewuhui_1"), meta: ["The Last Euphoria", "事务部"] },
    highlights: {
      title: "青春告别",
      items: [
        {
          tag: "红毯仪式",
          title: "The Last Euphoria盛大开场",
          paragraphs: [
            "BUCSSA事务部为2023届毕业生准备了The Last Euphoria毕业舞会。红毯、签名墙、照片点随之映入眼帘。请跟随你心的指引，让照片留下此时的你，完美的你。",
            "精心布置的红毯现场让每一位毕业生都能感受到明星般的待遇，专业摄影师为大家记录下人生中这个重要时刻的美好瞬间。",
          ],
          image: img("biye", "biyewuhui_2"),
        },
        {
          tag: "舞蹈狂欢",
          title: "K-pop神曲与交际舞",
          paragraphs: [
            "紧随其后的是暖场互动表演和随机舞蹈环节，k-pop神曲等你来炸场！作为毕业舞会的核心，交际舞环节也是必不可少。",
            "不会跳的同学也不用担心，事务部为大家准备了线上教学视频，以及线下现场教学，确保每个人都能享受舞蹈的乐趣。",
          ],
          image: img("biye", "biyewuhui_3"),
        },
        {
          tag: "温情回忆",
          title: "毕业VCR与最后狂欢",
          paragraphs: [
            "几曲舞毕，毕业VCR和毕业赠言环节温情来袭，在大学的尾声，尽情说你想说，做你想做！和DJ一起嗨起来，迎接最后的狂欢吧！",
            "这是属于毕业生们的专属时刻，回顾四年求学路的点点滴滴，与同窗好友分享最真挚的情感和美好祝愿。",
          ],
          image: img("biye", "biyewuhui_5"),
        },
      ],
    },
    quote: {
      text: "青春不散场，友谊永长存。在BUCSSA毕业舞会，让我们用最美的方式告别校园时光",
      source: "BUCSSA 事务部理念",
    },
    steps: [
      {
        title: "盛装出席",
        subtitle: "优雅的入场体验",
        text: "穿上你最美的礼服，走过红毯，在签名墙留下专属印记，享受属于你的闪耀时刻。",
        image: img("biye", "biyewuhui_1"),
      },
      {
        title: "舞池时光",
        subtitle: "释放青春的激情",
        text: "参与各种舞蹈环节，从现代流行到优雅交际舞，在音乐中尽情展现最自信的自己。",
        image: img("biye", "biyewuhui_4"),
      },
      {
        title: "美好告别",
        subtitle: "珍贵的毕业回忆",
        text: "观看精心制作的毕业VCR，分享毕业感言，与朋友们一起创造人生中最难忘的告别仪式。",
        image: img("biye", "biyewuhui_6"),
      },
    ],
    moments: {
      title: "青春记忆",
      subtitle: "记录每一个珍贵的毕业时刻",
      images: [2, 3, 4, 5, 6, 1].map((n) => img("biye", `biyewuhui_${n}`)),
    },
    cta: {
      title: ["准备好与我们", "共舞青春最后一章了吗？"],
      description: "让BUCSSA毕业舞会成为你大学生涯最完美的句号",
    },
  },
];

// 按 slug 找活动；找不到返回 undefined（页面会显示 404）
export function findEvent(slug: string | undefined) {
  return EVENT_DETAILS.find((event) => event.slug === slug);
}
