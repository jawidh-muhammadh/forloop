// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv1kSeXn72dKCqnGPBBfyr97A6o4d-P1E",
  authDomain: "forloop-4f3fd.firebaseapp.com",
  databaseURL: "https://forloop-4f3fd-default-rtdb.firebaseio.com",
  projectId: "forloop-4f3fd",
  storageBucket: "forloop-4f3fd.appspot.com",
  messagingSenderId: "1064836370398",
  appId: "1:1064836370398:web:bed1574c671355e17f574f",
  measurementId: "G-2DSF1CL71W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth()
export const db = getFirestore(app);
