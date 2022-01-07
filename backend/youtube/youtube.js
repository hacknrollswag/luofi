import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();
const KEY = process.env.YT_API_KEY;

export const baseTerms = {
  part: "snippet",
  maxResults: 1,
  key: KEY,
};

export const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
});