// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  addDoc,
  doc,
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
const waldoRef = collection(db, 'waldos');
const scoreRef = collection(db, 'scoreboard');

// Method for changing isSelected property to true;
const changePropValue = function(obj, propertyString, newValue) {
  obj[propertyString] = newValue;
}

// Get 'waldos' collection data
export async function grabDocs(collectionName, ) {
  const dataArray = [];
  try {
    if (collectionName === 'waldoRef') {
      const querySnapshot = await getDocs(waldoRef);
      querySnapshot.forEach((doc) => {
        dataArray.push({...doc.data(), id: doc.id, changePropValue})
     });
    } else if (collectionName === 'scoreRef') {
      const querySnapshot = await getDocs(scoreRef);
      querySnapshot.forEach((doc) => {
        dataArray.push({...doc.data(), id: doc.id, changePropValue})
     });
    }
    
    return dataArray;
  } catch {
    console.log('An error has occurred whilst trying to retrieve information...')
  }

}
// setDoc(document, document data)
// doc(database, collection, id) <= if you want random id, don't add id arg
export async function sendScoreboardData(user, time) {
  await addDoc(collection(db, 'scoreboard'), {
    user,
    time,
  })
}

// sendScoreboardData('Stanley');
