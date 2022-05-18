import React, { createContext, useState, useContext, useEffect } from "react";
import { auth } from "./Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

// creating context
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const Authprovider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState();

  // signup with firebase
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  // login with firebase
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  // logout
  function logout() {
    return signOut(auth);
  }
  // reset password
  function resetPassword(email) {
    sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    // const unsubscribe=  onAuthStateChanged(auth,user=>{
    //    setCurrentUser(user)
    //         console.log('user state changed',user)
    //       setLoading(false)

    //    })

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
     
      setLoading(false);
    });
    return ()=> unsubscribe() ;
  }, []);
  // the global props and states needed for auth
  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
