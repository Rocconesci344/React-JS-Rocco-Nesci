
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore"

import { ProductsDATA } from "../components/ItemListContainer/Products";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEIGiifWEnhtXrDnMlxkX3LaJU6zrCiOs",
    authDomain: "react-js-623f1.firebaseapp.com",
    projectId: "react-js-623f1",
    storageBucket: "react-js-623f1.appspot.com",
    messagingSenderId: "453552270488",
    appId: "1:453552270488:web:3f8a424a309422c2cbf4ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)





