/* ==========================================================
 * 入口文件：把 App 挂到 index.html 的 <div id="root"> 上
 * ========================================================== */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
