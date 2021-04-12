import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCTGcXtdiBVAwLV7NNCK1p0H2SNiS3uiSw",
    authDomain: "linkedin-clone-73e0e.firebaseapp.com",
    projectId: "linkedin-clone-73e0e",
    storageBucket: "linkedin-clone-73e0e.appspot.com",
    messagingSenderId: "23369296221",
    appId: "1:23369296221:web:af71fca4407eb99d5860b4"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};