import type { NextPage } from "next";
import Head from "next/head";
import { Card } from "../components/card";
import { Footer } from "../components/Footer";
import { SpotifyCurrentlyPlaying } from "../components/SpotifyCurrentlyPlaying";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Thomas Taylor</title>
        <meta
          name="description"
          content="Father. Senior Software Consultant @teamalembic. Founder @sorrycompany."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SpotifyCurrentlyPlaying />
      <main className="w-screen h-screen flex flex-col items-center justify-center relative dark:bg-gradient-to-r dark:from-rose-400 dark:via-fuchsia-500 dark:to-indigo-500">
        <Card />
      </main>
      <Footer />
    </>
  );
};

export default Home;
