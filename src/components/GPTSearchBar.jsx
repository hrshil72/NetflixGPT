import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovie } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.langConfig.lang);

  const searchText = useRef(null);

  const fetchSearchGptMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  async function handleGPTSearch() {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give names of 5 movies, comma seperated like the example result given ahead. Example gaddar,sholay,don.spiderman,batman";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => fetchSearchGptMovie(movie));

    const tmdbResult = await Promise.all(promiseArray);

    dispatch(addGptMovie({ movieNames: gptMovies, movieResults: tmdbResult }));
    console.log(tmdbResult);
  }

  return (
    <div className="mt-[2%] flex justify-center ">
      <form
        className="py-5 grid grid-cols-9 bg-black px-6 rounded-lg"
        onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          className="py-4 px-5 col-span-8 outline-none rounded-lg"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}></input>
        <button
          onClick={handleGPTSearch}
          className="rounded-lg bg-red-500 ms-2 py-5 px-4 ">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
