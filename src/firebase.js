// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD76dOMtcZwwwqGJwXVi5J8zNgzFabWimU",
  authDomain: "authentication-b101a.firebaseapp.com",
  projectId: "authentication-b101a",
  storageBucket: "authentication-b101a.appspot.com",
  messagingSenderId: "952026967259",
  appId: "1:952026967259:web:7c54407ae56ac75a4a70fe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
