import { useEffect, useState } from "react";
import get_key from "../key";

const api_key = get_key();

export default function useMoviesDetails(id) {
  const [movie, setMovie] = useState({});

  useEffect(
    function () {
      async function getMovieDetails() {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
        );
        const data = await res.json();
        setMovie(data);
      }

      getMovieDetails();
    },
    [id]
  );

  return {movie}
}
