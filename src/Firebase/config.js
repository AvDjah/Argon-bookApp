import * as firebase from "firebase/app";
import * as auth from "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyBP5DckBD9zsyQXwDkXwRm9MplufZfji3Q",
  authDomain: "bookassignment-d1ae4.firebaseapp.com",
  projectId: "bookassignment-d1ae4",
  storageBucket: "bookassignment-d1ae4.appspot.com",
  messagingSenderId: "296316932884",
  appId: "1:296316932884:web:29339cc56b4d0e0da3e801",
  measurementId: "G-31TZMSNZME",
});

export const Auth = auth.getAuth();
