import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyClhOxCBPTUsw5fhonfa7SPCNkZzm2M4Uw",
    authDomain: "db-a2b0d.firebaseapp.com",
    databaseURL: "https://db-a2b0d.firebaseio.com",
    projectId: "db-a2b0d",
    storageBucket: "db-a2b0d.appspot.com",
    messagingSenderId: "324058935389",
    appId: "1:324058935389:web:31347cf0d79efe4d235db4",
    measurementId: "G-TSYE0ZM2DM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };