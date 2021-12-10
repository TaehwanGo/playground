import React, { useLayoutEffect, useState } from "react";
import { movieApi } from "../api/axiosApi";

const Movie = () => {
  const [movies, setMovies] = useState();

  useLayoutEffect(() => {
    movieApi.nowPlaying().then((res) => console.log(res));
  }, []);

  return <div>hello movies</div>;
};

export default Movie;
