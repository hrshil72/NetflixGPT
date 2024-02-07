import React, { useEffect } from "react";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetchMovies from "../hooks/useFetchMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  function handleSignOut() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  }

  useFetchMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div className="w-screen h-screen overflow-x-hidden	">
      <div className="flex justify-between w-screen">
        <Header />
        <div className="flex items-center gap-5 z-90 bg-[#141414]">
          <img className="w-12" src={user?.photoURL}></img>
          <button
            onClick={handleSignOut}
            className="text-white bg-red-600 rounded-md px-3 py-2 text-sm">
            Sign out of Netflix{" "}
          </button>
        </div>
      </div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
