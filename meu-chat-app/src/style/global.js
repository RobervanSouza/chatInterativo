import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  body {
    width: 100vw;
    height: 100vh;
    font-family: 'Courier New', Courier, monospace;
  }
`
export default GlobalStyles;