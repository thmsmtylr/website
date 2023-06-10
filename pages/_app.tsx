import React, { useEffect } from "react";
import * as gtag from "../lib/gtag";
import dynamic from "next/dynamic";
import Script from "next/script";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => gtag.pageview(url);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
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
      <Analytics />
      <Component {...pageProps} />
    </>
  );
};

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
