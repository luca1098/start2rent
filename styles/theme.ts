import { DefaultTheme } from "styled-components"

const breakpoint = {
  sm : '450px',
  md : '768px',
  lg : '1100px',
}

//layout
const LAYOUT_WIDTH = '70%'

//color
const PRIMARY_TITLE = '#1C1C1C'
const PRIMARY_TEXT = '#4C4C4C'
const BACKGROUND = '#f0f0f0'

const baseTheme:DefaultTheme = {
  layout: {
    width:LAYOUT_WIDTH
  },
  transition:{
    default: 'all .3s ease-in-out'
  },
  background: {
    primary:BACKGROUND
  },
  color: {
    title: {
      primary: PRIMARY_TITLE
    },
    text: {
      primary: PRIMARY_TEXT
    },
  },
  size: {
    text: {
      sm:'.8rem',
      md: '1.3rem',
      lg:'1.6rem'
    }
  }
}

const lightTheme = {}
const darkTheme = {}


export {
  baseTheme,
  lightTheme,
  darkTheme,
  breakpoint
}