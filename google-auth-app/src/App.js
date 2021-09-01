import firebase from 'firebase';
import {useState,useEffect} from 'react';

firebase.initializeApp({
   apiKey:"AIzaSyBa5V_lEKD-vKsCzaZ-62dGezFXyB56lWs", 
  authDomain:"sign-7e4ba.firebaseapp.com", 
  projectId:"sign-7e4ba", 
  storageBucket:"sign-7e4ba.appspot.com", 
  messagingSenderId:"1046856370801", 
  appId:"1:1046856370801:web:9c0355188c98b17b9da9d0"
})
const auth = firebase.auth();

const App = () => {
  const [user,setUser] = useState(null);
useEffect(()=>{
  auth.onAuthStateChanged(person=> {
    if(person){
      setUser(person)
    }
    else{
      setUser ( null )
    }
  })
})
const signInWithGoogle = async () =>{
  try{
    await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  catch(err){
    console.log(err);
  }
}

  return (
    <div>
        <center>
          {user?
          <div>
           <h1>Welcome to home page </h1>
          <button onClick={()=>auth.signOut()}>Sign Out</button>
          </div>
          :
          <button onClick={signInWithGoogle}>Sign In With Google</button>}
          
        </center>
    </div>
  )
}

export default App