// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjkWlaOzIYE9Pq3t9gzCQ9i7NANYyO2ok",
  authDomain: "react-counter-410fe.firebaseapp.com",
  projectId: "react-counter-410fe",
  storageBucket: "react-counter-410fe.appspot.com",
  messagingSenderId: "86769640674",
  appId: "1:86769640674:web:c66ffabcf10cafbd812abb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
