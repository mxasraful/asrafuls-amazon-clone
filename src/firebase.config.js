import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBexsUynLJgBljAiVJjwKXj9Jk8OZVQDVQ",
    authDomain: "asrafulsamaclone.firebaseapp.com",
    databaseURL: "https://asrafulsamaclone-default-rtdb.firebaseio.com",
    projectId: "asrafulsamaclone",
    storageBucket: "asrafulsamaclone.appspot.com",
    messagingSenderId: "213739841363",
    appId: "1:213739841363:web:8a637f6cee11082793a3a6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, googleAuthProvider };