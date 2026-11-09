import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyOqjiLueEzHtWSnJLK3N7Yh5HD63287huY",
  authDomain: "meri-jaan-happy-birthday.firebaseapp.com",
  databaseURL: "https://meri-jaan-happy-birthday-default-rtdb.firebaseio.com",
  projectId: "meri-jaan-happy-birthday",
  storageBucket: "meri-jaan-happy-birthday.firebasestorage.app",
  messagingSenderId: "90663892024",
  appId: "1:90663892024:web:a9f9d00c768d31a80862cd",
  measurementId: "G-CBCQ1JL2G5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export default app;
