import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/GlobalStyles'
import themeGetter, { LIGHT } from '../styles/themeGetter'

function MyApp({ Component, pageProps }: AppProps) {
  let mode = LIGHT // todo
  const theme = themeGetter(mode)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
    )
}

export default MyApp
