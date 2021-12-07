// Import the functions you need from the SDKs you need

import  "firebase/firestore";
import  "firebase/auth";

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKJsnavqaPRdHgywSFcLICJQiSeR2AHdA",
  authDomain: "react-234b4.firebaseapp.com",
  projectId: "react-234b4",
  storageBucket: "react-234b4.appspot.com",
  messagingSenderId: "590882996221",
  appId: "1:590882996221:web:0bdf4fc8e0d35780926394"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db =  getFirestore();

const googleAuth = new GoogleAuthProvider();

export {
    db, 
    googleAuth
}