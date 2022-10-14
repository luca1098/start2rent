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
      <meta name="author" content="Luca La Marca" />
      <meta name="copyright" content="start2rent management" />
      <meta name="dc.language" content="ita" />
      <meta name="description" content="Esperti nella gestione degli affitti brevi" />
      <title>Start2Rent | Esperti nella gestione degli affitti brevi</title>
    </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
    )
}

export default MyApp
