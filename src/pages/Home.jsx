import React, { useRef, useState, useContext,useEffect } from "react";
import axios from "axios";
const APP_ID='92c6ad4a'
const APP_KEY='cc57541f5f045e568cc701051f57b2b3'
const URL=`https://api.edamam.com/search?q=vegetable&app_id=${APP_ID}&app_key=${APP_KEY}`

function Home() {
  const [data,setData]=useState();
  useEffect(() => {
    const fetch=async ()=>{
      const res=await axios.get(URL)
      console.log(res.data.hits)
      setData(res.data.hits)
      console.log(data)
    }
  fetch()
     
  }, [ ])

  return (
    <div>
      <p className="text-red-300">
        hello worlddddd</p> 
        {
        data.map((item)=>{
          return (
            <li>
                {item.recipe.calories}
            </li>
          )
        })      
        
        }</div>

  );
}

export default Home;
