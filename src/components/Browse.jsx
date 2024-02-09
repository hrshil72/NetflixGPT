import React, { useEffect } from "react";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useFetchMovies from "../hooks/useFetchMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GPTSearch from "./GPTSearch";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGS } from "../utils/constants";
import { changeLanguage } from "../utils/langConfigSlice";

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptSearch = useSelector((store) => store.gpt.showGPTSearch);
  const dispatch = useDispatch();

  function handleSignOut() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  }

  function handleToggleView() {
    dispatch(toggleGptSearchView());
  }

  function handleLangChange(e) {
    dispatch(changeLanguage(e.target.value));
  }

  useFetchMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div className="w-screen h-screen overflow-x-hidden	">
      <div className="flex justify-between w-screen overflow-x-hidden">
        <Header />
        <div className="flex items-center z-90 px-5 me-3 bg-[#141414] overflow-x-hidden">
          {gptSearch && (
            <select onChange={handleLangChange} className="me-3">
              {SUPPORTED_LANGS.map((lang) => {
                return (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                );
              })}
            </select>
          )}

          <button
            onClick={handleToggleView}
            className="text-white bg-red-500 rounded-lg text-sm py-1 px-3 me-3">
            {gptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img className="w-12 me-3" src={user?.photoURL}></img>
          <button
            onClick={handleSignOut}
            className="text-white bg-red-600 rounded-md px-2  py-2 text-sm ">
            Sign out of Netflix{" "}
          </button>
        </div>
      </div>

      {gptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
