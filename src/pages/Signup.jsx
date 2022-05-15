import React ,{useRef, useState} from 'react'
import { useAuth } from './Context'
import { useNavigate } from 'react-router-dom'
import Error from './Error'

const Signup = () => {
const emailref=useRef(null)
const passwordref=useRef(null)
const confirmpasswordref=useRef(null)
const [error,seterror]=useState('')
const [loading,setLoading]=useState(false)
const navigate=useNavigate()

 const {signup}=useAuth()
 async function handleSubmit(e){
e.preventDefault()
if(passwordref.current.value!==confirmpasswordref.current.value){
 return seterror('passwords dont match')
}
try{ 
  seterror('')
  setLoading(true)

  signup(emailref.current.value,passwordref.current.value)
  navigate('/')
 }
 catch{ seterror('failed to create an account')}

setLoading(false)
}

  return (
    <div className=' flex justify-center items-center'>
<form onSubmit={handleSubmit} className='w-auto m-5 lg:w-96 md:w-96 h-auto border-2 p-5 shadow-md'>
<p className='flex justify-center items-center text-2xl'>Sign Up</p>
  {error && <Error error={error}/> }
   
<div className="mb-6">
<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
<input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Your email" required="" ref={emailref}></input>
</div>
<div className="mb-6">
<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
<input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Create password" required="" ref={passwordref}></input>
</div>
<div className="mb-6">
<label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Repeat password</label>
<input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Confirm password" required="" ref={confirmpasswordref}></input>
</div>
<div className="flex items-start mb-6">
<div className="flex items-center h-5">
<p className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">already have an account? <span onClick={()=>{navigate("/login")}} className="text-blue-600 hover:underline dark:text-blue-500">Login</span></p>
</div>
 

</div  >
<div className='flex justify-center'> 
<button disabled={loading} type="submit" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button></div>
</form>
</div>
  )
}

export default Signup