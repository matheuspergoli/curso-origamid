import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
  }

  body {
    padding: 0 40px;
  }
`
