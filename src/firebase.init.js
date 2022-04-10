// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXYSjpjGgvIMl-UKCGyDlnUdGfg7S_RhU",
  authDomain: "ema-john-simple-82306.firebaseapp.com",
  projectId: "ema-john-simple-82306",
  storageBucket: "ema-john-simple-82306.appspot.com",
  messagingSenderId: "954600194451",
  appId: "1:954600194451:web:38ad5f469ca7a98c576866",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;