import "../styles/globals.css";
import { useState, useEffect } from "react";
import context from "../context/context";
import { CookiesProvider, useCookies } from "react-cookie";
import backend from "../data/data";
import Router from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showReg, setShowReg] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [points, setPoints] = useState(0);
  const [cookies, setCookie] = useCookies(["em-tipset"]);
  const [isCookiesAccepted, setIsCookiesAccepted] = useState();
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [distance, setDistance] = useState(false);
  const [deadLinePassed, setDeadLinePassed] = useState();

  const loginWithCookie = async (cookie) => {
    const res = await fetch(`${backend}/`, {
      method: "get",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookie}`,
      },
    });
    const data = await res.json();
    setUser(data.user);
    setIsLoading(false);
    if (Router.pathname === "/") {
      Router.push("/profil");
    } else {
      Router.push(Router.pathname);
    }
  };

  useEffect(() => {
    if (cookies.emTipset21) {
      setIsLoading(true);
      loginWithCookie(cookies.emTipset21);
    } else {
      Router.push("/");
      setShowCookieBanner(true);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (
      new Date("Jun 11, 2021 21:00:00").getTime() - new Date().getTime() <
      0
    ) {
      setDeadLinePassed(true);
    }
  }, []);

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
          setIsCookiesAccepted,
          showCookieBanner,
          setShowCookieBanner,
          distance,
          deadLinePassed,
          setDeadLinePassed,
        }}
      >
        {/* <Layout> */}
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
        </Head>
        <Component {...pageProps} />
        {/* </Layout> */}
      </context.Provider>
    </CookiesProvider>
  );
}

export default MyApp;
