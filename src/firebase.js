// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqjiLueEzHtWSnJLK3N7Yh5HD63287huY",
    authDomain: "meri-jaan-happy-birthday.firebaseapp.com",
    projectId: "meri-jaan-happy-birthday",
    storageBucket: "meri-jaan-happy-birthday.firebasestorage.app",
    messagingSenderId: "90663892024",
    appId: "1:90663892024:web:bc88020778c20e910862cd",
    measurementId: "G-T33P1KZ2WY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
export const db = getFirestore(app);
