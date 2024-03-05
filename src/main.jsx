import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCWGsRcJTXq6iTD_I17wMZGJ9wQ3ptPINE",
  authDomain: "trabajofinalreact-f8719.firebaseapp.com",
  projectId: "trabajofinalreact-f8719",
  storageBucket: "trabajofinalreact-f8719.appspot.com",
  messagingSenderId: "633758550265",
  appId: "1:633758550265:web:6904a5b9415691c736ba28"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
