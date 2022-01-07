import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();
const KEY = process.env.YT_API_KEY;

//videoCategoryId 10 is music
export const baseTerms = {
  part: "snippet",
  type: "video",
  videoCategoryId: 10,
  maxResults: 1,
  key: KEY,
};

export const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
});

export async function searchVideo (artist, song) {
  const response = await youtube.get("/search", {
    params: {
      ...baseTerms,
      q: artist | song,
    },
  });
  return response.data.items;
};