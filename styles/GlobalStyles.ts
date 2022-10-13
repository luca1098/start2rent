import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Rubik';
    src: url('./fonts/Rubik/static/Rubik-SemiBold.ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Karla';
    src: url('./fonts/Karla/static/Karla-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }
  *{
    box-sizing: border-box;
  }
  html{
    scroll-behavior: smooth;
  }
  html, body, textarea, a, li {
    padding:0;
    margin:0;
    font-family: Karla, sans-serif;
  }
  ul{
    padding:0 0 0 1rem;
    margin:0;
  }
  h1, h2, h3, h4, h5, h6{
    font-family: Rubik, sans-serif;
  }
  a{
    color: ${({theme}) => theme.background.secondary} ;
  }
  .ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position:relative;
    top: 0;
  }
  .hamRotate.active {
    transform: rotate(45deg);
  }
  .hamRotate180.active {
    transform: rotate(180deg);
  }
  .line {
    fill:none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke:#000;
    stroke-width:5.5;
    stroke-linecap:round;
  }
  .ham1 .top {
    stroke-dasharray: 40 139;
  }
  .ham1 .bottom {
    stroke-dasharray: 40 180;
  }
  .ham1.active .top {
    stroke-dashoffset: -98px;
  }
  .ham1.active .bottom {
    stroke-dashoffset: -138px;
  }

`

export default GlobalStyle