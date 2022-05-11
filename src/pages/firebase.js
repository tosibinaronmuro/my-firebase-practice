 import {initializeApp} from'firebase/app'
 import React from 'react';
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
   let things=[]
     snapshot.docs.forEach((doc)=>{
     things.push({...doc.data(),id:doc.id})
   })
   console.log(things)
})
.catch(err=>{
  console.log(err)
})
 
 
 export const Firebase = () => {
   return (
     <div>heklosh</div>
   )
 }
 