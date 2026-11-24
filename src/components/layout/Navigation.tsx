/* ==========================================================
 * Layout · Navigation 顶部导航（全站共用）
 *
 * 三种状态（2026-11-18 定，Figma H · 导航状态）：
 *   top    在 Hero 顶部、还没滚动 → 全宽透明，显示 Logo + "BUCSSA" 文字
 *   glass  开始滚动（超过 100px），还在 Hero 里 → 收成深色玻璃胶囊，"BUCSSA" 文字收起
 *   solid  滚出 Hero → 玻璃胶囊变成红色实体胶囊（只换颜色，宽度不再变）
 *   滚回顶部时反向播放。
 *
 * 为什么要有 glass：以前要等整个 Hero 滚完才变胶囊，中间一整屏导航没有底色，
 *   Hero 大标题从导航下面穿过，两层白字叠在一起看不清。
 *
 * 下拉菜单（桌面）：鼠标停在有子项的栏目上 0.1s 后展开，离开 0.2s 后收起；
 *   在 top / glass 状态是深色玻璃面板，在 solid 状态是红色面板；
 *   展开时页面加一层 20% 暗色遮罩。键盘 Tab 聚焦栏目也会展开，Esc 关闭。
 *   栏目本身可以点，进入总览页。
 *
 * 结构：
 *   SkipLink           跳到正文（键盘用户用）
 *   Dim                下拉展开时的页面暗色遮罩
 *   Header
 *     └ Nav
 *         ├ Brand        Logo + BUCSSA 文字（Brand Morph 动画）
 *         ├ NavLinks     栏目 + 下拉（手机端变成汉堡菜单，子项直接列出）
 *         └ NavActions   语言切换 + 手机菜单按钮
 *
 * 响应式：
 *   ≤1050px  隐藏 "BUCSSA" 文字
 *   ≤740px   链接收进汉堡菜单
 *
 * 数据：src/data/navigation.ts
 * ========================================================== */
import { useEffect, useRef, useState, type FocusEvent } from "react";
import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import SmartLink from "../common/SmartLink";
import { NAV_ITEMS, type NavItem } from "../../data/navigation";
import { MEDIA } from "../../styles/breakpoints";

// Hero 的 id。导航通过它判断"是否已经滚出 Hero"。每个页面的 Hero 都用这个 id。
const HERO_ID = "top";

// 滚动超过多少像素，从 top 变成 glass（在大标题碰到导航之前收起）
const COLLAPSE_AT = 100;

// 下拉菜单：展开延迟 / 收起延迟（毫秒）
const OPEN_DELAY = 100;
const CLOSE_DELAY = 200;

// 所有展开/收起动画共用的缓动曲线
const EASE_OUT = "cubic-bezier(0.22, 1, 0.36, 1)";

/* ---------- 组件 ---------- */
export default function Navigation() {
  const { pathname } = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false); // 滚动超过 COLLAPSE_AT
  const [isPastHero, setIsPastHero] = useState(false); // 已经滚出 Hero
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 手机菜单
  const [openIndex, setOpenIndex] = useState<number | null>(null); // 当前展开的下拉
  const [isEnglish, setIsEnglish] = useState(false);
  const brandTextRef = useRef<HTMLSpanElement>(null);
  const timerRef = useRef<number | undefined>(undefined);

  // 胶囊形状：glass 和 solid 都是；红色：只有 solid
  const isScrolled = isCollapsed || isPastHero;
  const isSolid = isPastHero;

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

  // 监听滚动距离：超过 COLLAPSE_AT 收成胶囊
  useEffect(() => {
    const update = () => setIsCollapsed(window.scrollY > COLLAPSE_AT);

    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, []);

  // 监听 Hero：Hero 离开屏幕顶部 90px 以内时，变成红色。换页后重新找新页面的 Hero。
  useEffect(() => {
    const hero = document.getElementById(HERO_ID);

    if (!hero) {
      return;
    }

    // 开始观察时会立刻回调一次，所以换页后状态会马上更新
    const observer = new IntersectionObserver(([entry]) => setIsPastHero(!entry.isIntersecting), {
      threshold: 0,
      rootMargin: "-90px 0px 0px 0px",
    });

    observer.observe(hero);

    return () => observer.disconnect();
  }, [pathname]);

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

  // 换页时关掉手机菜单和下拉（render 期间比较上一次的网址，React 推荐写法）
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsMenuOpen(false);
    setOpenIndex(null);
  }

  // 下拉：鼠标进入 → 延迟展开；已经有一个展开时，直接切换（面板不收起）
  const openDropdown = (index: number) => {
    window.clearTimeout(timerRef.current);

    if (openIndex !== null) {
      setOpenIndex(index);
      return;
    }

    timerRef.current = window.setTimeout(() => setOpenIndex(index), OPEN_DELAY);
  };

  // 下拉：鼠标离开 → 延迟收起
  const closeDropdown = () => {
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setOpenIndex(null), CLOSE_DELAY);
  };

  // 下拉：键盘焦点离开整个栏目（包括子项）时收起
  const handleBlur = (event: FocusEvent<HTMLLIElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      closeDropdown();
    }
  };

  // 点了任何链接：收起所有菜单
  const closeAll = () => {
    window.clearTimeout(timerRef.current);
    setOpenIndex(null);
    setIsMenuOpen(false);
  };

  // 点 Logo：回到首页顶部（已经在首页时，网址不变，所以手动滚回顶部）
  const handleBrandClick = () => {
    closeAll();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 当前所在栏目："/" 只匹配首页，其余按网址开头匹配
  const isActive = (item: NavItem) =>
    item.match === "/" ? pathname === "/" : pathname.startsWith(item.match);

  const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen);
  const toggleLanguage = () => setIsEnglish((english) => !english);

  return (
    <>
      {/* 跳到正文：平时藏在屏幕外，按 Tab 时出现 */}
      <SkipLink href="#main">跳转到内容</SkipLink>

      {/* 下拉展开时的暗色遮罩 */}
      <Dim aria-hidden="true" $isVisible={openIndex !== null} />

      <Header
        id="site-header"
        $isScrolled={isScrolled}
        onKeyDown={(event) => event.key === "Escape" && closeAll()}
      >
        <Nav aria-label="主导航" $isScrolled={isScrolled} $isSolid={isSolid}>
          {/* 左：Logo + BUCSSA */}
          <Brand
            href="/"
            aria-label="BUCSSA 首页"
            onClick={handleBrandClick}
            $isScrolled={isScrolled}
          >
            <BrandLogo src="/assets/logo.png" alt="" $isScrolled={isScrolled} />
            <BrandMask aria-hidden="true" $isScrolled={isScrolled}>
              <BrandText ref={brandTextRef} $isScrolled={isScrolled}>
                BUCSSA
              </BrandText>
            </BrandMask>
          </Brand>

          {/* 中：栏目 + 下拉 */}
          <NavLinks id="nav-links" $isScrolled={isScrolled} $isOpen={isMenuOpen}>
            {NAV_ITEMS.map((item, index) => (
              <NavEntry
                key={item.label}
                onMouseEnter={() => item.children && openDropdown(index)}
                onMouseLeave={closeDropdown}
                onFocus={() => item.children && setOpenIndex(index)}
                onBlur={handleBlur}
              >
                <NavLink
                  href={item.href}
                  onClick={closeAll}
                  aria-current={isActive(item) ? "page" : undefined}
                  $isScrolled={isScrolled}
                >
                  {item.label}
                  {item.children && <Caret aria-hidden="true">⌄</Caret>}
                </NavLink>

                {item.children && (
                  <Dropdown $isOpen={openIndex === index} $isSolid={isSolid}>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <DropdownLink href={child.href} onClick={closeAll} $isSolid={isSolid}>
                          {child.label}
                          <DropdownArrow aria-hidden="true">→</DropdownArrow>
                        </DropdownLink>
                      </li>
                    ))}
                  </Dropdown>
                )}
              </NavEntry>
            ))}
          </NavLinks>

          {/* 右：语言切换 + 手机菜单按钮 */}
          <NavActions>
            <LanguageSwitch
              type="button"
              onClick={toggleLanguage}
              aria-label="语言切换（演示）"
              $isScrolled={isScrolled}
              $isSolid={isSolid}
            >
              <LanguageOption $isActive={!isEnglish} $isScrolled={isScrolled} $isSolid={isSolid}>
                中
              </LanguageOption>
              <LanguageOption $isActive={isEnglish} $isScrolled={isScrolled} $isSolid={isSolid}>
                EN
              </LanguageOption>
            </LanguageSwitch>

            <MenuToggle
              type="button"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "关闭导航菜单" : "打开导航菜单"}
              aria-expanded={isMenuOpen}
              aria-controls="nav-links"
              $isSolid={isSolid}
            >
              <MenuBar $isSolid={isSolid} />
              <MenuBar $isSolid={isSolid} />
            </MenuToggle>
          </NavActions>
        </Nav>
      </Header>
    </>
  );
}

/* ---------- 样式 ---------- */

type ScrollProps = { $isScrolled: boolean }; // 胶囊形状（glass 或 solid）
type SolidProps = { $isSolid: boolean }; // 红色实体（solid）

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

// 下拉展开时的页面暗色遮罩（不挡点击，手机端不显示）
const Dim = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 40;
  background: rgba(0, 0, 0, 0.2);
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  pointer-events: none;
  transition: opacity 0.24s ${EASE_OUT};

  @media ${MEDIA.mobile} {
    display: none;
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

// 导航条：top 铺满透明；glass 收成深色玻璃胶囊；solid 变红
const Nav = styled.nav<ScrollProps & SolidProps>`
  position: relative;
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

  ${({ $isScrolled, $isSolid }) =>
    $isScrolled &&
    css`
      width: min(100%, 860px);
      max-width: 860px;
      padding: 10px 22px;
      border-radius: 100px;
      background: ${$isSolid ? "var(--color-brand)" : "rgba(var(--color-scrim), 0.38)"};
      box-shadow: ${
        $isSolid
          ? "0 15px 40px rgba(36, 13, 13, 0.22)"
          : "inset 0 0 0 1px rgba(255, 255, 255, 0.18), 0 15px 40px rgba(0, 0, 0, 0.18)"
      };
      backdrop-filter: blur(${$isSolid ? "18px" : "28px"});
      -webkit-backdrop-filter: blur(${$isSolid ? "18px" : "28px"});

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
const Brand = styled(SmartLink)<ScrollProps>`
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

/* -- NavLinks：栏目 + 下拉 -- */

// 滚动后链接之间的间距（所有屏幕尺寸都一样）
const SCROLLED_LINK_GAP = "clamp(10px, 1.3vw, 20px)";

// 栏目容器：桌面横排居中；手机端变成下拉菜单（$isOpen 控制显示）
const NavLinks = styled.ul<ScrollProps & { $isOpen: boolean }>`
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
    gap: 0;
    max-height: calc(100vh - 110px);
    overflow-y: auto;
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

// 一个栏目（包含它的下拉），下拉相对它定位
const NavEntry = styled.li`
  position: relative;
`;

// 栏目链接：Hover 时变淡；当前所在栏目下方有一条白色短横线
const NavLink = styled(SmartLink)<ScrollProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  font-size: clamp(12px, 1vw, 15px);
  font-weight: 600;
  letter-spacing: 0.06em;
  opacity: 0.94;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.6;
  }

  &[aria-current="page"]::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 18px;
    height: 2px;
    border-radius: 1px;
    background: currentColor;
    transform: translateX(-50%);
  }

  ${({ $isScrolled }) =>
    $isScrolled &&
    css`
      font-size: 12px;
    `}

  @media ${MEDIA.mobile} {
    display: flex;
    padding: 12px;
    font-size: 15px;

    &[aria-current="page"]::after {
      display: none;
    }
  }
`;

// 栏目旁的小箭头 ⌄（手机端不显示）
const Caret = styled.span`
  font-size: 0.8em;
  opacity: 0.8;
  transform: translateY(-2px);

  @media ${MEDIA.mobile} {
    display: none;
  }
`;

// 下拉面板：在栏目正下方居中；top/glass 深色玻璃，solid 红色
// 手机端：不浮动，直接列在栏目下面（缩进）
const Dropdown = styled.ul<SolidProps & { $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 22px);
  left: 50%;
  display: grid;
  min-width: 220px;
  padding: 10px;
  border-radius: 20px;
  background: ${({ $isSolid }) => ($isSolid ? "var(--color-brand)" : "rgba(var(--color-scrim), 0.5)")};
  box-shadow: ${({ $isSolid }) =>
    $isSolid
      ? "0 18px 40px rgba(36, 13, 13, 0.25)"
      : "inset 0 0 0 1px rgba(255, 255, 255, 0.18), 0 18px 40px rgba(0, 0, 0, 0.2)"};
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transform: translate(-50%, ${({ $isOpen }) => ($isOpen ? "0" : "-8px")});
  transition:
    opacity 0.24s ${EASE_OUT},
    transform 0.24s ${EASE_OUT},
    visibility 0.24s;

  /* 面板和栏目之间的空隙也算在 hover 范围内，鼠标移过去不会收起 */
  &::before {
    content: "";
    position: absolute;
    top: -22px;
    right: 0;
    left: 0;
    height: 22px;
  }

  @media ${MEDIA.mobile} {
    position: static;
    min-width: 0;
    padding: 0 0 8px 12px;
    background: none;
    box-shadow: none;
    backdrop-filter: none;
    opacity: 1;
    visibility: visible;
    transform: none;
  }
`;

// 下拉子项：hover 时整行铺满色块，右侧出现 →
const DropdownLink = styled(SmartLink)<SolidProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 11px 14px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  transition:
    background-color 0.2s,
    transform 0.1s;

  &:hover,
  &:focus-visible {
    outline: none;
    background: ${({ $isSolid }) =>
      $isSolid ? "var(--color-brand-dark)" : "rgba(255, 255, 255, 0.16)"};
  }

  &:active {
    transform: scale(0.98);
  }

  @media ${MEDIA.mobile} {
    padding: 8px 12px;
    font-size: 14px;
    opacity: 0.85;
  }
`;

// 子项右侧箭头：hover 时才出现
const DropdownArrow = styled.span`
  opacity: 0;
  transition: opacity 0.2s;

  a:hover > &,
  a:focus-visible > & {
    opacity: 1;
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

// 语言切换：top / glass 是半透明玻璃胶囊；solid（红色胶囊）上变成米色底、红字
const LanguageSwitch = styled.button<ScrollProps & SolidProps>`
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
      font-size: 12px;
    `}

  ${({ $isSolid }) =>
    $isSolid &&
    css`
      border-color: transparent;
      background: var(--color-bg-body);
      box-shadow: 0 3px 8px rgba(44, 20, 20, 0.22);
      color: var(--color-brand);
    `}
`;

// "中" / "EN" 选项：当前语言有浅色底，另一个半透明
const LanguageOption = styled.span<ScrollProps & SolidProps & { $isActive: boolean }>`
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

  ${({ $isActive, $isSolid }) =>
    $isActive &&
    css`
      background: ${$isSolid ? "rgba(178, 77, 77, 0.1)" : "rgba(255, 255, 255, 0.23)"};
    `}
`;

// 汉堡按钮：只在手机端显示。打开时两条横线转成 ×
const MenuToggle = styled.button<SolidProps>`
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

  /* 不是红色胶囊时：和语言切换一样的玻璃效果 */
  ${({ $isSolid }) =>
    !$isSolid &&
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

// 汉堡按钮里的横线：玻璃状态是白色，红色胶囊上是红色
const MenuBar = styled.span<SolidProps>`
  display: block;
  width: 17px;
  height: 2px;
  margin: 2px 0;
  border-radius: 2px;
  background: ${({ $isSolid }) => ($isSolid ? "var(--color-brand)" : "var(--color-text-inverse)")};
  transition:
    transform 0.25s ease,
    opacity 0.25s ease;
`;
