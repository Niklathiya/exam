import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCiw9khKpx43hRdWQiBPgEBjkG7-9qZcd8",
    authDomain: "exam-6ff01.firebaseapp.com",
    projectId: "exam-6ff01",
    storageBucket: "exam-6ff01.appspot.com",
    messagingSenderId: "891277709998",
    appId: "1:891277709998:web:a9f84e512eac2f0bb8533f",
    measurementId: "G-5JGB7RW9E6"
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
export const fireStoreDb = getFirestore(app);

