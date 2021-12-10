import { CATFACT_URL } from "@common/constants";
import axios from "axios";

export const axiosApi = axios.create({
  baseURL: CATFACT_URL,
  timeout: 2500,
});

export const movieApiInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.NEXT_PUBLIC_MOVIE_API_KEY,
    language: "en-US",
  },
});

export const movieApi = {
  nowPlaying: () => movieApiInstance.get("movie/now_playing"),
  upcoming: () => movieApiInstance.get("movie/upcoming"),
  popular: () => movieApiInstance.get("movie/popular"),
};
