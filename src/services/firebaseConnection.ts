
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyA8yxk0mr6gBuOVok6PSTy73nXZXRuAGQg",
  authDomain: "reactlinks-e4721.firebaseapp.com",
  projectId: "reactlinks-e4721",
  storageBucket: "reactlinks-e4721.appspot.com",
  messagingSenderId: "497361753554",
  appId: "1:497361753554:web:f1bf9cab70f6af473fa40b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db}