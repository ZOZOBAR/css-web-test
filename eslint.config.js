/* ==========================================================
 * ESLint 配置：检查代码里的错误和不规范写法
 *
 * 运行：npm run lint
 *
 * 规则来源：
 *   @eslint/js            JavaScript 推荐规则
 *   typescript-eslint     TypeScript 推荐规则
 *   react-hooks           Hooks 使用规则（useEffect 依赖等）
 *   react-refresh         保证开发时热更新正常
 *   eslint-config-prettier 关掉和 Prettier 冲突的格式规则（格式交给 Prettier）
 * ========================================================== */
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  // 不检查的文件夹
  { ignores: ["dist", "node_modules"] },

  // src 里的 TS / TSX 文件
  {
    files: ["src/**/*.{ts,tsx}"],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },

  // 放在最后：关掉所有和 Prettier 冲突的规则
  prettier,
);
