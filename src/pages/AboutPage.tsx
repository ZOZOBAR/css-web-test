/* ==========================================================
 * Page · 关于我们（/about）
 *
 * 从上到下：
 *   01 Hero           波士顿横幅 + 「About CSSA / 关于我们」
 *   02 Intro          SINCE 1994 + 组织介绍 + 合照
 *   03 Departments    8 个部门卡片（点进部门详情）
 *   04 Honor Preview  荣誉墙预览（当届主席团）
 *
 * 设计：Figma「HI-FI · 子页面」C · 关于我们
 * ========================================================== */
import PageHero from "../components/common/PageHero";
import AboutIntro from "../components/about/AboutIntro";
import DepartmentGrid from "../components/about/DepartmentGrid";
import HonorPreview from "../components/about/HonorPreview";
import { ABOUT_HERO } from "../data/aboutPage";

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/assets/shared/boston.webp"
        eyebrow={ABOUT_HERO.eyebrow}
        title={ABOUT_HERO.title}
      />
      <AboutIntro />
      <DepartmentGrid />
      <HonorPreview />
    </>
  );
}
