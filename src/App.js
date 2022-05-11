import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Spoon } from "./pages/Spoon";
import {Firebase} from './pages/Firebase'
 ;
 

function App() {
  return (
    <>
   
    <Routes>
       <Route path="/search" element={<Home></Home>}/>
       <Route path="/" element={<Firebase/>}/>
        </Routes>
    </>
  );
}

export default App;
