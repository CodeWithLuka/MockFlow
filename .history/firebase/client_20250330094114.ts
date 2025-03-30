// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAG6r6VT49SQ8DpB-n9Ib8fY0QJNodeYcE",
	authDomain: "mockflow-4c8eb.firebaseapp.com",
	projectId: "mockflow-4c8eb",
	storageBucket: "mockflow-4c8eb.firebasestorage.app",
	messagingSenderId: "825766533515",
	appId: "1:825766533515:web:b60566974e1a203b91778e",
	measurementId: "G-5XSS72E936",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
