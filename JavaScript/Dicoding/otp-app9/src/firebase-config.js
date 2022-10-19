// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2-HpQbLLXm66mOZKBVJOMJC2SU7uHQT8",
  authDomain: "otpphone-5619a.firebaseapp.com",
  projectId: "otpphone-5619a",
  storageBucket: "otpphone-5619a.appspot.com",
  messagingSenderId: "80611318893",
  appId: "1:80611318893:web:6665d7b8ce9b1881b27364"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}