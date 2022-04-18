import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQ6AY2JoIQ9s4L_8ZLACevTzGOc4RkLRA_",
  authDomain: "linkedin-clone-by-conto.firebaseapp.com_",
  projectId: "linkedin-clone-by-conto",
  storageBucket: "linkedin-clone-by-conto.appspot.com_",
  messagingSenderId: "233398848875_",
  appId: "1:233398848875:web:942d30d4ec090d844ad02e_",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
