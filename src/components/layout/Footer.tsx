/* ==========================================================
 * Layout · Footer 页脚（全站共用）
 *
 * 结构：
 *   Top
 *     ├ 左：学联标志 + 名称 + 社交图标
 *     ├ 探索（页面链接）
 *     ├ 资源（资源链接）
 *     └ 联系与关注（邮箱）
 *   BackToTop  右下角"返回顶部"
 *
 * 布局：桌面 4 列；≤850px 两列；≤520px 单列
 * 数据：src/data/footer.ts
 *
 * 社交图标：SVG 当作 CSS mask 使用，颜色由 color 控制，
 *          所以 Hover 时只改 color 就能变色。
 *          默认 #333，Hover 深红并上移 4px（已和设计确认）。
 * ========================================================== */
import styled from "styled-components";
import {
  ABOUT_SITE_LINK,
  CONTACT_EMAIL,
  EXPLORE_LINKS,
  RESOURCE_LINKS,
  SOCIAL_LINKS,
} from "../../data/footer";
import { MEDIA } from "../../styles/breakpoints";

/* ---------- 组件 ---------- */
export default function Footer() {
  return (
    <Container id="footer">
      <Top>
        {/* 左：学联标志 + 名称 + 社交图标 */}
        <div>
          <Identity>
            <IdentityLogo src="/assets/logo.png" alt="BUCSSA 标志" />
            <div>
              <IdentityName>波士顿大学中国学生学者联合会</IdentityName>
              <IdentityEnglish>Boston University Chinese Students &amp; Scholars Association</IdentityEnglish>
            </div>
          </Identity>

          <SocialList>
            {SOCIAL_LINKS.map((social) => (
              <SocialLink key={social.name} href={social.href} aria-label={`BUCSSA ${social.name}`}>
                <SocialIcon $icon={social.icon} />
              </SocialLink>
            ))}
          </SocialList>
        </div>

        {/* 探索 */}
        <Column>
          <ColumnTitle>探索</ColumnTitle>
          {EXPLORE_LINKS.map((link) => (
            <ColumnLink key={link.label} href={link.href}>
              {link.label}
            </ColumnLink>
          ))}
        </Column>

        {/* 资源 */}
        <Column>
          <ColumnTitle>资源</ColumnTitle>
          {RESOURCE_LINKS.map((link) => (
            <ColumnLink key={link.label} href={link.href}>
              {link.label}
            </ColumnLink>
          ))}
        </Column>

        {/* 联系与关注 */}
        <Column>
          <ColumnTitle>联系与关注</ColumnTitle>
          <EmailLink href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</EmailLink>
          <ColumnLink href={ABOUT_SITE_LINK.href}>{ABOUT_SITE_LINK.label}</ColumnLink>
        </Column>
      </Top>

      {/* 返回顶部 */}
      <BackToTop href="#top">返回顶部 ↑</BackToTop>
    </Container>
  );
}

/* ---------- 样式 ---------- */

// 键盘聚焦时的红色描边（链接通用）
const FOCUS_RING = `
  &:focus-visible {
    outline: 3px solid var(--color-brand);
    outline-offset: 3px;
  }
`;

// 外框：浅米色背景
const Container = styled.footer`
  padding: 74px clamp(24px, 5.6vw, 94px) 31px;
  background: var(--color-bg-footer);
  color: var(--color-text-footer);

  @media ${MEDIA.phone} {
    padding: 52px 24px 26px;
  }
`;

// 上半部分：左边学联信息较宽，右边三栏链接
const Top = styled.div`
  display: grid;
  grid-template-columns: 2.3fr repeat(3, 1fr);
  gap: 54px;

  @media ${MEDIA.footer} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${MEDIA.phone} {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

/* -- 左：学联信息 -- */

// 标志 + 名称横排
const Identity = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

// 学联标志
const IdentityLogo = styled.img`
  width: 82px;
  height: 82px;
  object-fit: contain;
`;

// 中文全称
const IdentityName = styled.strong`
  display: block;
  margin: 14px 0 6px;
  font-size: 23px;

  @media ${MEDIA.phone} {
    font-size: 19px;
  }
`;

// 英文全称
const IdentityEnglish = styled.p`
  color: var(--color-text-footer-muted);
  font-size: 14px;
  line-height: 1.5;
`;

// 社交图标一排
// 注意：≤740px 时图标改为竖排，这是迁移时从旧 CSS 带过来的效果，待设计确认
const SocialList = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 78px;

  @media ${MEDIA.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }

  @media ${MEDIA.footer} {
    margin-top: 28px;
  }

  @media ${MEDIA.phone} {
    flex-wrap: wrap;
    margin-top: 22px;
  }
`;

// 单个社交链接：Hover 变深红，图标上移 4px；按下时上移 1px
const SocialLink = styled.a`
  display: block;
  color: var(--color-icon);

  &:hover {
    color: var(--color-brand-dark);
  }

  &:hover > span {
    transform: translateY(-4px);
  }

  &:active > span {
    transform: translateY(-1px);
  }

  ${FOCUS_RING}

  @media (prefers-reduced-motion: reduce) {
    &:hover > span,
    &:active > span {
      transform: none;
    }
  }
`;

// 图标本体：用 SVG 做遮罩，填充色跟随 color
const SocialIcon = styled.span<{ $icon: string }>`
  display: block;
  width: 29px;
  height: 29px;
  background: currentColor;
  mask: url(${({ $icon }) => $icon}) center / contain no-repeat;
  -webkit-mask: url(${({ $icon }) => $icon}) center / contain no-repeat;
  transition:
    transform 200ms ease,
    color 200ms ease;
`;

/* -- 右：三栏链接 -- */

// 一栏
const Column = styled.div``;

// 栏目标题
const ColumnTitle = styled.h2`
  margin-bottom: 24px;
  font-size: 23px;

  @media ${MEDIA.phone} {
    margin-bottom: 15px;
  }
`;

// 栏目链接
const ColumnLink = styled.a`
  display: block;
  margin-bottom: 16px;
  font-size: 18px;

  ${FOCUS_RING}

  @media ${MEDIA.phone} {
    margin-bottom: 11px;
  }
`;

// 邮箱：字号小一号、灰色，长地址自动换行
const EmailLink = styled(ColumnLink)`
  color: var(--color-text-footer-muted);
  font-size: 16px;
  word-break: break-word;
`;

/* -- 返回顶部 -- */

// 靠右对齐的小字链接
const BackToTop = styled.a`
  display: block;
  width: max-content;
  margin: 35px 0 0 auto;
  color: var(--color-text-footer-faint);
  font-size: 14px;

  ${FOCUS_RING}
`;
