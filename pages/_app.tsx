import * as React from "react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Script from "next/script";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
    />
    <Script
      id="gtag-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
          page_path: window.location.pathname,
        });
      `,
      }}
    />
    <Component {...pageProps} />
  </>
);

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
