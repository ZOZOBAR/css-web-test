/* ==========================================================
 * Page · CSSA 荣誉墙（/about/honor-wall）
 *
 * 从上到下：
 *   01 Hero    波士顿横幅 + 「Honor Wall / CSSA 荣誉墙」
 *   02 Board   学年切换 → 主席团 → 7 个部门负责人
 *
 * 入口：关于我们页的荣誉墙预览、导航「关于我们 → 荣誉墙」、页脚
 * 设计：Figma「HI-FI · 子页面」E · 荣誉墙
 * ========================================================== */
import PageHero from "../components/common/PageHero";
import HonorBoard from "../components/honor/HonorBoard";

export default function HonorWallPage() {
  return (
    <>
      <PageHero image="/assets/shared/boston.webp" eyebrow="Honor Wall" title="CSSA 荣誉墙" />
      <HonorBoard />
    </>
  );
}
