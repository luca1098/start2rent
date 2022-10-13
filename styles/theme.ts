import { DefaultTheme } from "styled-components"

const breakpoint = {
  sm : '450px',
  md : '768px',
  xMd : '1024px',
  lg : '1200px',
}

//layout
const LAYOUT_WIDTH = '70%'
const MEDIUM_LAYOUT_WIDTH = '85%'
const SMALL_LAYOUT_WIDTH = '90%'

//color
const PRIMARY_TITLE = '#1D1F2F'
const PRIMARY_TEXT = '#4C4C4C'
const SECONDARY_TEXT = '#f1f1f1'
const SECONDARY_TITLE = '#fff'
const BACKGROUND = '#EFEFEF'
const BACKGROUND_BASE = '#FDFDFD'
const BACKGROUND_SECONDARY = '#618974' 
const BORDER_COLOR = '#1D1F2F'

//button
const PRIMARY_BTN_TEXT = '#FFF';
const PRIMARY_BTN_BG = '#7f00ff';
const PRIMARY_BTN_BG_HOVER = '#561899';

const DETTAILS_PRIMARY = '#c9f767'

const BORDER_RADIUS_BTN = '10px'

const SECONDARY_SHADOW = 'rgba(51,102,71,.5)'

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
    radius:BORDER_RADIUS_BTN
  },
  details: {
    primary:DETTAILS_PRIMARY,
  },
  background: {
    primary:BACKGROUND,
    base:BACKGROUND_BASE,
    secondary:BACKGROUND_SECONDARY,
  },
  color: {
    title: {
      primary: PRIMARY_TITLE,
      secondary: SECONDARY_TITLE,
    },
    text: {
      primary: PRIMARY_TEXT,
      secondary: SECONDARY_TEXT,
    },
  },
  size: {
    text: {
      sm:'1rem',
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
      text: PRIMARY_BTN_TEXT,
      background:PRIMARY_BTN_BG,
      textHover: PRIMARY_BTN_TEXT,
      backgroundHover:PRIMARY_BTN_BG_HOVER,
    },
    secondary: {
      text: '#1c1c1c',
      background:'#EB60C6',
      textHover: '#1c1c1c',
      backgroundHover:'#E2A5F5',
    },
  },
  shadow: {
    navbar :'0px 0px 20px rgba(0, 0, 0, .2);',
    secondary: `5px 5px 15px ${SECONDARY_SHADOW}`,
  }
}
const darkTheme = {}


export {
  baseTheme,
  lightTheme,
  darkTheme,
  breakpoint
}