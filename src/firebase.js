import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNz6uBEb1MgawjD22szbu6FtBflmF1Jnk",
    authDomain: "slackclone-5f32f.firebaseapp.com",
    projectId: "slackclone-5f32f",
    storageBucket: "slackclone-5f32f.appspot.com",
    messagingSenderId: "754041032073",
    appId: "1:754041032073:web:1dcc0c86696de1d0182558",
    measurementId: "G-8VFSV88WFN"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth, provider}
  export default db;