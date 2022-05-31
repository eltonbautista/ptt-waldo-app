// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWg_ZXEbXZ_gE-tAp14gd_6vteuKTbwJ0",
  authDomain: "ptt-waldo-app.firebaseapp.com",
  projectId: "ptt-waldo-app",
  storageBucket: "ptt-waldo-app.appspot.com",
  messagingSenderId: "515929869478",
  appId: "1:515929869478:web:47a96a3d72897dd217f867"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init services
const db = getFirestore(app);

// Collection ref
const colRef = collection(db, 'waldos');

// Get collection data
export async function grabDocs() {
  const querySnapshot = await getDocs(colRef);
  const waldosArray = [];
  querySnapshot.forEach((doc) => {
    waldosArray.push({...doc.data(), id: doc.id})
  });
  return waldosArray;
}