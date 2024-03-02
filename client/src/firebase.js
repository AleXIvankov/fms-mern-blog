// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fms-blog-cdc18.firebaseapp.com",
  projectId: "fms-blog-cdc18",
  storageBucket: "fms-blog-cdc18.appspot.com",
  messagingSenderId: "773098852242",
  appId: "1:773098852242:web:8114c65b27a2e326a3fb4b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
