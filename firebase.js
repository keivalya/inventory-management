// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtHBPgor22x8J3cHZT4KK4dmrYNhDqv2A",
  authDomain: "inventory-management-cfc61.firebaseapp.com",
  projectId: "inventory-management-cfc61",
  storageBucket: "inventory-management-cfc61.appspot.com",
  messagingSenderId: "31736981733",
  appId: "1:31736981733:web:27f924e9ef297ffd7e4c0c",
  measurementId: "G-FNTNWWW1VL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export { firestore }