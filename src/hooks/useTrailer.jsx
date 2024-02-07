import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/moviesSlice";

const useTrailer = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovieTrailer();
  }, []);

  const fetchMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );

    const movieTrailer = filteredData[0];

    dispatch(addMovieTrailer(movieTrailer));
  };
};

export default useTrailer;
