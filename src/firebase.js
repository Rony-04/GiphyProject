// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDwGujjgxjNvYNVTieCzH60OGQ5KmonyjY",
  authDomain: "giphy-project-e2164.firebaseapp.com",
  projectId: "giphy-project-e2164",
  storageBucket: "giphy-project-e2164.appspot.com",
  messagingSenderId: "578970456341",
  appId: "1:578970456341:web:4b3807a66c75fff231d91c",
  measurementId: "G-7E4DCV8GV9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();