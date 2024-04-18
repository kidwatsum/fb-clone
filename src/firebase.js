// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAzMzo0wuFv7BHFRYgQJcaEb5tgEZ9caKE",
    authDomain: "facebook-clone-fcd65.firebaseapp.com",
    projectId: "facebook-clone-fcd65",
    storageBucket: "facebook-clone-fcd65.appspot.com",
    messagingSenderId: "638488240808",
    appId: "1:638488240808:web:2a1e0bbad597b15a38589d",
    measurementId: "G-14JQ93VQBF"
  };

  // const firebaseApp=firebase.initializeApp(firebaseConfig);
  // const db=firebaseApp.firestore();
  // const auth=firebase.auth();

  // const provider=new firebase.auth.GoogleAuthProvider();

  // export {auth , provider};
  // export default db;
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;