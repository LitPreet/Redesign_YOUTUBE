import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAiX9TpBJHt1iLqcXQ57530-DMa8TV0CUs",
  authDomain: "fir-auth-112.firebaseapp.com",
  projectId: "fir-auth-112",
  storageBucket: "fir-auth-112.appspot.com",
  messagingSenderId: "140126173000",
  appId: "1:140126173000:web:93304ce2a0dec925afa57d",
  measurementId: "G-J6TK2QZ23E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};