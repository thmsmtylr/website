import type { NextPage } from "next";
import Head from "next/head";
import {
  Annoucement,
  Card,
  Footer,
  SpotifyCurrentlyPlaying,
  SocialLinks,
} from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Thomas Taylor</title>
        <meta name="description" content="UI Engineer @swell." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Annoucement /> */}
      <SpotifyCurrentlyPlaying />
      <main className="w-screen h-screen flex flex-col items-center justify-center relative dark:bg-gradient-to-r dark:from-rose-400 dark:via-fuchsia-500 dark:to-indigo-500">
        <div className="dark:hidden absolute inset-0 blur-[130px] opacity-20 overflow-hidden -z-10">
          <div className="absolute left-1/4 top-2/3 w-96 h-96 rounded-full bg-indigo-500 z-10" />
          <div className="absolute right-0 top-0 h-[50rem] w-[50rem] rounded-full bg-fuchsia-500" />
          <div className="absolute left-0 -top-1/4 w-[46rem] h-[46rem] rounded-full bg-rose-400" />
        </div>
        <Card />
        <SocialLinks />
      </main>
      <Footer />
    </>
  );
};

export default Home;
