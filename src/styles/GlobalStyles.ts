import { createGlobalStyle } from "styled-components";
import legacyCss from "./legacy.css?raw";

// Keep original visual rules intact during migration.
export const GlobalStyles = createGlobalStyle`${legacyCss}`;
