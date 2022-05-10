 import {initializeApp} from'firebase/app'
 import {
     getFirestore,
     collection,
     getDocs

 } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBmf7hl87OMREvG-MRXz4yxev150NUWxNs",
    authDomain: "fir-auth-353d5.firebaseapp.com",
    projectId: "fir-auth-353d5",
    storageBucket: "fir-auth-353d5.appspot.com",
    messagingSenderId: "346238120356",
    appId: "1:346238120356:web:1a3e8e091b05f836835131",
    measurementId: "G-EHZCCS1H25"
  };
  initializeApp(firebaseConfig)

  const db =getFirestore()

  const colref=collection(db,'Things')

getDocs(colref)
.then((snapshot)=>{
    console.log(snapshot.docs)
})