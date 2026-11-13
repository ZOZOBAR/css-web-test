import { useEffect, useRef, useState } from "react";

// PROTECTED: Navigation DOM classes and visual behavior are intentionally preserved.
function Navigation() {
  const headerRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [english, setEnglish] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    const hero = document.querySelector<HTMLElement>(".hero");

    if (!header || !hero) {
      return;
    }

    const brandText = header.querySelector<HTMLElement>(".brand-text");

    const measureExpandedBrand = () => {
      // A scrolled brand uses a smaller font. Measuring then would save that
      // smaller width and clip letters after the brand expands on the Hero.
      if (!brandText || header.classList.contains("is-scrolled")) {
        return;
      }

      document.documentElement.style.setProperty(
        "--brand-text-w",
        `${Math.ceil(brandText.getBoundingClientRect().width)}px`,
      );
    };

    measureExpandedBrand();
    window.addEventListener("resize", measureExpandedBrand);
    void document.fonts?.ready.then(measureExpandedBrand);

    const observer = new IntersectionObserver(
      ([entry]) => {
        header.classList.toggle("is-scrolled", !entry.isIntersecting);

        if (entry.isIntersecting) {
          requestAnimationFrame(measureExpandedBrand);
        }
      },
      { threshold: 0, rootMargin: "-90px 0px 0px 0px" },
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measureExpandedBrand);
    };
  }, []);

  useEffect(() => {
    linksRef.current?.classList.toggle("open", menuOpen);
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((isOpen) => !isOpen);
  const closeMenu = () => setMenuOpen(false);
  const toggleLanguage = () => setEnglish((isEnglish) => !isEnglish);

  return (
    <>
      <a className="skip" href="#main">跳转到内容</a>
      <header className="site-header" id="site-header" ref={headerRef}>
        <nav className="navigation" aria-label="主导航">
          <a className="brand" href="#top" aria-label="BUCSSA 返回顶部">
            <img src="/assets/logo.png" alt="" />
            <span className="brand-mask" aria-hidden="true">
              <span className="brand-text">BUCSSA</span>
            </span>
          </a>
          <div className="nav-links" id="nav-links" ref={linksRef}>
            <a href="#top" onClick={closeMenu}>主页</a>
            <a href="#events" onClick={closeMenu}>活动</a>
            <a href="#resources" onClick={closeMenu}>资源</a>
            <a href="#about" onClick={closeMenu}>关于我们</a>
            <a href="#partners" onClick={closeMenu}>合作</a>
          </div>
          <div className="nav-actions">
            <button className="language-switch" onClick={toggleLanguage} type="button" aria-label="语言切换（演示）">
              <span className={english ? "" : "active"}>中</span>
              <span className={english ? "active" : ""}>EN</span>
            </button>
            <button className="menu-toggle" onClick={toggleMenu} type="button" aria-label={menuOpen ? "关闭导航菜单" : "打开导航菜单"} aria-expanded={menuOpen} aria-controls="nav-links">
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navigation;
