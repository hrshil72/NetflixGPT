import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovies = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="bg-black mt-5 px-4 py-2 mx-5">
      <div className="text-white">
        {movieNames.map((movieName, i) => {
          return (
            <MovieList
              key={movieName}
              title={movieName}
              movies={movieResults[i]}></MovieList>
          );
        })}
      </div>
    </div>
  );
};

export default GPTMovies;
