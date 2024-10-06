import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsIUIaB49MmQ5jt4Uwa80dT3njRz-GNwE",
  authDomain: "react-recibe-yt.firebaseapp.com",
  projectId: "react-recibe-yt",
  storageBucket: "react-recibe-yt.appspot.com",
  messagingSenderId: "917987225",
  appId: "1:917987225:web:46671fda047a7a11d33d08"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export{db}