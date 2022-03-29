import { getNowPlaying } from "@lib/spotify";
import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  const {
    token: { accessToken },
  } = await getSession({ req });

  const response = await getNowPlaying(accessToken);

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();
  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
  const album = song.item.album.name;
  const albumImageWidth = song.item.album.images[0].width;
  const albumImageHeight = song.item.album.images[0].height;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return res.status(200).json({
    album,
    albumImageWidth,
    albumImageHeight,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });
};

export default handler;
