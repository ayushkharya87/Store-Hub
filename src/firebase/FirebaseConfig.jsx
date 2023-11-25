// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFxIlvfCWCq9zxG9-09E-Z3gPQKiZMvm8",
  authDomain: "ecom-92207.firebaseapp.com",
  projectId: "ecom-92207",
  storageBucket: "ecom-92207.appspot.com",
  messagingSenderId: "95261068706",
  appId: "1:95261068706:web:c078deb9da9394c74ef6fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth};