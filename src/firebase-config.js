import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { faWindowRestore } from "@fortawesome/free-regular-svg-icons";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6KaeH_ZgErpOJhDc723GCCqAn1Ro-D1U",
  authDomain: "react-esa.firebaseapp.com",
  projectId: "react-esa",
  storageBucket: "react-esa.appspot.com",
  messagingSenderId: "1022327614956",
  appId: "1:1022327614956:web:3706f0eca69e810cf6e4c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();