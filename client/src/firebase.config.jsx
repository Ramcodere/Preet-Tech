import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyB7ElPymknpcBnqkUiLwsCU7SVRd2L5JpQ",
  authDomain: "otp-project-dc815.firebaseapp.com",
  projectId: "otp-project-dc815",
  storageBucket: "otp-project-dc815.appspot.com",
  messagingSenderId: "483710944123",
  appId: "1:483710944123:web:1e70b128b4febac42cb3de",
  measurementId: "G-DJRPHBFXH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);