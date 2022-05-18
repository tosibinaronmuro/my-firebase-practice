import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Context";
import Error from "./Error";

const Home = () => {
  const { currentUser, logout } = useAuth();
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  //  logout function
  const Logout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      seterror("unable to logout");
    }
  };
  return (
    <div className="block mt-5 m-auto p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
     <p className="flex m-4 justify-center items-center text-2xl">Dashboard</p>
      {error && <Error error={error} />}
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => {
          navigate("/sign-up");
        }}
      >
        sign up
      </button>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => {
          navigate("/login");
        }}
      >
        login
      </button>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={Logout}>log out</button>
      <div>
        {currentUser
          ? `Email: ${currentUser.email}`
          : "sign up to view profile"}
      </div>
    </div>
  );
};

export default Home;
