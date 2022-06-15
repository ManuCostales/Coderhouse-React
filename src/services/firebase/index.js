
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBmzVlUPvhtXYS-bNyXufT_jq3PknXgqZU",
  authDomain: "coderhouse-react-d2e46.firebaseapp.com",
  projectId: "coderhouse-react-d2e46",
  storageBucket: "coderhouse-react-d2e46.appspot.com",
  messagingSenderId: "1036654791621",
  appId: "1:1036654791621:web:2efbf1d5cfe5de584259ac"
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)