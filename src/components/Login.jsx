import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { BACKGROUND, PHOTO_URL } from "../utils/constants";

const Login = () => {
  let [isSignIn, setIsSignIn] = useState(true);
  let [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  let name = useRef(null);
  let email = useRef(null);
  let password = useRef(null);

  function toggleSignInForm() {
    setIsSignIn(!isSignIn);
  }

  function handleButtonClick() {
    const errMessage = checkValidData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(errMessage);

    if (errMessage) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PHOTO_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {});
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error creating user:", error);
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error logging user:", error);
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  }

  return (
    <div>
      <Header />
      <div className="bg w-full  relative flex items-start justify-center">
        <img src={BACKGROUND}></img>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute bg-black py-12 px-12 top-52 w-1/4 h-1/2">
          <h2 className="text-3xl mb-5 text-white">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h2>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full px-3 py-3 mb-6"></input>
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="w-full px-3 py-3 mb-6"></input>
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full px-3 py-3"></input>
          <p className="text-red-500">{errorMessage}</p>
          <button
            onClick={handleButtonClick}
            className="bg-red-600	w-full text-xl mt-6 py-2 text-white">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <h3 className="ms-28 mt-5 text-lg">Forgot password?</h3>
          <p className="mt-14 text-slate-400	">
            {isSignIn ? "New to Netflix?" : "Already a user?"}{" "}
            <Link onClick={toggleSignInForm} className="text-white ">
              {isSignIn ? "Sign In" : "Sign Up"}
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
