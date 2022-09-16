import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  html, body {
    padding:0;
    margin:0;
    font-family: sans-serif
  }
  ul{
    padding:0;
    margin:0;
  }
  li{
    list-style:none;
  }
`

export default GlobalStyle