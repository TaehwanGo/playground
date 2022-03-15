import { CATFACT_URL } from "@common/constants";
import axios from "axios";

export const axiosApi = axios.create({
  baseURL: CATFACT_URL,
  timeout: 2500,
});

axiosApi.interceptors.response.use(
  (res) => {
    console.log("interceptors res", res);
    return res;
  },
  (error) => {
    console.error("interceptors error", error);
    return Promise.reject(error);
  }
);

export const movieApiInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.NEXT_PUBLIC_MOVIE_API_KEY,
    language: "en-US",
  },
});

export const movieApi = {
  nowPlaying: (page: number) =>
    movieApiInstance.get<MovieResponse>("movie/now_playing", {
      params: {
        page,
      },
    }),
  upcoming: () => movieApiInstance.get("movie/upcoming"),
  popular: () => movieApiInstance.get("movie/popular"),
};
