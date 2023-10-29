// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVLpy6s1eiXFBstFadhm2kJtR70Lc0I5g",
  authDomain: "curso-react-fe3bb.firebaseapp.com",
  projectId: "curso-react-fe3bb",
  storageBucket: "curso-react-fe3bb.appspot.com",
  messagingSenderId: "629653135427",
  appId: "1:629653135427:web:b207bf385db37b704d34f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()