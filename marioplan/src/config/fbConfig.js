import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyC6-G0v4ZF84UIo4Wh9lEm4J07AoYogwBM",
    authDomain: "mario-plan-785ee.firebaseapp.com",
    databaseURL: "https://mario-plan-785ee.firebaseio.com",
    projectId: "mario-plan-785ee",
    storageBucket: "",
    messagingSenderId: "398324680045",
    appId: "1:398324680045:web:2d51a10ed17cf56320c664"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;