import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAANPkXtVq8FfUmn0JRfuN9CJ9CA1rLWU0",
    authDomain: "period-f562a.firebaseapp.com",
    projectId: "period-f562a",
    storageBucket: "period-f562a.appspot.com",
    messagingSenderId: "729409650551",
    appId: "1:729409650551:web:7ad73ccfefb1a72a89eb72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);