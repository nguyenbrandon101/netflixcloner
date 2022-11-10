import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { BrowserRouter, Routes } from 'react-router-dom';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe-GzvQcOikFeUTqSyZP6H-5x2dKUE3WQ",
  authDomain: "netlfixclone-1c913.firebaseapp.com",
  projectId: "netlfixclone-1c913",
  storageBucket: "netlfixclone-1c913.appspot.com",
  messagingSenderId: "327810556561",
  appId: "1:327810556561:web:e0bdd89e6934aef6279530",
  measurementId: "G-XX5T0J40RY"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)
