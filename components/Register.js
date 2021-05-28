import React from "react";
import { useState, useContext } from "react";
import context from "../context/context";
import backend from '../data/data'
import Router from "next/router";

const Register = ({setIsInfoVisible}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState(' ')
  const { user, setUser, setShowLogin, setShowReg, setIsLoading } = useContext(context);

  const register = async (event) => {
    setIsLoading(true)
    event.preventDefault();

    const res = await fetch(`${backend}/register`, {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        role: 'user'
      }),
    });
    const data = await res.json();
    if (res.status === 201) {
      setIsLoading(false)
      setIsInfoVisible(true)
      switchForm()
    } else {
      setErrorMessage("Något gick fel");
    }
  };

  const switchForm = () => {
    setShowLogin(true)
    setShowReg(false)
  }

  return (
    <div className="bg-white pb-6 w-72 md:w-80 rounded flex flex-col justify-center items-center relative text-center">
        
        <h1 className="text-em-green-dark text-sm md:text-xl mt-6">Registrera konto</h1>
        <p onClick={() => switchForm()} className="mt-2 text-xs md:text-sm text-gray-500 cursor-pointer">Har du redan ett konto? Logga in här.</p>
        <form
          onSubmit={register}
          className="w-full flex flex-col justify-center items-center text-black text-xs md:text-base"
        >
          <input
            onChange={(e) => setFirstName(e.target.value)}
            className="w-5/6 rounded border mt-2 md:mt-4 border-black p-3"
            placeholder="Förnamn"
            type="text"
            autoComplete="given-name"
          />
          <input
            onChange={(e) => setLastName(e.target.value)}
            className="w-5/6 rounded border mt-2 md:mt-4 border-black p-3"
            placeholder="Efternamn"
            type="text"
            autoComplete="family-name"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-5/6 rounded border mt-2 md:mt-4 border-black p-3"
            placeholder="Email"
            type="email"
            autoComplete="email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-5/6 rounded border mt-2 md:mt-4 border-black p-3"
            placeholder="Lösenord"
            type="password"
            autoComplete="new-password"
          />
          <input
            className="bg-blue-700 hover:bg-blue-900 transition duration-300 w-5/6 rounded mt-2 md:mt-4 p-3 text-white cursor-pointer"
            value={"Skapa konto"}
            type="submit"
          />
        </form>
        <h1 className="text-red-500 mt-4 h-6 font-bold">{errorMessage}</h1>
      </div>
  );
};

export default Register;
