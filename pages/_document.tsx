import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="w-screen h-screen flex flex-col relative dark:bg-dracula-bg bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
