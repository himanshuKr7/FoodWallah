// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: `${process.env.FIREBASE_API_KEY}`,
	authDomain: `${process.env.REACT_APP_AUTHDOMAIN}`,
	projectId: `${process.env.REACT_APP_PROJECTID}`,
	storageBucket: `${process.env.REACT_APP_STORAGEBUCKET}`,
	messagingSenderId: `${process.env.REACT_APP_MESSAGINGSENDERID}`,
	appId: `${process.env.REACT_APP_APPID}`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
