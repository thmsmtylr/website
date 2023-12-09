import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer } from "../components";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-screen h-screen flex flex-col items-center justify-center relative dark:bg-gradient-to-r dark:from-rose-400 dark:via-fuchsia-500 dark:to-indigo-500">
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
