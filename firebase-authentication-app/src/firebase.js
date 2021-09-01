
import firebase from 'firebase'
import "firebase/firestore"
import 'firebase/auth';
  const firebaseConfig ={ 
  apiKey:"AIzaSyAsmHYqD4MHbHvkjlggIRr2u7SVF6gFu0s", 
  authDomain:"auth-2b82c.firebaseapp.com", 
  projectId:"auth-2b82c", 
  storageBucket:"auth-2b82c.appspot.com", 
  messagingSenderId:"89490342250", 
  appId:"1:89490342250:web:c55ee7887a9119057c6513" 
};



  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;