import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrn40YZcAXU6n1YYccinutARnVbZTd424",
  authDomain: "linkedin-b4473.firebaseapp.com",
  projectId: "linkedin-b4473",
  storageBucket: "linkedin-b4473.appspot.com",
  messagingSenderId: "603636419328",
  appId: "1:603636419328:web:c0322ba2eb23c7b1fdc1e5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
