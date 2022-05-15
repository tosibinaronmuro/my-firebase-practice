import React from 'react'
import {Route,Navigate} from 'react-router-dom'
import {useAuth} from './Context'

function PrivateROute({component:Component,...rest}) {
    const {currentUser}=useAuth()
  return (
    <Route {...rest } 
   render={props=>{
 return currentUser ? <Component{...props}/>: <Navigate to="/login" replace /> 
   }}
   > </Route>
  )
}

export default PrivateROute