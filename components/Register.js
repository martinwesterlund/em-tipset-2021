import React from "react";
import { useState, useContext } from "react";
import context from "../context/context";
import backend from '../data/data'
import Router from "next/router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState(' ')
  const { user, setUser, setShowLogin, setShowReg } = useContext(context);

  const register = async (event) => {
    event.preventDefault();

    const res = await fetch(`${backend}/register`, {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        password,
      }),
    });
    const data = await res.json();
    if (res.status === 201) {
      setUser(data[0]);
      Router.push('/profil')
    } else {
      setErrorMessage("Något gick fel");
    }
  };

  const switchForm = () => {
    setShowLogin(true)
    setShowReg(false)
  }

  return (
    <div className="bg-white py-4 w-80 rounded flex flex-col justify-center items-center relative text-center">
        
        <h1 className="text-em-green-dark text-xl mt-6">Registrera konto</h1>
        <p onClick={() => switchForm()} className="mt-4 text-sm text-gray-500 cursor-pointer">Har du redan ett konto? Logga in här.</p>
        <form
          onSubmit={register}
          className="w-full flex flex-col justify-center items-center text-black"
        >
          <input
            onChange={(e) => setFirstName(e.target.value)}
            className="w-5/6 rounded border mt-4 border-black p-3"
            placeholder="Förnamn"
            type="text"
            autoComplete="given-name"
          />
          <input
            onChange={(e) => setLastName(e.target.value)}
            className="w-5/6 rounded border mt-4 border-black p-3"
            placeholder="Efternamn"
            type="text"
            autoComplete="family-name"
          />
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
            type="password"
            autoComplete="new-password"
          />
          <input
            className="bg-blue-700 w-5/6 rounded mt-4 p-3 text-white cursor-pointer"
            value={"Skapa konto"}
            type="submit"
          />
        </form>
        <h1 className="text-red-500 mt-4 h-6 font-bold">{errorMessage}</h1>
      </div>
  );
};

export default Register;
