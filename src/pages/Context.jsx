import React, { createContext, useState, useContext, useEffect } from "react";
import { auth } from "./Firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut,sendPasswordResetEmail } from "firebase/auth"

const AuthContext = createContext();


export const useAuth = () => {
  return useContext(AuthContext);
};
export const Authprovider = ({ children }) => {
    const [loading,setLoading]=  useState(true)
const [currentUser, setCurrentUser] = useState();
function signup(email,password){
   return   createUserWithEmailAndPassword(auth,email,password )
}
function login(email,password){
  return signInWithEmailAndPassword(auth, email, password)
}
function logout( ){
   return signOut(auth)
}
function resetPassword(email){
sendPasswordResetEmail(auth,email)
}
useEffect(()=>{
   const unsubscribe= auth.onAuthStateChanged(user=>{
    setCurrentUser(user)

       setLoading(false)
      
    })
return unsubscribe
},[])

const value = {
currentUser,
signup,
login,logout,resetPassword
};


  return(
   <AuthContext.Provider value={value}>
      {!loading && children}
  </AuthContext.Provider>
  )
};
