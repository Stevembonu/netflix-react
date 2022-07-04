//we create a .env file to hide our keys

//step29: we pasted every thing below from firebase online after creating project. but we deleted the keys and just put process.env.... and hid the keys in env
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; //step30. go to Authcontext.js for 31
import { getFirestore } from "firebase/firestore" //51. then go down and export it
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  appId: process.env.REACT_APP_APP_ID
};

// REACT_APP_FIREBASE_API_KEY=AIzaSyDA1mgpLuUEUQ3dh-MTsOt2XSY-YM8SWT4
// REACT_APP_FIREBASE_AUTH_DOMAIN=netflix-react-1186a.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=netflix-react-1186a
// REACT_APP_FIREBASE_STORAGE_BUCKET=netflix-react-1186a.appspot.com
// REACT_APP_MESSAGING_SENDER=678303738478
// REACT_APP_APP_ID=1:678303738478:web:6f87960e519d4aa8ca147f

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app) //51. go to authcontext.js and import db from firebase, other stuff from firestore