import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Libre_Baskerville, Poppins } from '@next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic']
})

const libre = Libre_Baskerville({
  subsets: ['latin'],
  variable: '--libre',
  weight: ['400', '700'],
  style: ['normal', 'italic']
})
export default function App({ Component, pageProps }: AppProps) {
  return (<div className={`${poppins.variable} ${libre.variable}`}>
  <Component {...pageProps} />
</div>)
}
