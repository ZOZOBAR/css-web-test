// ========================================
// 1. DOM Elements
// ========================================

const header = document.querySelector('#site-header');
const hero = document.querySelector('.hero');
const links = document.querySelector('#nav-links');
const menu = document.querySelector('.menu-toggle');
const languageSwitch = document.querySelector('.language-switch');

// NEW: Brand Morph
const brandText = header.querySelector('.brand-text');


// ========================================
// 2. Brand Morph Measurement
// ========================================

// Measure the full width of BUCSSA text.
// CSS uses this value to animate the mask from full width to zero.

function measureBrandText() {
  if (!brandText) return;

  const width = Math.ceil(brandText.getBoundingClientRect().width);

  document.documentElement.style.setProperty(
    '--brand-text-w',
    `${width}px`
  );
}

// Initial measurement
measureBrandText();

// Recalculate when the viewport changes
window.addEventListener('resize', measureBrandText);

// Recalculate after fonts finish loading
if (document.fonts) {
  document.fonts.ready.then(measureBrandText);
}


// ========================================
// 3. Navigation Scroll State
// ========================================

// Keep the original IntersectionObserver.
// Switch to floating navigation when the Hero leaves the viewport.

const observer = new IntersectionObserver(
  ([entry]) => {
    header.classList.toggle('is-scrolled', !entry.isIntersecting);
  },
  {
    threshold: 0,
    rootMargin: '-90px 0px 0px 0px',
  }
);

observer.observe(hero);


// ========================================
// 4. Mobile Navigation Menu
// ========================================

// Open or close the mobile navigation menu.

menu.addEventListener('click', () => {
  const opened = links.classList.toggle('open');

  menu.setAttribute('aria-expanded', String(opened));

  menu.setAttribute(
    'aria-label',
    opened ? '关闭导航菜单' : '打开导航菜单'
  );
});


// Close the mobile menu after selecting a navigation link.

links.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    links.classList.remove('open');

    menu.setAttribute('aria-expanded', 'false');
  });
});


// ========================================
// 5. Language Switch (Demo Only)
// ========================================

// Toggle the visual active state.
// Actual language translation is not implemented yet.

languageSwitch.addEventListener('click', (event) => {
  const spans = [...event.currentTarget.querySelectorAll('span')];

  spans.forEach((span) => {
    span.classList.toggle('active');
  });
});