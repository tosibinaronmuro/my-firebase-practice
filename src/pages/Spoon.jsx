import React, { useRef, useState, useContext,useEffect } from "react";
import axios from "axios";

export const Spoon = () => {
    const APP_ID='92c6ad4a'
const APP_KEY='cc57541f5f045e568cc701051f57b2b3'
    // const API_KEY="0ef6a2baae594f999fcb22462fe8a649"
    const [suggest,setSuggest]=useState('chicken')
    const URL=`https://api.edamam.com/search?q=${suggest}&app_id=${APP_ID}&app_key=${APP_KEY}`
    // const URLL= `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=$chicken`
    const [data,setData]=useState();
    
    useEffect(() => {
      const fetch=async ()=>{
        const res=await axios.get(URL)
        console.log(res.data )
        setData(res.data.hits)
        console.log(data)
      }
    fetch()
       
    }, [suggest])
    
  return (
    <div className="p-4">
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input  onChange={ (event) => setSuggest(event.target.value) }  type="text" id="table-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by ingredient"></input>
        </div>
        <div class="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            {
              data.map((item)=>{
                  return(
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">  {item.recipe.label}</p>
                  )
              })  
            }
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white"></p>
        </div>
    </div>
     
  )
}
