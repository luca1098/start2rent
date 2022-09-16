import { baseTheme, darkTheme, lightTheme } from "./theme"

export const LIGHT = 'LIGHT'
export const DARK = 'DARK'

const themeGetter = (mode:string) => {
  const theme = mode === LIGHT ? lightTheme : darkTheme
  return {...baseTheme, ...theme}
}

export default themeGetter