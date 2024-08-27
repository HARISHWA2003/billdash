// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaJEIm0aLRPKxO5swJi_kZ8_Oy-Y-TQlM",
  authDomain: "billdash-7c0a2.firebaseapp.com",
  projectId: "billdash-7c0a2",
  storageBucket: "billdash-7c0a2.appspot.com",
  messagingSenderId: "148443789301",
  appId: "1:148443789301:web:3e4f199d1c561a78ccd2bc",
  measurementId: "G-CHJ4ESRSCG",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(firebase_app);
export default firebase_app;
