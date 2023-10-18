import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAVLpy6s1eiXFBstFadhm2kJtR70Lc0I5g",
  authDomain: "curso-react-fe3bb.firebaseapp.com",
  projectId: "curso-react-fe3bb",
  storageBucket: "curso-react-fe3bb.appspot.com",
  messagingSenderId: "629653135427",
  appId: "1:629653135427:web:b207bf385db37b704d34f6"
};

initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
