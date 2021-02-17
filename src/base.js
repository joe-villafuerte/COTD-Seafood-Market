import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBMjQjgMPTih8qmzDBr0jVfL_JJr6y-2DI",
  authDomain: "catch-of-the-day-jv-641e4.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-jv-641e4-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

//This is a name export
export { firebaseApp };

//This is a default export
export default base;
