// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-706c6.firebaseapp.com",
  projectId: "blog-706c6",
  storageBucket: "blog-706c6.appspot.com",
  messagingSenderId: "143240388483",
  appId: "1:143240388483:web:4fada9793f3c1fb06b60b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
