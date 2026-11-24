/* ==========================================================
 * 入口文件：把 App 挂到 index.html 的 <div id="root"> 上
 *
 * BrowserRouter：让网站支持 /events、/about 这样的网址。
 * 部署在 Vercel 时，vercel.json 会把所有网址都交给 index.html，
 * 所以直接打开 /about 也不会 404。
 * ========================================================== */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
