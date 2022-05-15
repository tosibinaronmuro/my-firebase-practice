import { Route, Routes  } from "react-router-dom";
import Home from "./pages/Home";
import { Spoon } from "./pages/Spoon";
// import Firebase from './pages/Firebase'
import {Authprovider, MyContext} from './pages/Context'
import {useState} from 'react'
import Nav from "./pages/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateROute from "./pages/PrivateROute";
import ForgotPassword from "./pages/ForgotPassword";
 

function App() {
  // const [dbid,setdbid]=useState()
  return (
    <Authprovider>
   <Nav/>
    <Routes>
       <Route exact path="/" element={<Home></Home>}/>
       <Route path="/sign-up" element={<Signup/>}/>
       <Route path="/login" element= {<Login/>}/>
       <Route path="/forgot-password" element= {<ForgotPassword/>}/>
        </Routes>
    </Authprovider>
  );
}

export default App;
