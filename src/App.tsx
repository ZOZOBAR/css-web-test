/* ==========================================================
 * App · 网站外壳
 *
 * 每个页面都长这样：
 *   GlobalStyles   全局样式（只加载一次）
 *   Navigation     顶部导航（全站共用）
 *   main           页面内容（目前只有首页）
 *   Footer         页脚（全站共用）
 *
 * 以后加其他页面（活动、新生手册等）时，在 main 里切换页面即可。
 * ========================================================== */
import { GlobalStyles } from "./styles/GlobalStyles";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Navigation />

      {/* id="main"：导航里的"跳转到内容"链接会跳到这里 */}
      <main id="main">
        <HomePage />
      </main>

      <Footer />
    </>
  );
}
