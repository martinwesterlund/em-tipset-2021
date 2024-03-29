import React from "react";
import { useState, useContext } from "react";
import context from "../context/context";
import Router from "next/router";
import backend from '../data/data'
import { useCookies } from 'react-cookie';
import LoadingScreen from "./LoadingScreen";


const Login = ({setIsInfoVisible}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const { user, setUser, setShowLogin, setShowReg, isCookiesAccepted, setIsLoading } = useContext(context);
  const [errorMessage, setErrorMessage] = useState(' ')
  const [cookies, setCookie] = useCookies(['emTipset21']);
  

  const login = async (event) => {
    setIsLoading(true)
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
    if (res.status === 200) {
      if(isCookiesAccepted){
        setCookie('emTipset21', data.accessToken, {maxAge: 60*60*24*30})
      }
      
      setUser(data.user[0]);
      Router.push('/profil')
      setIsLoading(true)
    } else {
      setIsLoading(false)
      setErrorMessage(data.errMessage);
    }
  };

  const switchForm = () => {
    setIsInfoVisible(false)
    setShowLogin(false)
    setShowReg(true)
  }

  return (
    
      <div className="bg-white pb-6 w-72 md:w-80 rounded flex flex-col justify-center items-center relative text-center">
        
        <h1 className="text-em-green-dark text-sm md:text-xl mt-6">Logga in</h1>
        <p onClick={() => switchForm()} className="mt-2 text-xs md:text-sm text-gray-500 cursor-pointer">Har du inget konto? Skapa ett här.</p>
        <form
          onSubmit={login}
          className="w-full flex flex-col justify-center items-center text-xs md:text-base text-black"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-5/6 rounded border mt-2 md:mt-4 border-black p-3 "
            placeholder="Email"
            type="email"
            autoComplete="email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-5/6 rounded border mt-2 md:mt-4 border-black p-3 "
            placeholder="Lösenord"
            autoComplete="current-password"
            type="password"
          />
          <input
            className="bg-em-green-default hover:bg-em-green-dark transition duration-300 w-5/6 rounded mt-2 md:mt-4 p-3 text-white cursor-pointer"
            value={"Logga in"}
            type="submit"
          />
        </form>
  <h1 className="text-sm md:text-sm text-red-500 mt-2 h-6">{errorMessage}</h1>
      </div>
    
  );
};

export default Login;
