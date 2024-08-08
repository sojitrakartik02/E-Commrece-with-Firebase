import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAbftkhe4WjSRoIlcPSnhXSwuSLTJ300e0",
  authDomain: "ecommerce-54076.firebaseapp.com",
  projectId: "ecommerce-54076",
  storageBucket: "ecommerce-54076.appspot.com",
  messagingSenderId: "367735090828",
  appId: "1:367735090828:web:4747b76331a02ac13d95a9",
  measurementId: "G-68MMJ045GF"
};


const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
