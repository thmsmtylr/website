import React, { useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import { SpotifyCurrentlyPlayingData } from "../pages/api/spotify";

export const SpotifyCurrentlyPlaying = () => {
  const [hide, setHide] = useState<boolean>(false);
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR<SpotifyCurrentlyPlayingData>("/api/spotify", fetcher);

  if (!data?.isPlaying) return null;
  if (hide) return null;

  return (
    <div className="absolute sm:right-4 sm:top-4 right-0 top-0 w-full dark:bg-black/90 bg-white min-w-[320px] rounded-xl shadow-lg p-4 flex z-10 items-center">
      <a
        className="inline-flex dark:text-white text-xs hover:text-fuchsia-500 transition-colors mr-4"
        href={data.songUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`${data.title} - ${data.artist}`}
      >
        <Image
          width={32}
          height={32}
          src={data.albumImageUrl}
          alt={data.title}
          className="rounded-md"
        />
        <div className="pl-4 flex flex-col text-ellipsis overflow-hidden">
          <p>{data.title}</p>
          <p>{data.artist}</p>
        </div>
      </a>
      <button
        onClick={() => setHide(true)}
        className="dark:text-gray-400 transition-colors dark:hover:text-white hover:text-fuchsia-500 ml-auto text-xs font-medium"
      >
        Close
      </button>
    </div>
  );
};
