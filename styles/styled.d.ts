// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    layout: {
      width:string,
      widthMedium:string,
      widthSmall:string,
    },
    transition:{
      default: string
    },
    border:{
      color:string,
      radius:string
    },
    details: {
      primary:string,
    },
    background: {
      primary:string,
      base:string,
      secondary:string,
    },
    color: {
      title: {
        primary: string,
        secondary: string,
      },
      text: {
        primary: string,
        secondary: string,
      },
    },
    size: {
      text: {
        sm:string,
        md: string,
        lg:string
      }
    }
  }
}