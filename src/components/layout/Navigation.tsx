/* ==========================================================
 * Layout · Navigation 顶部导航（全站共用）
 *
 * 两种状态：
 *   默认    → 在 Hero 上方，透明背景，显示 Logo + "BUCSSA" 文字
 *   滚动后  → 离开 Hero 后变成居中的红色胶囊，"BUCSSA" 文字收起
 *
 * 结构：
 *   SkipLink           跳到正文（键盘用户用）
 *   Header
 *     └ Nav
 *         ├ Brand        Logo + BUCSSA 文字（Brand Morph 动画）
 *         ├ NavLinks     页面链接（手机端变成下拉菜单）
 *         └ NavActions   语言切换 + 手机菜单按钮
 *
 * 响应式：
 *   ≤1050px  隐藏 "BUCSSA" 文字
 *   ≤740px   链接收进汉堡菜单
 *
 * 数据：src/data/navigation.ts
 * ========================================================== */
import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { NAV_ITEMS } from "../../data/navigation";
import { MEDIA } from "../../styles/breakpoints";

// Hero 的 id。导航通过它判断"是否已经滚出 Hero"。
const HERO_ID = "top";

// 所有展开/收起动画共用的缓动曲线
const EASE_OUT = "cubic-bezier(0.22, 1, 0.36, 1)";

/* ---------- 组件 ---------- */
export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);
  const brandTextRef = useRef<HTMLSpanElement>(null);

  // 测量 "BUCSSA" 文字的完整宽度，存到 CSS 变量 --brand-text-w。
  // 收起动画需要知道从多宽收到 0。
  // 注意：只能在"未滚动"状态下测，滚动后字号变小，测出来的宽度会偏小，
  //      回到顶部时文字就会被裁掉。
  const measureBrandText = () => {
    const brandText = brandTextRef.current;

    if (!brandText) {
      return;
    }

    const width = Math.ceil(brandText.getBoundingClientRect().width);
    document.documentElement.style.setProperty("--brand-text-w", `${width}px`);
  };

  // 监听 Hero：Hero 离开屏幕顶部 90px 以内时，切换到"滚动后"状态
  useEffect(() => {
    const hero = document.getElementById(HERO_ID);

    if (!hero) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-90px 0px 0px 0px" },
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  // 未滚动时：页面加载、字体加载完成、窗口大小改变，都重新测量一次
  useEffect(() => {
    if (isScrolled) {
      return;
    }

    measureBrandText();
    void document.fonts?.ready.then(measureBrandText);
    window.addEventListener("resize", measureBrandText);

    return () => window.removeEventListener("resize", measureBrandText);
  }, [isScrolled]);

  const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleLanguage = () => setIsEnglish((english) => !english);

  return (
    <>
      {/* 跳到正文：平时藏在屏幕外，按 Tab 时出现 */}
      <SkipLink href="#main">跳转到内容</SkipLink>

      <Header id="site-header" $isScrolled={isScrolled}>
        <Nav aria-label="主导航" $isScrolled={isScrolled}>
          {/* 左：Logo + BUCSSA */}
          <Brand href="#top" aria-label="BUCSSA 返回顶部" $isScrolled={isScrolled}>
            <BrandLogo src="/assets/logo.png" alt="" $isScrolled={isScrolled} />
            <BrandMask aria-hidden="true" $isScrolled={isScrolled}>
              <BrandText ref={brandTextRef} $isScrolled={isScrolled}>
                BUCSSA
              </BrandText>
            </BrandMask>
          </Brand>

          {/* 中：页面链接 */}
          <NavLinks id="nav-links" $isScrolled={isScrolled} $isOpen={isMenuOpen}>
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} href={item.href} onClick={closeMenu} $isScrolled={isScrolled}>
                {item.label}
              </NavLink>
            ))}
          </NavLinks>

          {/* 右：语言切换 + 手机菜单按钮 */}
          <NavActions>
            <LanguageSwitch
              type="button"
              onClick={toggleLanguage}
              aria-label="语言切换（演示）"
              $isScrolled={isScrolled}
            >
              <LanguageOption $isActive={!isEnglish} $isScrolled={isScrolled}>
                中
              </LanguageOption>
              <LanguageOption $isActive={isEnglish} $isScrolled={isScrolled}>
                EN
              </LanguageOption>
            </LanguageSwitch>

            <MenuToggle
              type="button"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "关闭导航菜单" : "打开导航菜单"}
              aria-expanded={isMenuOpen}
              aria-controls="nav-links"
              $isScrolled={isScrolled}
            >
              <MenuBar $isScrolled={isScrolled} />
              <MenuBar $isScrolled={isScrolled} />
            </MenuToggle>
          </NavActions>
        </Nav>
      </Header>
    </>
  );
}

/* ---------- 样式 ---------- */

type ScrollProps = { $isScrolled: boolean };

/*
 * 写法提示：
 * styled-components 会把 @media 规则排在普通规则后面，
 * 所以"滚动后"的值如果要在手机/平板上也生效，
 * 不能写在 css`` 块里，要像下面 gap、width 这样，
 * 在每个断点里用 $isScrolled 判断取值。
 */

// 跳到正文：默认藏在屏幕上方，获得焦点时滑下来
const SkipLink = styled.a`
  position: fixed;
  top: -60px;
  left: 10px;
  z-index: 100;
  padding: 10px;
  background: var(--color-bg-card);

  &:focus {
    top: 10px;
  }
`;

// 最外层：固定在页面顶部，本身不接收点击（点击穿透到下面的 Hero）
const Header = styled.header<ScrollProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  padding: 26px clamp(24px, 5.5vw, 90px);
  pointer-events: none;
  transition: padding 0.55s ${EASE_OUT};

  @media ${MEDIA.mobile} {
    padding: 16px 20px;
  }

  ${({ $isScrolled }) =>
    $isScrolled &&
    css`
      padding: 18px 20px;

      @media ${MEDIA.mobile} {
        padding: 12px 15px;
      }
    `}
`;

// 导航条：默认铺满；滚动后收成红色胶囊
const Nav = styled.nav<ScrollProps>`
  display: flex;
  align-items: center;
  gap: ${({ $isScrolled }) => ($isScrolled ? "18px" : "clamp(18px, 2vw, 36px)")};
  width: 100%;
  max-width: 1600px;
  margin: auto;
  padding: 10px 0;
  color: var(--color-text-inverse);
  pointer-events: auto;
  transition:
    width 0.65s ${EASE_OUT},
    max-width 0.65s ${EASE_OUT},
    padding 0.65s ${EASE_OUT},
    background 0.55s,
    box-shadow 0.55s,
    border-radius 0.55s,
    backdrop-filter 0.55s;

  @media ${MEDIA.mobile} {
    gap: ${({ $isScrolled }) => ($isScrolled ? "18px" : "10px")};
  }

  ${({ $isScrolled }) =>
    $isScrolled &&
    css`
      width: min(100%, 860px);
      max-width: 860px;
      padding: 10px 22px;
      border-radius: 100px;
      background: var(--color-brand);
      box-shadow: 0 15px 40px rgba(36, 13, 13, 0.22);
      backdrop-filter: blur(18px);

      @media ${MEDIA.tablet} {
        width: min(100%, 750px);
      }

      @media ${MEDIA.mobile} {
        width: 100%;
        padding: 8px 15px;
      }
    `}
`;

/* -- Brand：Logo + BUCSSA 文字 -- */

// 品牌区：滚动后文字收起，Logo 和文字之间不再留空
const Brand = styled.a<ScrollProps>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 13px;
  min-width: 0;
  font-size: clamp(14px, 1.35vw, 21px);
  font-weight: 600;
  letter-spacing: 0.19em;
  white-space: nowrap;

  ${({ $isScrolled }) =>
    $isScrolled &&
    css`
      gap: 0;
      font-size: 14px;
    `}
`;

// Logo：默认 48px，手机 42px；滚动后不论屏幕大小都是 32px
const BrandLogo = styled.img<ScrollProps>`
  width: ${({ $isScrolled }) => ($isScrolled ? "32px" : "48px")};
  height: ${({ $isScrolled }) => ($isScrolled ? "32px" : "48px")};
  object-fit: contain;

  @media ${MEDIA.mobile} {
    width: ${({ $isScrolled }) => ($isScrolled ? "32px" : "42px")};
    height: ${({ $isScrolled }) => ($isScrolled ? "32px" : "42px")};
  }
`;

// 文字遮罩：控制 "BUCSSA" 可见宽度。滚动后宽度变 0，文字被"收"进 Logo
const BrandMask = styled.span<ScrollProps>`
  display: block;
  flex: 0 0 auto;
  width: var(--brand-text-w, auto);
  overflow: hidden;
  transition: width 0.65s ${EASE_OUT};

  @media ${MEDIA.tablet} {
    display: none;
  }

  ${({ $isScrolled }) =>
    $isScrolled &&
    css`
      width: 0;
    `}
`;

// "BUCSSA" 文字：滚动后向左滑动并淡出
const BrandText = styled.span<ScrollProps>`
  display: block;
  width: max-content;
  transition:
    transform 0.5s ${EASE_OUT},
    opacity 0.5s ${EASE_OUT};

  ${({ $isScrolled }) =>
    $isScrolled &&
    css`
      transform: translateX(-75%);
      opacity: 0;
    `}
`;

/* -- NavLinks：页面链接 -- */

// 滚动后链接之间的间距（所有屏幕尺寸都一样）
const SCROLLED_LINK_GAP = "clamp(10px, 1.3vw, 20px)";

// 链接容器：桌面横排居中；手机端变成下拉菜单（$isOpen 控制显示）
const NavLinks = styled.div<ScrollProps & { $isOpen: boolean }>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: ${({ $isScrolled }) => ($isScrolled ? SCROLLED_LINK_GAP : "clamp(15px, 2.1vw, 38px)")};
  white-space: nowrap;

  @media ${MEDIA.tablet} {
    gap: ${({ $isScrolled }) => ($isScrolled ? SCROLLED_LINK_GAP : "14px")};
  }

  @media ${MEDIA.mobile} {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    position: absolute;
    top: 76px;
    right: 20px;
    left: 20px;
    flex-direction: column;
    align-items: stretch;
    gap: ${({ $isScrolled }) => ($isScrolled ? SCROLLED_LINK_GAP : "0")};
    padding: 15px 22px;
    border-radius: 20px;
    background: var(--color-brand-dark);
    box-shadow: 0 18px 30px rgba(0, 0, 0, 0.25);
  }

  ${({ $isScrolled }) =>
    $isScrolled &&
    css`
      @media ${MEDIA.mobile} {
        top: 67px;
        right: 15px;
        left: 15px;
      }
    `}
`;

// 单个链接：Hover 时变淡
const NavLink = styled.a<ScrollProps>`
  font-size: clamp(12px, 1vw, 15px);
  font-weight: 600;
  letter-spacing: 0.06em;
  opacity: 0.94;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.6;
  }

  ${({ $isScrolled }) =>
    $isScrolled &&
    css`
      font-size: 12px;
    `}

  @media ${MEDIA.mobile} {
    padding: 12px;
    font-size: 15px;
  }
`;

/* -- NavActions：语言切换 + 菜单按钮 -- */

// 右侧按钮组；手机端推到最右边
const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media ${MEDIA.mobile} {
    margin-left: auto;
  }
`;

// 语言切换：默认是半透明玻璃胶囊；滚动后变成米色底、红字
const LanguageSwitch = styled.button<ScrollProps>`
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  min-width: 92px;
  min-height: 38px;
  padding: 4px;
  border: 1px solid rgba(255, 255, 255, 0.32);
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(18px) saturate(135%);
  -webkit-backdrop-filter: blur(18px) saturate(135%);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.14);
  color: var(--color-text-inverse);
  font-family: var(--font-switch);
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease,
    box-shadow 0.3s ease;

  ${({ $isScrolled }) =>
    $isScrolled &&
    css`
      min-height: 34px;
      padding: 3px;
      border-color: transparent;
      background: var(--color-bg-body);
      box-shadow: 0 3px 8px rgba(44, 20, 20, 0.22);
      color: var(--color-brand);
      font-size: 12px;
    `}
`;

// "中" / "EN" 选项：当前语言有浅色底，另一个半透明
const LanguageOption = styled.span<ScrollProps & { $isActive: boolean }>`
  display: grid;
  place-items: center;
  min-width: 40px;
  min-height: ${({ $isScrolled }) => ($isScrolled ? "26px" : "28px")};
  padding: 0 6px;
  border-radius: var(--radius-pill);
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.8)};
  transition:
    background-color 0.25s ease,
    color 0.25s ease,
    opacity 0.25s ease;

  ${({ $isActive, $isScrolled }) =>
    $isActive &&
    css`
      background: ${$isScrolled ? "rgba(178, 77, 77, 0.1)" : "rgba(255, 255, 255, 0.23)"};
    `}
`;

// 汉堡按钮：只在手机端显示。打开时两条横线转成 ×
const MenuToggle = styled.button<ScrollProps>`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: var(--color-bg-body);
  box-shadow: 0 3px 8px rgba(44, 20, 20, 0.22);
  transition:
    transform 0.25s ease,
    background-color 0.25s ease;

  &:hover {
    transform: scale(1.05);
  }

  &[aria-expanded="true"] > span:first-child {
    transform: translateY(3px) rotate(45deg);
  }

  &[aria-expanded="true"] > span:last-child {
    transform: translateY(-3px) rotate(-45deg);
  }

  @media ${MEDIA.mobile} {
    display: flex;
  }

  /* 在 Hero 上方时：和语言切换一样的玻璃效果 */
  ${({ $isScrolled }) =>
    !$isScrolled &&
    css`
      border: 1px solid rgba(255, 255, 255, 0.32);
      background: rgba(255, 255, 255, 0.14);
      backdrop-filter: blur(18px) saturate(135%);
      -webkit-backdrop-filter: blur(18px) saturate(135%);
      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.3),
        0 5px 16px rgba(0, 0, 0, 0.12);
    `}
`;

// 汉堡按钮里的横线：在 Hero 上方是白色，滚动后是红色
const MenuBar = styled.span<ScrollProps>`
  display: block;
  width: 17px;
  height: 2px;
  margin: 2px 0;
  border-radius: 2px;
  background: ${({ $isScrolled }) =>
    $isScrolled ? "var(--color-brand)" : "var(--color-text-inverse)"};
  transition:
    transform 0.25s ease,
    opacity 0.25s ease;
`;
