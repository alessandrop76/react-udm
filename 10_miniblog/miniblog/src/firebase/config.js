import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA2ePWO3XJoet5vz1VS3vWNftuVu8Fs7rk",
  authDomain: "miniblog-5b7b8.firebaseapp.com",
  projectId: "miniblog-5b7b8",
  storageBucket: "miniblog-5b7b8.appspot.com",
  messagingSenderId: "511089982652",
  appId: "1:511089982652:web:f511ee97040ce3ffea64b9"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};