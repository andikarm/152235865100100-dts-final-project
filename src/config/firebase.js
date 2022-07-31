// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGUDLr09gJ5m92CQGFAQO2G3ICKVOC8lI",
  authDomain: "andikarm.firebaseapp.com",
  projectId: "andikarm",
  storageBucket: "andikarm.appspot.com",
  messagingSenderId: "124095301296",
  appId: "1:124095301296:web:7799c30377c8488278dd75",
  measurementId: "G-BVSQ9BMP7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };