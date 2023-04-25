/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script strategy="lazyOnload" src={`https://www.google.com/recaptcha/api.js?render=${process.env.KEY_RECAPTCHA}`} />
      </body>
    </Html>
  )
}
