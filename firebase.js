// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVpPBHFmXJVjNsN9ZUVyqxyVNBGSw710g",
  authDomain: "twitter-clone-bf074.firebaseapp.com",
  projectId: "twitter-clone-bf074",
  storageBucket: "twitter-clone-bf074.appspot.com",
  messagingSenderId: "568586283121",
  appId: "1:568586283121:web:35640b94262091b2fb53d0",
  measurementId: "G-TE6G4WRR8F",
};

// Initialize Firebase [only doing this because we are using nextjs]
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
