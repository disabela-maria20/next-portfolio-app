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
        <meta name="google-site-verification" content="qP1L-UbCctnjg6IZnNsVLmJyezYj3hrsBnuQZD6aREE" />      </Head>
      <body className='overflow-x-hidden'>
        <Main />
        <NextScript />
        <Script strategy="lazyOnload" src={`https://www.google.com/recaptcha/api.js?render=${process.env.KEY_RECAPTCHA}`} />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RRHGHE8313"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RRHGHE8313', { page_path: window.location.pathname });
            `,
          }}
        />
        <script src="https://cdn.amplitude.com/libs/analytics-browser-2.11.1-min.js.gz"></script>
        <script src="https://cdn.amplitude.com/libs/plugin-session-replay-browser-1.8.0-min.js.gz"></script>
        <script dangerouslySetInnerHTML={{
          __html: `>window.amplitude.add(window.sessionReplay.plugin({sampleRate: 1}));window.amplitude.init('4ec98ef378f4709ed9e1ef0f48e3ec47', {"autocapture":{"elementInteractions":true}});
            `,
        }} />
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
             !function(){"use strict";!function(e,t){var r=e.amplitude||{_q:[],_iq:{ }};if(r.invoked)e.console&&console.error&&console.error("Amplitude snippet has been loaded.");else{var n=function(e,t){e.prototype[t] = function () { return this._q.push({ name: t, args: Array.prototype.slice.call(arguments, 0) }), this }},s=function(e,t,r){return function(n){e._q.push({ name: t, args: Array.prototype.slice.call(r, 0), resolve: n })}},o=function(e,t,r){e[t] = function () { if (r) return { promise: new Promise(s(e, t, Array.prototype.slice.call(arguments))) } }},i=function(e){for(var t=0;t<m.length;t++)o(e,m[t],!1);for(var r=0;r<y.length;r++)o(e,y[r],!0)};r.invoked=!0;var a=t.createElement("script");a.type="text/javascript",a.crossOrigin="anonymous",a.src="https://cdn.amplitude.com/libs/plugin-ga-events-forwarder-browser-0.4.2-min.js.gz",a.onload=function(){e.gaEventsForwarder && e.gaEventsForwarder.plugin && e.amplitude.add(e.gaEventsForwarder.plugin())};var c=t.createElement("script");c.type="text/javascript",c.integrity="sha384-pY2pkwHaLM/6UIseFHVU3hOKr6oAvhLcdYkoRZyaMDWLjpM6B7nTxtOdE823WAOQ",c.crossOrigin="anonymous",c.async=!0,c.src="https://cdn.amplitude.com/libs/analytics-browser-2.11.0-min.js.gz",c.onload=function(){e.amplitude.runQueuedFunctions || console.log("[Amplitude] Error: could not load SDK")};var u=t.getElementsByTagName("script")[0];u.parentNode.insertBefore(a,u),u.parentNode.insertBefore(c,u);for(var p=function(){return this._q=[],this},d=["add","append","clearAll","prepend","set","setOnce","unset","preInsert","postInsert","remove","getUserProperties"],l=0;l<d.length;l++)n(p,d[l]);r.Identify=p;for(var g=function(){return this._q=[],this},v=["getEventProperties","setProductId","setQuantity","setPrice","setRevenue","setRevenueType","setEventProperties"],f=0;f<v.length;f++)n(g,v[f]);r.Revenue=g;var m=["getDeviceId","setDeviceId","getSessionId","setSessionId","getUserId","setUserId","setOptOut","setTransport","reset","extendSession"],y=["init","add","remove","track","logEvent","identify","groupIdentify","setGroup","revenue","flush"];i(r),r.createInstance=function(e){return r._iq[e]={_q:[]},i(r._iq[e]),r._iq[e]},e.amplitude=r}}(window,document)}();

          amplitude.init('4ec98ef378f4709ed9e1ef0f48e3ec47');
          `}}>

        </script>
      </body>
    </Html >
  )
}
