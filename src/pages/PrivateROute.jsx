import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./Context";

function PrivateROute({ children }) {
  const { currentUser } = useAuth();
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  return children;
  //     <Route {...rest }
  //    render={props=>{
  //  return currentUser ? <Component{...props}/>: <Navigate to="/login" replace />
  //    }}
  //    > </Route>
}

export default PrivateROute;
