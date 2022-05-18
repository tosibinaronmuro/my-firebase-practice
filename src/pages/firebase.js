import {initializeApp} from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
 
const Firebase=initializeApp( {
  apiKey:process.env.REACT_APP_NAME_OF_THE_API_KEY,
  authDomain:process.env.REACT_APP_NAME_OF_THE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_NAME_OF_THE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_NAME_OF_THE_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_NAME_OF_THE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_NAME_OF_THE_APP_ID

  
})
 



export const auth= getAuth(Firebase)
 
export default Firebase  