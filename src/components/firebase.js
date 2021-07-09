// import firebase from 'firebase/app';


import 'firebase/firestore'
// var firebase = require('firebase/app');

// const firebaseConfig = firebase.initialiseApp({
//     apiKey: "AIzaSyCLv9SsN5EJDL8OvlT20F6w92YACQyBFnw",
//     authDomain: "todoist-tut-5ece2.firebaseapp.com",
//     projectId: "todoist-tut-5ece2",
//     storageBucket: "todoist-tut-5ece2.appspot.com",
//     messagingSenderId: "353172933106",
//     appId: "1:353172933106:web:f39a58f49c65697485036b",
// });




var firebase = require('firebase');
var firebaseConfig = {
    apiKey: "AIzaSyCLv9SsN5EJDL8OvlT20F6w92YACQyBFnw",
    authDomain: "todoist-tut-5ece2.firebaseapp.com",
    projectId: "todoist-tut-5ece2",
        storageBucket: "todoist-tut-5ece2.appspot.com",
        messagingSenderId: "353172933106",
        appId: "1:353172933106:web:f39a58f49c65697485036b",
};
const fireApp = firebase.initializeApp(firebaseConfig);

export {fireApp as firebase };
console.log("firebase is working");