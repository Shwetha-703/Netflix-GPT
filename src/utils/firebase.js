// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflixgpt-b925b.firebaseapp.com",
  projectId: "netflixgpt-b925b",
  storageBucket: "netflixgpt-b925b.appspot.com",
  messagingSenderId: "420986022593",
  appId: "1:420986022593:web:7d6219d865c5a434240240"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();