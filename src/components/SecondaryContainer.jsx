import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className=" w-screen mt-10 bg-[#141414]">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList
        title={"Freshly Selected for You"}
        movies={movies.nowPlayingMovies}
      />
      <MovieList
        title={"Binge-worthy US TV Sci-Fi & Fantasy"}
        movies={movies.nowPlayingMovies}
      />
      <MovieList
        title={"Critically Acclaimed US TV Shows"}
        movies={movies.nowPlayingMovies}
      />
      <MovieList title={"Casual Viewing"} movies={movies.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
