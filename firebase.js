
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeCOoTMW4wEhk_S0bRu-G66GYswZzODN0",
  authDomain: "learnlingo-dfea6.firebaseapp.com",
  projectId: "learnlingo-dfea6",
  storageBucket: "learnlingo-dfea6.appspot.com",
  messagingSenderId: "926373113076",
  appId: "1:926373113076:web:528bb2c7ae2cc8a6b082a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth"

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_AOO_ID,
// };

// const app = initializeApp(firebaseConfig);
// 