import React from "react";
import GPTMovies from "./GPTMovies";
import GPTSearchBar from "./GPTSearchBar";
import { BACKGROUND } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10 top-0 overflow-x-hidden">
        <img src={BACKGROUND}></img>
      </div>
      <GPTSearchBar />
      <GPTMovies />
    </div>
  );
};

export default GPTSearch;
