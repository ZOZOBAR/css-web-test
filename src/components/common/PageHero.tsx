/* ==========================================================
 * Common · PageHero 子页面顶部大图（所有子页面共用）
 *
 * 结构（从下到上叠 4 层）：
 *   Image       背景照片
 *   Scrim       压色层：整体压暗 25% + 左侧文字区加深（2026-11-18 定，提升可读性）
 *   Gradient    上下渐变：顶部压住导航，底部压住标题
 *   Content     英文小标题 → 大标题 → 副标题 / 信息栏
 *
 * 尺寸（Figma，1440 宽）：
 *   size="banner"  560 高（活动总览、关于我们、荣誉墙、合作、新生手册）
 *   size="dept"    760 高（部门详情）
 *   size="event"   820 高（活动详情）
 *
 * 注意：id="top" 不能改。导航靠它判断"是否已经滚出 Hero"，
 *      页脚"返回顶部"也跳到这里。
 * ========================================================== */
import styled from "styled-components";
import { MEDIA } from "../../styles/breakpoints";

type HeroSize = "banner" | "dept" | "event";

type PageHeroProps = {
  image: string;
  eyebrow: string; // 标题上方的英文小标题，如 "EVENTS"
  title: string;
  subtitle?: string;
  meta?: string[]; // 信息栏（活动详情用）：时间 | 地点 | 主办
  size?: HeroSize;
  imagePosition?: string; // 照片取景位置（CSS object-position），默认居中
};

// 每种尺寸的高度和标题字号
const HERO_HEIGHT: Record<HeroSize, string> = {
  banner: "clamp(420px, 38.9vw, 560px)",
  dept: "clamp(480px, 52.8vw, 760px)",
  event: "clamp(520px, 56.9vw, 820px)",
};

const TITLE_SIZE: Record<HeroSize, string> = {
  banner: "clamp(48px, 6.2vw, 88px)",
  dept: "clamp(48px, 6.2vw, 88px)",
  event: "clamp(52px, 7.8vw, 112px)",
};

/* ---------- 组件 ---------- */
export default function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
  meta,
  size = "banner",
  imagePosition = "center",
}: PageHeroProps) {
  return (
    <Container id="top" aria-labelledby="page-title" $size={size}>
      {/* 背景照片 + 两层遮罩（纯装饰，读屏跳过） */}
      <Image src={image} alt="" $position={imagePosition} />
      <Scrim aria-hidden="true" />
      <Gradient aria-hidden="true" />

      {/* 文字 */}
      <Content>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Title id="page-title" $size={size}>
          {title}
        </Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}

        {/* 信息栏：每项之间用细竖线隔开 */}
        {meta && (
          <Meta>
            {meta.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </Meta>
        )}
      </Content>
    </Container>
  );
}

/* ---------- 样式 ---------- */

type SizeProps = { $size: HeroSize };

// 外框：内容贴底部，左右边距和全站一致
const Container = styled.section<SizeProps>`
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: ${({ $size }) => HERO_HEIGHT[$size]};
  padding: 120px var(--space-page-x) clamp(56px, 5.6vw, 80px);
  overflow: hidden;
  color: var(--color-text-inverse);

  @media ${MEDIA.mobile} {
    min-height: ${({ $size }) => ($size === "banner" ? "380px" : "520px")};
    padding: 110px var(--space-page-x-mobile) 48px;
  }
`;

// 背景照片：铺满整个 Hero
const Image = styled.img<{ $position: string }>`
  position: absolute;
  inset: 0;
  z-index: -3;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${({ $position }) => $position};
`;

// 压色层：整体 25% + 左侧文字区从 45% 渐变到 0（Figma「压色层」两层）
const Scrim = styled.div`
  position: absolute;
  inset: 0;
  z-index: -2;
  background:
    linear-gradient(
      90deg,
      rgba(var(--color-scrim), 0.45) 0%,
      rgba(var(--color-scrim), 0.12) 55%,
      rgba(var(--color-scrim), 0) 100%
    ),
    rgba(var(--color-scrim), 0.25);
`;

// 上下渐变：顶部 40%（导航区）→ 中间 12% → 底部 62%（标题区）
const Gradient = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(
    180deg,
    rgba(var(--color-scrim), 0.4) 0%,
    rgba(var(--color-scrim), 0.1) 45%,
    rgba(var(--color-scrim), 0.62) 100%
  );
`;

// 文字区
const Content = styled.div`
  display: grid;
  justify-items: start;
  gap: 18px;
`;

// 英文小标题："EVENTS"、"About CSSA" 等
const Eyebrow = styled.p`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.08em;
`;

// 大标题
const Title = styled.h1<SizeProps>`
  font-size: ${({ $size }) => TITLE_SIZE[$size]};
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: 0.02em;
`;

// 副标题
const Subtitle = styled.p`
  max-width: 760px;
  font-size: clamp(17px, 1.5vw, 22px);
  opacity: 0.9;
`;

// 信息栏：每项之间一条半透明竖线
const Meta = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 0;
  font-size: clamp(15px, 1.25vw, 18px);
  font-weight: 500;

  li + li::before {
    content: "";
    display: inline-block;
    width: 1px;
    height: 14px;
    margin: 0 18px;
    background: rgba(255, 255, 255, 0.45);
    vertical-align: -1px;
  }
`;
