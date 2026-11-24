/* ==========================================================
 * App · 网站外壳 + 路由
 *
 * 每个页面都长这样：
 *   GlobalStyles   全局样式（只加载一次）
 *   ScrollManager  换页时回到顶部；网址带 #xxx 时滚到对应位置
 *   Navigation     顶部导航（全站共用）
 *   main           当前页面（由下面的路由表决定）
 *   Footer         页脚（全站共用）
 *
 * 加新页面：在 pages/ 新建页面文件，然后在 ROUTES 里加一行。
 * 网址和原网站的对应关系见 README「页面与网址」。
 * ========================================================== */
import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import ScrollManager from "./components/layout/ScrollManager";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import AboutPage from "./pages/AboutPage";
import DepartmentPage from "./pages/DepartmentPage";
import HonorWallPage from "./pages/HonorWallPage";
import ContactPage from "./pages/ContactPage";
import HandbookPage from "./pages/HandbookPage";
import NotFoundPage from "./pages/NotFoundPage";

/* ---------- 路由表 ---------- */
// path 里的 :slug / :dept 是"变量"，对应 data/ 里每个活动、每个部门的 slug
const ROUTES = [
  { path: "/", element: <HomePage /> },
  { path: "/events", element: <EventsPage /> },
  { path: "/events/:slug", element: <EventDetailPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/about/honor-wall", element: <HonorWallPage /> },
  { path: "/about/:dept", element: <DepartmentPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/handbook", element: <HandbookPage /> },
  { path: "*", element: <NotFoundPage /> },
];

/* ---------- 组件 ---------- */
export default function App() {
  return (
    <>
      <GlobalStyles />
      <ScrollManager />
      <Navigation />

      {/* id="main"：导航里的"跳转到内容"链接会跳到这里 */}
      <main id="main">
        <Routes>
          {ROUTES.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>

      <Footer />
    </>
  );
}
