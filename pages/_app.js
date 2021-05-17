import "../styles/globals.css";
import { useState, useEffect } from "react";
import context from "../context/context";
import Axios from "axios";
import Layout from "../components/Layout";
import backend from '../data/data'
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showReg, setShowReg] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [points, setPoints] = useState(0)


  useEffect(() => {
    Axios.get(backend, { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        if (response.data.user) {
          setUser(response.data.user[0]);
          Router.push("./profil");
          
        } else {
          setIsLoading(false)
        }
      })
      .catch((error) => {
        console.log("check login error", error);
      });
  }, []);

  return (
    <context.Provider
      value={{
        user,
        setUser,
        menuOpen,
        points,
        setPoints,
        setMenuOpen,
        showLogin,
        showReg,
        setShowLogin,
        setShowReg,
        isLoading,
        setIsLoading,
      }}
    >
      {/* <Layout> */}

      <Component {...pageProps} />
      {/* </Layout> */}
    </context.Provider>
  );
}

export default MyApp;
