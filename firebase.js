// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtC1VG_Zf4HlNdbSvDkuqA18ROm6rGFr0",
  authDomain: "bulkynotes.firebaseapp.com",
  projectId: "bulkynotes",
  storageBucket: "bulkynotes.appspot.com",
  messagingSenderId: "1085666469177",
  appId: "1:1085666469177:web:8b4226c52ee91fe909f4e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export {
    db, auth
}
