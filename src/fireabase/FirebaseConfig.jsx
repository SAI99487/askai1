// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5fI5Ak41Nkg851vuXkglp_8MQgdhw3ww",
  authDomain: "ecommerce2-603ec.firebaseapp.com",
  databaseURL: "https://ecommerce2-603ec-default-rtdb.firebaseio.com",
  projectId: "ecommerce2-603ec",
  storageBucket: "ecommerce2-603ec.appspot.com",
  messagingSenderId: "27933666440",
  appId: "1:27933666440:web:46f5d17ba3a2947cac033d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}