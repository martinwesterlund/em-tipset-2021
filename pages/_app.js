import "../styles/globals.css";
import { useState, useEffect } from "react";
import context from "../context/context";
import { CookiesProvider, useCookies } from "react-cookie";
import Axios from "axios";
import Layout from "../components/Layout";
import backend from "../data/data";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(true);
  const [showReg, setShowReg] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [points, setPoints] = useState(0);
  const [cookies, setCookie] = useCookies(["em-tipset"]);
  const [isCookiesAccepted, setIsCookiesAccepted] = useState()

  const loginWithCookie = async (cookie) => {
    const res = await fetch(`${backend}/`, {
      method: "get",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${cookie}`
      },
    });
    const data = await res.json();
    setUser(data.user)
    setIsLoading(false)
    Router.push("/profil");
  };

  useEffect(() => {
    if (cookies.emTipset21) {
      setIsLoading(true)
      loginWithCookie(cookies.emTipset21);
    }
    else{
      setIsLoading(false)
    }
  }, []);

  // useEffect(() => {
  //   Axios.get(backend, { withCredentials: true })
  //     .then((response) => {
  //       console.log(response.data);
  //       if (response.data.user) {
  //         setUser(response.data.user[0]);
  //         Router.push("./profil");

  //       } else {
  //         setIsLoading(false)
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("check login error", error);
  //     });
  // }, []);

  return (
    <CookiesProvider>
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
          profileMenuOpen,
          setProfileMenuOpen,
          isCookiesAccepted,
          setIsCookiesAccepted
        }}
      >
        {/* <Layout> */}

        <Component {...pageProps} />
        {/* </Layout> */}
      </context.Provider>
    </CookiesProvider>
  );
}

export default MyApp;
