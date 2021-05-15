import React from "react";
import { useState, useContext } from "react";
import context from "../context/context";
import Router from "next/router";
import backend from '../data/data'

const Login = ({setLoginFormOpen}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const { user, setUser, setShowLogin, setShowReg, setIsLoading } = useContext(context);
  const [errorMessage, setErrorMessage] = useState(' ')

  const login = async (event) => {
    event.preventDefault();

    const res = await fetch(`${backend}/login`, {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    
    const data = await res.json();
    // console.log('Data från server', data)
    if (res.status === 200) {
      console.log(res.headers)
      setUser(data[0]);
      Router.push('/profil')
      setIsLoading(true)
    } else {
      
      setErrorMessage(data.errMessage);
    }
  };

  const switchForm = () => {
    setShowLogin(false)
    setShowReg(true)
  }

  return (
    
      <div className="bg-white py-4 w-80 rounded flex flex-col justify-center items-center relative text-center">
        
        <h1 className="text-em-green-dark text-xl mt-6">Logga in</h1>
        <p onClick={() => switchForm()} className="mt-2 text-sm text-gray-500 cursor-pointer">Har du inget konto? Skapa ett här.</p>
        <form
          onSubmit={login}
          className="w-full flex flex-col justify-center items-center text-black"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-5/6 rounded border mt-4 border-black p-3"
            placeholder="Email"
            type="text"
            autoComplete="email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-5/6 rounded border mt-4 border-black p-3"
            placeholder="Lösenord"
            autoComplete="current-password"
            type="password"
          />
          <input
            className="bg-em-green-default w-5/6 rounded mt-4 p-3 text-white cursor-pointer"
            value={"Logga in"}
            type="submit"
          />
        </form>
  <h1 className="text-sm text-red-500 mt-4 h-6">{errorMessage}</h1>
      </div>
    
  );
};

export default Login;
