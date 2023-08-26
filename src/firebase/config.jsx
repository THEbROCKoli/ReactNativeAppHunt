// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASu97ka5e0dzpPQ6MtRaP4G7Oj1KB87-8",
  authDomain: "apphunt-38ad9.firebaseapp.com",
  databaseURL: "https://apphunt-38ad9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "apphunt-38ad9",
  storageBucket: "apphunt-38ad9.appspot.com",
  messagingSenderId: "902552036596",
  appId: "1:902552036596:web:c964d1f8188146985b6aa1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Database

export const db = getDatabase(app)