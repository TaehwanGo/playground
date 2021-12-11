import { MOVIE_IMAGE_BASE_URL } from "@common/constants";
import React, { useEffect, useRef, useState } from "react";
import { useInfiniteScroll } from "src/hooks/useInfiniteScroll";
import { movieApi } from "../api/axiosApi";

const Movie = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  // const page = useRef(1); // useEffect dependency에 포함이 되어있어도 변화가 없네
  // const [page, setPage] = useState(1);
  const page = useInfiniteScroll();

  useEffect(() => {
    // useLayoutEffect는 csr에서만 적용되는 구나 -> https://reactjs.org/link/uselayouteffect-ssr
    movieApi
      .nowPlaying(page)
      .then((res) => {
        console.log(res);
        const {
          data: { results },
        } = res;
        setMovies((prev) => [...prev, ...results]);
      })
      .catch((err) => console.error(err));
    console.log("movies", movies);
  }, [page]);

  return (
    <>
      <header>
        <h1>Test infinite scroll</h1>
        {/* <button
          type="button"
          onClick={() => {
            // page.current++;
            // console.log("page.current", page.current);
            setPage((prePage) => (prePage += 1));
            console.log("page", page);
          }}
        >
          more page
        </button> */}
      </header>
      <main>
        <div>{page}</div>
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              {/* <img
                src={`${MOVIE_IMAGE_BASE_URL}/w300${movie.poster_path}`}
                alt="poster_image"
              /> */}
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Movie;
