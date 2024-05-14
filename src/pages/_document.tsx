/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="icone.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#18181b" />
        <meta name="google-site-verification" content="9yDUiUIZk_H1FxZuq40dEuRvJwfYp-7jm8lQ_o-0mgA" />
      </Head>
      <body className='overflow-x-hidden'>
        <Main />
        <NextScript />
        <Script strategy="lazyOnload" src={`https://www.google.com/recaptcha/api.js?render=${process.env.KEY_RECAPTCHA}`} />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y370T3RYFS"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y370T3RYFS', { page_path: window.location.pathname });
            `,
          }}
        />
      </body>
    </Html>
  )
}
