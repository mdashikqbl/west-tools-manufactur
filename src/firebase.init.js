// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEZW5JecHKjBSe0F6cHZ-XjQlXfPe1jkM",
    authDomain: "westtool-auth.firebaseapp.com",
    projectId: "westtool-auth",
    storageBucket: "westtool-auth.appspot.com",
    messagingSenderId: "227637323257",
    appId: "1:227637323257:web:6efff610b8a4eff7ac0928"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;