// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4qTnxGAHRq1Qkz59FQvVEedH6i_vkr0o",
  authDomain: "netflixgpt-67c17.firebaseapp.com",
  projectId: "netflixgpt-67c17",
  storageBucket: "netflixgpt-67c17.appspot.com",
  messagingSenderId: "907338868306",
  appId: "1:907338868306:web:c40fb29445f1abefd9a18b",
  measurementId: "G-1GMKYTZ4E1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
