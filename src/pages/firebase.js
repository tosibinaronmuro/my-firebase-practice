import { initializeApp } from "firebase/app";
import React, { useRef,useState,useEffect,useId,useContext } from "react";
import { getFirestore, collection, getDocs, addDoc,deleteDoc,doc,query,where } from "firebase/firestore";
import FirebaseForm from "./FirebaseForm";
import {MyContext} from './Context'


export const Firebase = () => {
  const idd=useId()
  const [things,setThings]=useState( )
  const [load,setload]=useState(true )
  const {dbid,setdbid}=useContext(MyContext)
  const firebaseConfig = {
    apiKey: "AIzaSyBmf7hl87OMREvG-MRXz4yxev150NUWxNs",
    authDomain: "fir-auth-353d5.firebaseapp.com",
    projectId: "fir-auth-353d5",
    storageBucket: "fir-auth-353d5.appspot.com",
    messagingSenderId: "346238120356",
    appId: "1:346238120356:web:1a3e8e091b05f836835131",
    measurementId: "G-EHZCCS1H25",
  };
  initializeApp(firebaseConfig);
  
  const db = getFirestore();
  
  const colref = collection(db, "Things");
  useEffect(()=>{
      
    getDocs(colref)
    .then((snapshot) => {
     const thing=[]
      snapshot.docs.forEach((doc) => {
        thing.push({ ...doc.data(), id: doc.id });
      });
      setThings(thing)
       
      setload(false)

    })
    .catch((err) => {
      console.log(err);
    });
  // console.log(things)
  },[things])
  
  
  const titleref = useRef(null);
  const authorref = useRef(null);
  const deleteref=useRef(null)
 

  
  // removing items from the db
  const DeleteForm = (e ) => {
    e.preventDefault();
    
    const docref=doc(db,'Things' ,dbid )
    console.log( dbid  )
deleteDoc(docref).then(()=>{
  console.log(`deleted if of ${dbid}`)
})
  };

  // adding items to the db
  const AddForm = (e) => {
    e.preventDefault();
    const authortitle = {
      title: titleref.current.value,
      author: authorref.current.value,
    };
    addDoc(colref,authortitle).then(()=>{
      titleref.current.value='';
      authorref.current.value=''
    })
   
  };
  //  wuery
  let q=query(colref,where('author','==','one'))
  // console.log(q)
  return (
    <ul>
    {!load && <FirebaseForm AddForm={AddForm} DeleteForm={DeleteForm} things={things} authorref={authorref} titleref={titleref} idd={things.id} deleteref={deleteref} />}
    
    </ul>
  );
};
