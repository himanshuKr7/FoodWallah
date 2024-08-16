// Import the functions you need from the SDKs you need
import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHGtnWElOKmX56lCvnBWLi1Pi977UkiVc",
  authDomain: "foodwaala-3ce6d.firebaseapp.com",
  projectId: "foodwaala-3ce6d",
  storageBucket: "foodwaala-3ce6d.appspot.com",
  messagingSenderId: "395583484428",
  appId: "1:395583484428:web:09a654c8263aa2f1e6b429"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();