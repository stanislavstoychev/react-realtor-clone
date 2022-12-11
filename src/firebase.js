// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH4CFDcs5I9MPjydIGWICfTke4lQcZ4Bc",
  authDomain: "realtor-clone-react-4ab49.firebaseapp.com",
  projectId: "realtor-clone-react-4ab49",
  storageBucket: "realtor-clone-react-4ab49.appspot.com",
  messagingSenderId: "1016942884320",
  appId: "1:1016942884320:web:1123f7745bf4d2800e6785"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();