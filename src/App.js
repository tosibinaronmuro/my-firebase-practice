import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Spoon } from "./pages/Spoon";
 ;
 

function App() {
  return (
    <>
   
    <Routes>
       <Route path="/" element={<Home></Home>}/>
       <Route path="/search" element={<Spoon/>}/>
        </Routes>
    </>
  );
}

export default App;
