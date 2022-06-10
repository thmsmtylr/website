import React, { useState } from "react";
import useSWR from "swr";

export interface SpotifyCurrentlyPlayingData {
  isPlaying: boolean;
  title: string;
  album: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
}

export const SpotifyCurrentlyPlaying = () => {
  const [hide, setHide] = useState<boolean>(false);
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR<SpotifyCurrentlyPlayingData>("/api/spotify", fetcher);

  if (!data?.isPlaying) return null;
  if (hide) return null;

  return (
    <div className="absolute right-4 top-4 dark:bg-black/90 min-w-[320px] rounded-xl shadow-lg p-4 flex z-10 items-center">
      <a
        className="inline-flex dark:text-white text-xs dark:hover:text-fuchsia-500 transition-colors mr-4"
        href={data.songUrl}
        target="_blank"
        rel="noreferrer"
      >
        <div className="w-8 h-8 flex-shrink-0 mr-4">
          <img
            className="bg-cover rounded"
            src={data.albumImageUrl}
            alt={data.title}
          />
        </div>
        <div className="flex flex-col text-ellipsis overflow-hidden">
          <p>{data.title}</p>
          <p>{data.artist}</p>
        </div>
      </a>
      <button
        onClick={() => setHide(true)}
        className="dark:text-gray-400 transition-colors dark:hover:text-white ml-auto text-xs font-medium"
      >
        Close
      </button>
    </div>
  );
};
