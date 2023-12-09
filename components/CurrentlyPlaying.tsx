"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface CurrentlyPlayingData {
  isPlaying: boolean;
  title: string;
  album: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
}

export const CurrentlyPlaying = () => {
  const [hide, setHide] = useState<boolean>(false);
  const [data, setData] = useState<CurrentlyPlayingData | null>(null);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const fetchData = () => {
      fetch("/spotify")
        .then((r) => r.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error fetching data:", error));
    };

    const startFetching = () => {
      fetchData();
      intervalId = setInterval(fetchData, 60000);
    };

    const stopFetching = () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };

    // Start fetching when the window gains focus
    window.onfocus = startFetching;

    // Stop fetching when the window loses focus
    window.onblur = stopFetching;

    // Start fetching immediately if the window is already focused
    if (document.hasFocus()) {
      startFetching();
    }

    return () => {
      // Clean up on component unmount
      if (intervalId) {
        clearInterval(intervalId);
      }
      window.onfocus = null;
      window.onblur = null;
    };
  }, []);

  if (!data?.isPlaying) return null;
  if (hide) return null;

  return (
    <div className="animate-in absolute sm:right-4 sm:top-4 right-0 top-0 w-full sm:w-80 dark:bg-black/90 bg-white sm:rounded-xl shadow-lg p-4 flex z-10 items-center">
      <a
        className="flex dark:text-white text-xs hover:text-fuchsia-500 transition-colors items-center gap-4"
        href={data.songUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`${data.title} - ${data.artist}`}
      >
        <div className="relative w-8 h-8 rounded-md">
          <Image
            width={32}
            height={32}
            src={data.albumImageUrl}
            alt={data.title}
          />
        </div>
        <div className="flex flex-col w-44 pr-4">
          <p className="truncate">{data.title}</p>
          <p className="truncate">{data.artist}</p>
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
