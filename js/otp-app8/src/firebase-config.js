import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC2-HpQbLLXm66mOZKBVJOMJC2SU7uHQT8",
    authDomain: "otpphone-5619a.firebaseapp.com",
    projectId: "otpphone-5619a",
    storageBucket: "otpphone-5619a.appspot.com",
    messagingSenderId: "80611318893",
    appId: "1:80611318893:web:6665d7b8ce9b1881b27364"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;