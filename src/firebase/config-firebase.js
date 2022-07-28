import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5YqD4LvpfvWSkbXQtgvT4bISYzfsEYYI",
  authDomain: "crud-react-c0b05.firebaseapp.com",
  projectId: "crud-react-c0b05",
  storageBucket: "crud-react-c0b05.appspot.com",
  messagingSenderId: "94329806393",
  appId: "1:94329806393:web:ab9f9769474625cab137e8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };
