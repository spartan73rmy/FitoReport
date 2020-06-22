import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1slkfo_XUHEUHnyxdpSP5QQ1ejwMestQ",
  authDomain: "fito-report.firebaseapp.com",
  databaseURL: "https://fito-report.firebaseio.com",
  projectId: "fito-report",
  storageBucket: "fito-report.appspot.com",
  messagingSenderId: "725237582945",
  appId: "1:725237582945:web:c98511d23d0f83ac17ae20"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
