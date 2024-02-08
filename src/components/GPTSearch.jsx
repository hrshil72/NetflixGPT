import React from "react";
import GPTMovies from "./GPTMovies";
import GPTSearchBar from "./GPTSearchBar";
import { BACKGROUND } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10 top-0">
        <img src={BACKGROUND}></img>
      </div>
      <GPTSearchBar />
      <GPTMovies />
    </div>
  );
};

export default GPTSearch;
