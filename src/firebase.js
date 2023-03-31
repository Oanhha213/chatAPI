import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYzSSN24sekJXhDM8dyx9wHVD_qDspZxs",
  authDomain: "chat2-8261a.firebaseapp.com",
  databaseURL: "https://chat2-8261a-default-rtdb.firebaseio.com",
  projectId: "chat2-8261a",
  storageBucket: "chat2-8261a.appspot.com",
  messagingSenderId: "798828300125",
  appId: "1:798828300125:web:7aba40f8fb82f68e8b4ab4",
  measurementId: "G-C1063RKKCD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
