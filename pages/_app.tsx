import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/GlobalStyles'
import themeGetter, { LIGHT } from '../styles/themeGetter'

function MyApp({ Component, pageProps }: AppProps) {
  let mode = LIGHT 
  const theme = themeGetter(mode)
  return (
    <>
    <Head>
      <link rel='shortcut icon' href='/img/logonoscritta.png' />
    </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
    )
}

export default MyApp
