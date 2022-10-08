import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJ9Nbk7836NU7IZCoXVmDHv8AIiO2Gp9c",
  authDomain: "react-firebase-todo-1a022.firebaseapp.com",
  databaseURL: "https://react-firebase-todo-1a022-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-firebase-todo-1a022",
  storageBucket: "react-firebase-todo-1a022.appspot.com",
  messagingSenderId: "573554087387",
  appId: "1:573554087387:web:102f168b7742a7ad03c3fe"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();