// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgSetR1VXhjumOzanx-GXq8P1D0XXZ14c",
  authDomain: "akafta-2aaec.firebaseapp.com",
  projectId: "akafta-2aaec",
  storageBucket: "akafta-2aaec.firebasestorage.app",
  messagingSenderId: "83450499322",
  appId: "1:83450499322:web:969a4bac85b8cf8d10b943",
  measurementId: "G-82LE9QQ1HB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);