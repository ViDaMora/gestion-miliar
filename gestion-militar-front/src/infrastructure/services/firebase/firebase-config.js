import firebase from "firebase";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBMDaKmTmiVP9hUVQV_fDfwsAthB6CD2vc",
    authDomain: "gestion-militar.firebaseapp.com",
    projectId: "gestion-militar",
    storageBucket: "gestion-militar.appspot.com",
    messagingSenderId: "963601695246",
    appId: "1:963601695246:web:804fcf661f8622dbb3b25f"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth;