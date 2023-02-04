// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyACfOB8pixvVb5PMRBFyayXawVggKWxU1A",
  authDomain: "trustme-5d737.firebaseapp.com",
  projectId: "trustme-5d737",
  storageBucket: "trustme-5d737.appspot.com",
  messagingSenderId: "601200048121",
  appId: "1:601200048121:web:e1218b1b60826f94a62f28",
  measurementId: "G-B970NPRT83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default { app, analytics };
