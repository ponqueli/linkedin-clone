import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVzvs41qxUZyRbDBOgDfPzNd2B50jag38",
  authDomain: "linkedin-clone-by-conto.firebaseapp.com",
  projectId: "linkedin-clone-by-conto",
  storageBucket: "linkedin-clone-by-conto.appspot.com",
  messagingSenderId: "233398848875",
  appId: "1:233398848875:web:70349e5a33dc8bc34ad02e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
