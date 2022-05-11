import { initializeApp } from "firebase/app";
import React, { useRef,useState,useEffect } from "react";
import { getFirestore, collection, getDocs, addDoc,deleteDoc,doc } from "firebase/firestore";


export const Firebase = () => {
  const [things,setThings]=useState( )
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
      
    })
    .catch((err) => {
      console.log(err);
    });
  
  },[things])
  
  const titleref = useRef(null);
  const authorref = useRef(null);
  
  const DeleteForm = (e) => {
    e.preventDefault();
    const dofref=doc(db,'Things',)

  };
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
   
  return (
    <div>
      <h1>add mh</h1>
      <form onSubmit={AddForm}>
        <div className="mb-6">
          <label
            htmlFor="Title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" >
            Title
          </label>
          <input
            type="text"
            name="Title"
            id="Title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Title"
            ref={titleref}
          ></input>
        </div>
        <div className="mb-6">
          <label
            htmlFor="Author"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Author
          </label>
          <input
            type="text"
            name="Author"
            id="Author"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Author"
            ref={authorref}
          ></input>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="flex justify-center  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            add to things
          </button>
        </div>
      </form>

      {/* delete */}
      <form className="delete" onSubmit={DeleteForm}>
        <div className="mb-6">
          <label
            htmlFor="id"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Document ID
          </label>
          <input
            type="text"
            name="id"
            id="id"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Document ID"
          ></input>
        </div>
      </form>
      <hr /><hr /><hr />

      <div>
        {things.map((thing)=>{
          return(
            <div>
              <p>{thing.title} by {thing.author}</p>
              <hr />
              
            </div>
          )
        })}
      </div>
    </div>
  );
};
