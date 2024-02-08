import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.langConfig.lang);

  return (
    <div className="mt-[2%] flex justify-center ">
      <form className="py-5 grid grid-cols-12 bg-black px-6">
        <input
          className="py-4 px-5 col-span-9 outline-none rounded-lg"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}></input>
        <button className="rounded-lg bg-red-500 ms-2 py-5 px-4">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
