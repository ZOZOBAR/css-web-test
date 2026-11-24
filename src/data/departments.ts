/* ==========================================================
 * 部门内容（关于我们页的部门卡片 + /about/:dept 部门详情页）
 *
 * 文字来源：原网站各部门页原文，一字不改；英文名取自原网站荣誉墙。
 * 图片来源：原网站各部门页（部门 Logo、活动照、合影、负责人照片）。
 * 设计：Figma「HI-FI · 子页面」D · 部门详情模板（以技术部为例）
 *
 * 每个部门的原文结构不一样，所以除了 intro 和 leaders，其余都是可选的，
 * 没写的部分页面上就不显示：
 *   intro     部门介绍。数组里每个元素是一段；如果元素本身是数组，显示成列表
 *   motto     座右铭 / 宣言（红色面板，右边配一张照片）
 *   features  特色卡片（技术部「四大特色」、市场部「日常活动」）
 *   tags      标签（文娱部「我们负责舞台活动的」）
 *   projects  项目（技术部「现有项目」）+ planned 计划中的项目
 *   photos    活动照片（没有座右铭面板的部门，把照片单独放一排）
 *
 * 负责人名单：按原网站各部门页（和荣誉墙 2025-2026 不完全一致，待团队确认以哪届为准）
 * ========================================================== */

export type Leader = { name: string; role: string; photo: string };

export type Department = {
  slug: string; // 网址：/about/jishubu
  name: string;
  english: string;
  logo: string;
  logoIsSquare?: boolean; // Logo 原图不是圆形（技术部），放进深色圆底完整显示
  heroImage: string;
  heroPosition?: string;
  intro: (string | string[])[];
  motto?: { lines: string[]; label?: string; image: string };
  features?: { eyebrow: string; title: string; items: { title?: string; text: string }[] };
  tags?: { title: string; items: string[]; note?: string };
  projects?: { name: string; english: string; text: string; image: string }[];
  planned?: string;
  photos?: string[];
  leaders: Leader[];
  groupPhoto: string;
};

// 图片路径简写：dept("jishubu", "group-photo") → /assets/about/jishubu/group-photo.webp
const dept = (slug: string, name: string) => `/assets/about/${slug}/${name}.webp`;

// 负责人照片按顺序命名 leader-1、leader-2……
const leaders = (slug: string, list: [string, string][]): Leader[] =>
  list.map(([name, role], index) => ({ name, role, photo: dept(slug, `leader-${index + 1}`) }));

export const DEPARTMENTS: Department[] = [
  /* ---------- 主席团 ---------- */
  {
    slug: "zhuxituan",
    name: "主席团",
    english: "Presidium",
    logo: "/assets/about/logos/zhuxituan.webp",
    heroImage: dept("zhuxituan", "group-photo-1"),
    intro: [
      "主席全面负责学生会工作，熟悉各部门状况， 及时发现问题并采取有效措施，提出建设性意见与要求，主持学生会例会， 研究每一阶段工作，分析情况，制订工作计划，总结经验教训。 同时，主席作为学生会代表，与外校学生会及企业保持紧密沟通，促进交流合作。",
      "副主席则协助主席履行职责， 支持各部门的常规工作，负责学生会内部沟通，确保各部门和谐协同运作。 副主席通过密切关注各部门的需求，促进团队内部的高效沟通， 维护学生会的内部和谐氛围，为主席的领导提供有力支持，共同推动学生会的全面发展。",
      "财务部担任着审核和监督学生会流水情况的责任， 致力于保持财务的透明度与公开性。财务通过精准而细致的审查，确保社团财政状况清晰可见。 同时，财务不仅仅是对过去财务活动的审核，更是制定学生会财政计划的关键推动者。 通过明晰的财政计划，财务部为学生会提供了有力的财务支持，确保各项活动和项目能够顺利运行， 为整个联合会的可持续发展提供了坚实的财务基础。",
      "秘书部作为主席团的一部分， 其职责涵盖了与学校的密切沟通和协调，以确保注册、会议、活动等正常举办。 同时，秘书部积极与各部门部长保持紧密沟通，充当部门与学校之间的重要桥梁， 致力于促进各部门与学校各相关部门的有效沟通。通过协同努力，秘书助力联合会内外协调合作， 确保学生学者们能够充分参与并受益于联合会的各项活动和资源。",
    ],
    leaders: leaders("zhuxituan", [
      ["颜婧怡", "主席"],
      ["赵彦坤", "副主席"],
      ["Jasmine Yao", "秘书"],
      ["谢悠然", "财务"],
    ]),
    groupPhoto: dept("zhuxituan", "group-photo-2"),
  },

  /* ---------- 技术部（Figma 示例页） ---------- */
  {
    slug: "jishubu",
    name: "技术部",
    english: "Department of Technology",
    logo: "/assets/about/logos/jishubu.webp",
    logoIsSquare: true,
    heroImage: dept("jishubu", "jishubu-24Fall"),
    intro: [
      "我们是一支由工程师、设计师组成的开放且热情的团队，每一名成员都是至关重要的部分。 人如其名，负责CSSA里外的硬核技术型事务。以科创为核心，尽可能地在不同板块开发能 在生活与学习上给予便利的优质产品以满足当下学生社群的需求。",
    ],
    motto: {
      lines: ["脑洞大开，提出天马行空的创新方案，并将它们一一投射到现实。"],
      label: "技术部座右铭",
      image: dept("jishubu", "jishubu-img-2"),
    },
    features: {
      eyebrow: "技术部四大特色",
      title: "四大特色",
      items: [
        { title: "创新", text: "每个部员都能参与新项目的规划，且有机会学习新的语言、框架和代码。" },
        { title: "技能", text: "给予每个部员提供发挥自己专业本领的平台。" },
        { title: "合作", text: "与志同道合的其他朋友共同努力，分享本领与热情。" },
        { title: "乐趣", text: "主打chill，部门严禁压力的存在，节奏轻松（但绝非松懈）。" },
      ],
    },
    // 项目截图是已批准的新增（原网站没有项目图）
    projects: [
      {
        name: "BU CSSA官网",
        english: "Official Website",
        text: "以重建学生会官方网站和让学生更方便接收BU CSSA相关活动福利为目标， 于2023年春季启动的开发项目。将CSSA相关信息收集整合以首页、活动、资源、关于我们四个大板块进行呈现。",
        image: dept("jishubu", "project-official-site"),
      },
      {
        name: "BU CSSA申请网",
        english: "Application Portal",
        text: "为方便CSSA的学期初招新以及活动报名建立的独立于官网的申请网站，于2023年夏季开始搭建。 主要版块为部门招新和活动主页，申请网站支持学生注册账号并直接在该平台投递自己的申请简历。",
        image: dept("jishubu", "project-portal"),
      },
    ],
    planned: "当前技术部还有BU中国留学生论坛等计划中的项目，在新的学期将进行更深入具体的讨论。",
    leaders: leaders("jishubu", [
      ["屠嘉勇", "部长"],
      ["郑坤瑜", "副部长"],
      ["严肇琪", "副部长"],
    ]),
    groupPhoto: dept("jishubu", "group-photo"),
  },

  /* ---------- 市场部 ---------- */
  {
    slug: "shichangbu",
    name: "市场部",
    english: "Department of Marketing",
    logo: "/assets/about/logos/shichangbu.webp",
    heroImage: dept("shichangbu", "shichangbu-img-2"),
    intro: [
      "市场部作为BUCSSA背后的财政后盾， 旨在于保证学联财政和日常支出，沟通联络商家，让BUCSSA与100多家企业和商家保持良好合作关系。 同时市场部日常协助其他部门策划活动项目，为BUCSSA寻求获取外部资源的机会。",
    ],
    motto: {
      lines: [
        "价值观笃守诚信 赋无止境",
        "准则有作为者，有公信力",
        "尊重谦虚、守则者，戒除骄躁、破格者",
      ],
      image: dept("shichangbu", "shichangbu-img-3"),
    },
    features: {
      eyebrow: "市场部",
      title: "我们的日常活动包括",
      items: [
        {
          text: "合作官方或商家开办宣讲会等小型活动，拓展BUCSSA线下影响力， 覆盖国内外企业人才引进、留学生组织正式活动、企业与商家招聘宣讲等。",
        },
        { text: "谈判并在大型活动中与商家合作，加强BU社区与当地商家的联系。" },
        { text: "对接策划商家推文宣传，引入合作商内容推广。" },
        { text: "策划实施红卡项目，联合波士顿本地商家为BU学生增加生活福利。" },
      ],
    },
    leaders: leaders("shichangbu", [
      ["柴浩源", "部长"],
      ["陈姿亦", "副部长"],
      ["柏睿扬", "副部长"],
    ]),
    groupPhoto: dept("shichangbu", "group-photo"),
  },

  /* ---------- 事务部 ---------- */
  {
    slug: "shiwubu",
    name: "事务部",
    english: "Department of Affairs",
    logo: "/assets/about/logos/shiwubu.webp",
    heroImage: dept("shiwubu", "shiwubu-img-2"),
    intro: [
      "每月精彩不断，我们几乎每个月都会举办不同类型的活动。 例如，在每年暑假期间，我们都会在北上广举办大规模的新生见面会， 帮助新生提前了解学校、适应大学生活。 此外，我们还会在万圣节、春节等节日前夕，策划女巫镇秋游和新春嘉年华等有趣活动，丰富同学们的课余生活。",
      "今年我们还会与波士顿地区其他学联、合作举办活动。我们在这一学期和NUCSSA东北大学中国学生学者联合会举办了“双犬之战”英雄联盟电竞比赛，为两校的学生提供了交流的机会。",
      "在与波士顿两大剧本杀店家联动的“BackRoom”万圣节特别活动中，我们希望进一步丰富大家在波士顿的生活和体验，提供更多交友的平台。",
      "希望大家在事务部都可以获得举办活动的经验，并收获真挚的友情!",
    ],
    motto: {
      lines: [
        "事务部的使命是成为所有大型交互式活动的核心力量，是重要的组织者与创新者。",
        "我们负责活动的策划与实施，是和同学们交流最紧密的部门。",
        "我们希望通过自己的努力，为中国留学生们举办丰富多彩的活动，",
        "帮助远离家乡的中国学生找到归属感，收获温暖与支持。",
      ],
      image: dept("shiwubu", "shiwubu4"),
    },
    leaders: leaders("shiwubu", [
      ["蓝翊菲", "部长"],
      ["宋美伦", "副部长"],
      ["王杰霖", "副部长"],
    ]),
    groupPhoto: dept("shiwubu", "group-photo"),
  },

  /* ---------- 文娱部 ---------- */
  {
    slug: "wenyubu",
    name: "文娱部",
    english: "Department of Arts",
    logo: "/assets/about/logos/wenyubu.webp",
    heroImage: dept("wenyubu", "wenyubu-img-2"),
    intro: [
      "文娱部是所有精彩呈现的幕后推手，是CSSA的门面担当，更是一个温暖的家。 我们想点子写策划抠细节面面俱到，工作聚餐打打闹闹，从舞台的各个方面陪着一场场活动从开始到结束。",
    ],
    motto: {
      lines: [
        "我们是BUCSSA的社（交）恐（怖）人基地。",
        "只要有舞台，就归文娱管！",
        "文娱部负责BUCSSA的舞台类活动，",
        "为观众们呈现各式各样的SHOW ，我们就是CSSA SHOWMAKER！",
      ],
      image: dept("wenyubu", "wenyubu-img-3"),
    },
    tags: {
      title: "我们负责舞台活动的",
      items: ["前期策划", "物料准备", "嘉宾对接", "推文宣传", "现场布置", "表演才艺", "部门合作"],
      note: "有任何需要欢迎拨打文娱热线获得我们的一条龙服务！",
    },
    leaders: leaders("wenyubu", [
      ["徐琰至", "部长"],
      ["王梓屹", "副部长"],
      ["徐欣妍", "副部长"],
    ]),
    groupPhoto: dept("wenyubu", "group-photo"),
  },

  /* ---------- 宣传部 ---------- */
  {
    slug: "xuanchuanbu",
    name: "宣传部",
    english: "Department of Advertising",
    logo: "/assets/about/logos/xuanchuanbu.webp",
    heroImage: dept("xuanchuanbu", "xuanchuanbu-img-2"),
    intro: [
      "宣传部的英文名是Publicity Department,即公关部门，顾名思义就是为BUCSSA营造和完善形象的存在。 宣传部的工作内容主要为：多平台记录和宣传BUCSSA各项活动(非诚勿扰，国庆晚会，篮球赛，职发讲座等)， 拍摄一系列留学生活短片（毕业视频，留学日常，节日采访），并管理BUCSSA主要媒体(微信公众号，Instagram，小红书，抖音等）， 为同学们的学习生活提供信息便利。此外，宣传部每年都会举办具有相当规模的摄像展，为BU中国摄像爱好者们创造展示的平台。",
      "加入我们，我们是一个充满活力、团结友好的团队。 在这里，你会结交到志同道合的小伙伴，共同成长，共同奋斗。 你将有机会亲身参与编辑、发布内容，展示自己的创意，为公众号注入新鲜活力…",
      [
        "你写作的功底将为BUCSSA的宣传奠定基础；",
        "你摄像的能力将为BUCSSA的活动定格美好回忆;",
        "你制作海报的技能将为BUCSSA活动营造至关重要的第一印象;",
        "你捕捉热点，熟悉社交媒体的天赋将成为BUCSSA与外界互动的桥梁;",
        "你创造和编辑动图视频的本领将为你身边的同学们呈现最精彩纷呈的留学生活。",
      ],
      "你在这里能学到非营利组织的公关思路，也有机会掌握新的传媒技能和知识。",
    ],
    photos: [dept("xuanchuanbu", "xuanchuanbu-img-3")],
    leaders: leaders("xuanchuanbu", [
      ["陈德音", "部长"],
      ["张馨艺", "副部长"],
      ["刘鸣跃", "副部长"],
    ]),
    groupPhoto: dept("xuanchuanbu", "group-photo"),
  },

  /* ---------- 影视部 ---------- */
  {
    slug: "yingshibu",
    name: "影视部",
    english: "Department of Film & TV",
    logo: "/assets/about/logos/yingshibu.webp",
    heroImage: dept("yingshibu", "yingshibu-img-2"),
    intro: [
      '影视部是一个充满活力和创造力的团队，由热爱摄影和视频制作的成员组成。 影视部负责规划、拍摄、剪辑各种视频，包括宣传片、专题纪录片、微电影、新年贺岁视频及特色节目"深夜食堂"。',
      "我们以创意和热情在BUCSSA学生会通讯产品的设计、开发和运营中发挥重要作用， 尤其是视频创作方面。影视部致力于利用新媒体拓展BUCSSA的可能性， 同时参与官方活动的报道，通过独特的视角展现北美留学生校园生活的活力。",
      "除此之外成员们参与了多种活动， 如活动跟拍、视频剪辑、街头采访和VCR制作，展现了他们的执行力和沟通协调能力。 作为一个以爱发电的组织，他们强调赞美和鼓励，创造了一个融洽和贴近的团队氛围。",
      "在新春嘉年华、非诚勿扰、女巫镇等各类活动中， 我们BUCSSA影视部总是活跃在现场。每次举起相机，不仅为校园生活留下美好的记忆， 也为中外文化交流搭建桥梁，使影视部成为一个连接BUCSSA与校园社区、乃至更广泛社会的窗口。 欢迎对影视创作充满热情的你加入我们，共同创造更多精彩故事。",
    ],
    photos: [dept("yingshibu", "yingshibu-img-4")],
    leaders: leaders("yingshibu", [
      ["黄海文", "部长"],
      ["夏隽琦", "副部长"],
      ["洪一宁", "副部长"],
    ]),
    groupPhoto: dept("yingshibu", "group-photo"),
  },

  /* ---------- 职发部 ---------- */
  {
    slug: "zhifabu",
    name: "职发部",
    english: "Department of Career Development",
    logo: "/assets/about/logos/zhifabu.webp",
    heroImage: dept("zhifabu", "zhifabu-img-2"),
    intro: [
      "职发部致⼒于为中国学⽣ 提供各⾏业职业发展的实时信息并帮助中国学⽣对职业⽣涯提前规划及思考。 在学期中我们将以职发百宝箱、导师分享会、⼈际关系、校友分享会等相关活动及推⽂为同学们提供充⾜的信息渠道来源。 在为BU全体留学⽣服务同时，也为职发部每位部员获得职场技能、networking等各⽅⾯的提升。",
      "职来职往圆桌分享会是职发部⼀学期⼀度的经典活动。 本场活动邀请3-5位学⻓学姐和5-7位具有⼯作经验的职场⼈⼠来到现场为BU中国留学⽣提供来⾃不同⾏业的圆桌分享会， 每个嘉宾作为moderator在独⽴⼩圆桌和对其⾏业感兴趣的同学进⾏⾯对⾯沟通， 提供相关⾏业信息，有利于BU中国留学⽣留美或归国的未来⾏业规划指导。",
      "致力于提升同学们职场综合技能的同时， 职发大家庭也坚持 'Work Hard, Play Hard' 的文化。除了每学期的团队建设活动之外， 职发的每位成员都能建立非常紧密的联系 —— 职发的每一位成员也都将成为彼此成长旅途中最宝贵且志趣相投的网络。 我们期待并相信，每位职发成员都能通过职发找到自己职业生涯中的指路明灯。",
    ],
    photos: [dept("zhifabu", "zhifabu-img-3")],
    leaders: leaders("zhifabu", [
      ["魏子轩", "部长"],
      ["秦易元", "副部长"],
    ]),
    groupPhoto: dept("zhifabu", "group-photo"),
  },
];

// 按 slug 找部门；找不到返回 undefined（页面会显示 404）
export function findDepartment(slug: string | undefined) {
  return DEPARTMENTS.find((department) => department.slug === slug);
}
