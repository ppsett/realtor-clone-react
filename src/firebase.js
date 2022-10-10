// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA15Zh4NzC0svwutBA0HLV-hmCgUUAI1Do",
  authDomain: "realtor-clone-6dde2.firebaseapp.com",
  projectId: "realtor-clone-6dde2",
  storageBucket: "realtor-clone-6dde2.appspot.com",
  messagingSenderId: "978879387653",
  appId: "1:978879387653:web:9a4d8d55b61e45a113246c",
  measurementId: "G-VK1BJDR8ZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
const analytics = getAnalytics(app);