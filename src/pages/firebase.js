import {initializeApp} from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
 
const Firebase=initializeApp( {
  apiKey: "AIzaSyDsd6i4na-eKG8rwCvl1zDjYYICI3oQPUQ",
  authDomain: "auth-test-e62bf.firebaseapp.com",
  projectId: "auth-test-e62bf",
  storageBucket: "auth-test-e62bf.appspot.com",
  messagingSenderId: "186458044125",
  appId: "1:186458044125:web:db090b08ef8e0d2e448d34"

})
 



export const auth= getAuth(Firebase)
 
export default Firebase  