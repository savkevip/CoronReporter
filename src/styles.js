import { createGlobalStyle } from "styled-components";
import { colors } from "./utils/colors";

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth !important;
    height: 100% !important;
  }
  body {
    margin: 0 auto !important;
    padding: 0 !important;
    max-width: 1440px;
    font-family: 'Roboto', sans-serif !important;
    background-color: ${colors.main};
    color: ${colors.font};
  }
`;
