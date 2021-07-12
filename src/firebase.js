import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyBWqnIw10J81Kfgw4dk3ona1MT-Y6q0fCc",
  authDomain: "letsbuy-11c7a.firebaseapp.com",
  projectId: "letsbuy-11c7a",
  storageBucket: "letsbuy-11c7a.appspot.com",
  messagingSenderId: "407649583055",
  appId: "1:407649583055:web:e19cef6ac39351633c5cba",
  measurementId: "G-DBP2TF11DX"
});

/* const db=firebaseApp.firestore(); */
const auth = firebase.auth();

export default auth;