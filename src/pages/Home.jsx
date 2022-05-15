 import React from 'react'
 import { useNavigate } from 'react-router-dom'
 import { useAuth } from './Context'
 
 const Home = () => {
   const {currentUser,logout}=useAuth()
   const navigate=useNavigate()
const Logout= async  ()=>{
  try {

    await logout
    navigate('/login')
  } catch (error) {
    
  }
}
   return (
     <div>Home

       <button onClick={()=>{
         navigate("/sign-up")
       }}>
         sign up
       </button>

       <button onClick={()=>{
         navigate("/login")
       }}>
         login
       </button>

       <button onClick={Logout}>log out</button>
       
       <div>
         {currentUser ? `welcome ${currentUser.email}`: 'sign up to view profile'}
          
       </div>
     </div>

   )
 }
 
 export default Home