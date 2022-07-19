// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8BuwVsruem2xF1XyaB-0-eVjL8mFTSBw",
  authDomain: "screamer-39029.firebaseapp.com",
  projectId: "screamer-39029",
  storageBucket: "screamer-39029.appspot.com",
  messagingSenderId: "105321867071",
  appId: "1:105321867071:web:621772b4b02158fe89958a",
  measurementId: "G-S7XF8ZY6E6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
