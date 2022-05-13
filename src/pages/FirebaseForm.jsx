import React ,{useContext} from 'react'
import { MyContext } from './Context'

const FirebaseForm = ({AddForm,DeleteForm,things,authorref,deleteref,titleref,idd, referee}) => {
  const { dbid,setdbid}=useContext(MyContext)

  
  return (
    <li key={idd}>
    <h1>add </h1>
    <form onSubmit={AddForm}>
      <div className="mb-6">
        <label
          htmlFor="Title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" >
          Title
        </label>
        <input
          type="text"
          name="Title"
          id="Title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Title"
          ref={titleref}
        ></input>
      </div>
      <div className="mb-6">
        <label
          htmlFor="Author"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Author
        </label>
        <input
          type="text"
          name="Author"
          id="Author"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Author"
          ref={authorref}
        ></input>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="flex justify-center  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          add to things
        </button>
      </div>
    </form>

    {/* delete */}
    {/* <form className="delete" onSubmit={DeleteForm}>
      <div className="mb-6">
        <label
          htmlFor="id"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Document ID
        </label>
        <input
          type="text"
          name="id"
          id="id"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Document ID" ref={deleteref}
        ></input>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="flex justify-center  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          delete thing
        </button>
      </div>
    </form> */}
    <hr /><hr /><hr />

    <div>
      {things.map((thing)=>{
        
         setdbid(thing.id)
        return(
          <div>
            <p className='flex '>{thing.title} by {thing.author} id={thing.id}- {dbid} <span className='flex flex-1 justify-end'><svg onClick={DeleteForm}   className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></span></p>
            <hr />
            
          </div>
        )
      })}
    </div>
  </li>
  )
}

export default FirebaseForm