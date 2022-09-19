import { DefaultTheme } from "styled-components"

const breakpoint = {
  sm : '450px',
  md : '768px',
  lg : '1100px',
}

//layout
const LAYOUT_WIDTH = '70%'
const MEDIUM_LAYOUT_WIDTH = '85%'
const SMALL_LAYOUT_WIDTH = '90%'

//color
const PRIMARY_TITLE = '#1C1C1C'
const PRIMARY_TEXT = '#4C4C4C'
const BACKGROUND = '#f0f0f0'
const BORDER_COLOR = '#1C1C1C'

//button

const BORDER_RADIUS_BTN = '7px'

const baseTheme:DefaultTheme = {
  layout: {
    width:LAYOUT_WIDTH,
    widthMedium:MEDIUM_LAYOUT_WIDTH,
    widthSmall:SMALL_LAYOUT_WIDTH,
  },
  transition:{
    default: 'all .3s ease-in-out'
  },
  border:{
    color:BORDER_COLOR,
  },
  background: {
    primary:BACKGROUND,
    secondary:BACKGROUND,
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

const lightTheme = {
  button:{
    border:{
      radius:BORDER_RADIUS_BTN,
    },
    primary: {
      text: '#1c1c1c',
      background:'#6860EB',
      textHover: '#1c1c1c',
      backgroundHover:'#8596EB',
    },
    secondary: {
      text: '#1c1c1c',
      background:'#EB60C6',
      textHover: '#1c1c1c',
      backgroundHover:'#E2A5F5',
    },
  }
}
const darkTheme = {}


export {
  baseTheme,
  lightTheme,
  darkTheme,
  breakpoint
}