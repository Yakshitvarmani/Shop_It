import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJccZ24V3ZHFmWsgarPaVexn9DD6UcJC8",
  authDomain: "shopit-3c338.firebaseapp.com",
  projectId: "shopit-3c338",
  storageBucket: "shopit-3c338.appspot.com",
  messagingSenderId: "156068468446",
  appId: "1:156068468446:web:3c1e6c17c6d3d44989d44f",
  measurementId: "G-WN0W0L0C17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let auth = getAuth(app);
