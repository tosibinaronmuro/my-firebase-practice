import { Route, Routes  } from "react-router-dom";
import Home from "./pages/Home";
import { Spoon } from "./pages/Spoon";
import {Firebase} from './pages/Firebase'
import {MyContext} from './pages/Context'
import {useState} from 'react'
 

function App() {
  const [dbid,setdbid]=useState()
  return (
    <MyContext.Provider value={{dbid,setdbid}}>
   
    <Routes>
       <Route path="/search" element={<Home></Home>}/>
       <Route path="/" element={<Firebase/>}/>
        </Routes>
    </MyContext.Provider>
  );
}

export default App;
