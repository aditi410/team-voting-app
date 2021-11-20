import firebase from 'firebase';

// add SDK Firebase
 const firebaseConfig = {
    apiKey: "AIzaSyDcbcOVHkxW8d5noxZLClZLqqbOAX_6Gp8",
    authDomain: "team-voting-app-704de.firebaseapp.com",
    databaseURL: "https://team-voting-app-704de-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-704de",
    storageBucket: "team-voting-app-704de.appspot.com",
    messagingSenderId: "360884088235",
    appId: "1:360884088235:web:6980cebfb76a1a86d0b6ee"
  };
  


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();