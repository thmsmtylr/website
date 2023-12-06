import { type NextRequest, NextResponse } from "next/server";

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

if (!client_id || !client_secret || !refresh_token) {
  throw new Error(
    "Spotify credentials are not set in the environment variables."
  );
}

const token = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

export type SpotifyData = {
  is_playing: boolean;
  item: {
    name: string;
    album: {
      name: string;
      artists: Array<{ name: string }>;
      images: [{ url: string }];
    };
    external_urls: {
      spotify: string;
    };
  };
  currently_playing_type: string;
};

const getAccessToken = async () => {
  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: `${refresh_token}`,
    }),
    headers: {
      Authorization: `Basic ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const data = await res.json();

  return data.access_token;
};

export const getNowPlaying = async () => {
  const access_token = await getAccessToken();

  const res = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res.json();
};

export type SpotifyCurrentlyPlayingData = {
  isPlaying: boolean;
  title: string;
  album: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
};

export async function GET(req: NextRequest) {
  if (req.method !== "GET") {
    return new NextResponse(
      JSON.stringify({ error: "Invalid request method" })
    );
  }

  const response = await getNowPlaying();

  if (!response.is_playing || response.currently_playing_type !== "track") {
    return new NextResponse(JSON.stringify({ isPlaying: false }));
  }

  const data: SpotifyCurrentlyPlayingData = {
    isPlaying: response.is_playing,
    title: response.item.name,
    album: response.item.album.name,
    artist: response.item.album.artists
      .map((artist: { name: string }) => artist.name)
      .join(", "),
    albumImageUrl: response.item.album.images[0].url,
    songUrl: response.item.external_urls.spotify,
  };

  return new NextResponse(JSON.stringify(data));
}
