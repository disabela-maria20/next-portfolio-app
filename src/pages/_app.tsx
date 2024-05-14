import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from "next/router";
import { Libre_Baskerville, Poppins } from "next/font/google"
import { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners';
import React from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: "block"
})

const libre = Libre_Baskerville({
  subsets: ['latin'],
  variable: '--libre',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: "block"
})
export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter()
  React.useEffect(() => {
    const start = () => {
      console.log("começou");
      setLoading(true);
    };

    const end = () => {
      setLoading(false);
      console.log("terminou");
    };

    router.events.on("routeChangeStart", start)
    router.events.on("routeChangeComplete", end)
    router.events.on("routeChangeError", end)

    return () => {
      router.events.off("routeChangeStart", start)
      router.events.off("routeChangeComplete", end)
      router.events.off("routeChangeError", end)
    };
  }, [router])
  return (
    <>
      {loading ? (
        <p>Carrecango...</p>
      ) : (
        <div className={`${poppins.variable} ${libre.variable}`}>
          <Component {...pageProps} />
        </div>
      )}

    </>

  )
}
