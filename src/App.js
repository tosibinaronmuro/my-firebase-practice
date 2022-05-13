import { Route, Routes  } from "react-router-dom";
import Home from "./pages/Home";
import { Spoon } from "./pages/Spoon";
// import Firebase from './pages/Firebase'
import {MyContext} from './pages/Context'
import {useState} from 'react'
import Nav from "./pages/Navbar";
import Signup from "./pages/Signup";
 

function App() {
  const [dbid,setdbid]=useState()
  return (
    <MyContext.Provider value={{dbid,setdbid}}>
   <Nav/>
    <Routes>
       <Route path="/" element={<Home></Home>}/>
       <Route path="/sign-up" element={<Signup/>}/>
       {/* <Route path="/" element={<Firebase/>}/> */}
        </Routes>
    </MyContext.Provider>
  );
}

export default App;
