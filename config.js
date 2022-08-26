import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyDiQ5cuSzhmq6_zANjFKdTfZfWhu3vRAmw",
  authDomain: "scheduler-33fae.firebaseapp.com",
  projectId: "scheduler-33fae",
  storageBucket: "scheduler-33fae.appspot.com",
  messagingSenderId: "835722777926",
  appId: "1:835722777926:web:f837b4d6dc77e9d492c147"
};
firebase.initializeApp(firebaseConfig);

export default firebase.database()