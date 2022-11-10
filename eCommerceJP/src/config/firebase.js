// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCgMNZ5Po7RKhywyjrmBVJ-h89F2HEHN4",
    authDomain: "ecommercejp-6dde4.firebaseapp.com",
    projectId: "ecommercejp-6dde4",
    storageBucket: "ecommercejp-6dde4.appspot.com",
    messagingSenderId: "293109134445",
    appId: "1:293109134445:web:58ee736ae0bbf8a83cbb64",
    measurementId: "G-6HL2KHS6KH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
