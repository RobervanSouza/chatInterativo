import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBYYg-8_wVqppBzmjxPzlSx-J4aZQkjAIc",
    authDomain: "chat-tempo-real-f5aa6.firebaseapp.com",
    projectId: "chat-tempo-real-f5aa6",
    storageBucket: "chat-tempo-real-f5aa6.appspot.com",
    messagingSenderId: "915440661391",
    appId: "1:915440661391:web:87a4cfa6556820be5451fa"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};