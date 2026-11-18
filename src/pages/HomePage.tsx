/* ==========================================================
 * Page · 首页
 *
 * 首页由 6 个 section 从上到下组成（导航和页脚在 App.tsx 里，全站共用）：
 *   01 Hero        首屏大图
 *   02 About       关于我们
 *   03 Events      精选活动
 *   04 Community   社群瞬间
 *   05 Resources   学生资源 & 加入我们
 *   06 Partners    合作伙伴
 *
 * 调整顺序或增删 section，只改这个文件。
 * ========================================================== */
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import EventsSection from "../components/home/EventsSection";
import CommunitySection from "../components/home/CommunitySection";
import ResourcesSection from "../components/home/ResourcesSection";
import PartnersSection from "../components/home/PartnersSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <CommunitySection />
      <ResourcesSection />
      <PartnersSection />
    </>
  );
}
