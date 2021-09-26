import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1KUliSqlRKl-PcYoAa3Ci6LustMgWQLA",
  authDomain: "clannoname-a5969.firebaseapp.com",
  projectId: "clannoname-a5969",
  storageBucket: "clannoname-a5969.appspot.com",
  messagingSenderId: "1090696907193",
  appId: "1:1090696907193:web:4e85f197a45f1974360e68",
  measurementId: "G-5PS33GH4DS",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };
