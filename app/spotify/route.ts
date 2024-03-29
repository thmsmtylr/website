import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
  SPOTIFY_REFRESH_TOKEN_ENDPOINT: refresh_token_endpoint,
  SPOTIFY_CURRENTLY_PLAYING_ENDPOINT: currently_playing_endpoint,
} = process.env;

if (
  !client_id ||
  !client_secret ||
  !refresh_token ||
  !refresh_token_endpoint ||
  !currently_playing_endpoint
) {
  throw new Error(
    "Spotify credentials are not set in the environment variables."
  );
}

const TOKEN = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

const getAccessToken = async () => {
  const res = await fetch(refresh_token_endpoint ?? "", {
    method: "POST",
    headers: {
      Authorization: `Basic ${TOKEN}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: `${refresh_token}`,
    }),
  });

  const data = await res.json();

  return data.access_token;
};

export async function GET() {
  const token = await getAccessToken();

  const notPlayingResponse = () =>
    new NextResponse(JSON.stringify({ isPlaying: false }), { status: 200 });

  const res = await fetch(currently_playing_endpoint ?? "", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status !== 200) {
    return notPlayingResponse();
  }

  const data = await res.json();

  if (data.currently_playing_type !== "track") {
    return notPlayingResponse();
  }

  return new NextResponse(
    JSON.stringify({
      isPlaying: data.is_playing,
      title: data.item.name,
      album: data.item.album.name,
      artist: data.item.album.artists[0].name,
      albumImageUrl: data.item.album.images[0].url,
      songUrl: data.item.external_urls.spotify,
    }),
    { status: 200 }
  );
}
