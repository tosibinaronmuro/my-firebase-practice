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
    <div>
      Home
      {error && <Error error={error} />}
      <button
        onClick={() => {
          navigate("/sign-up");
        }}
      >
        sign up
      </button>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        login
      </button>
      <button onClick={Logout}>log out</button>
      <div>
        {currentUser
          ? `welcome ${currentUser.email}`
          : "sign up to view profile"}
      </div>
    </div>
  );
};

export default Home;
