import { useState, useContext } from "react";
import context from "../context/context";
import Link from "next/link";
import { useCookies } from "react-cookie";
import Router from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import CountDown from "./CountDown";

const Header = () => {
  const {
    user,
    setUser,
    menuOpen,
    setMenuOpen,
    profileMenuOpen,
    setProfileMenuOpen,
    deadLinePassed,
    setIsLoading,
    setShowCookieBanner
  } = useContext(context);
  const [cookies, setCookie, removeCookie] = useCookies(["emTipset21"]);
  const logOut = () => {
    removeCookie("emTipset21");
    setUser(null);
    setProfileMenuOpen(false);
    Router.push("/");
    setIsLoading(false)
    setShowCookieBanner(true)
  };


  return (
    <>
      <header className="h-20 bg-em-green-dark bg-opacity-80 z-20 fixed top-0 left-0 w-full p-4 md:p-6 flex text-white justify-between items-center">
        <div className="absolute flex justify-center items-center">
          <Link href="/profil">
            {/* <img
              className="w-8 cursor-pointer"
              src="/images/football2.svg"
              alt=""
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 cursor-pointer rounded p-2 hover:bg-em-green-dark "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
          {/* <CountDown></CountDown> */}
        </div>

        <div className="hidden flex-grow lg:flex justify-center items-center">
          <ul className="w-full mx-32 lg:mx-64 flex justify-around">
            <Link href="/tips2">
              <li className="cursor-pointer rounded p-2 hover:bg-em-green-dark ">Dina tips</li>
            </Link>
            <Link href="/topplistan">
              <li className="cursor-pointer rounded p-2 hover:bg-em-green-dark ">Topplistan</li>
            </Link>
            <Link href="/matchresultat2">
              <li className="cursor-pointer rounded p-2 hover:bg-em-green-dark ">Matchresultat</li>
            </Link>
            <Link href="/regler">
              <li className="cursor-pointer rounded p-2 hover:bg-em-green-dark ">Regler</li>
            </Link>
            {user?.role === "admin" && (
            <Link href="/admin">
              <li className="cursor-pointer rounded p-2 hover:bg-em-green-dark ">Admin</li>
            </Link>
          )}
          </ul>

          
        </div>

        <div className="absolute right-4 flex-none flex justify-end items-center">
          <button
            className="p-2 rounded flex justify-end items-center outline-none focus:outline-none hover:bg-em-green-dark"
            onClick={() => setProfileMenuOpen(!profileMenuOpen)}
          >
            {user && (
              <>
              <h1 className="text-xs md:hidden">
                {user.first_name.charAt(0).toUpperCase()}
                {user.last_name.charAt(0).toUpperCase()}
              </h1>
              <h1 className="hidden md:block text-xs md:text-base ">
                {user.first_name}
              </h1>
              </>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 ml-2 lg:ml-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transition-all transform ${
                profileMenuOpen ? "rotate-180" : "rotate-0"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            className="lg:hidden h-12 w-12 p-2 outline-none rounded focus:outline-none hover:bg-em-green-dark"
            onClick={() => setMenuOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Profile Menu */}

        <button
          onClick={() => logOut()}
          className={`bg-em-green-dark bg-opacity-80 p-4 rounded-bl z-50 fixed top-20 right-0 outline-none focus:outline-none transform duration-300 transition-all ease-in-out  ${
            profileMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <h1 className="hover:bg-em-green-dark p-2 rounded">Logga ut</h1>
          
        </button>
      </header>

      {/* Side Menu */}

      <div
        className={`lg:hidden z-50 fixed top-0 right-0 transform duration-300 transition-all ease-in-out bg-em-green-dark text-white px-8 h-screen flex justify-center items-center ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <ul className="flex flex-col justify-center items-end text-xl">
          <Link href="/tips2">
            <li
              onClick={() => setMenuOpen(false)}
              className="my-6 flex items-center cursor-pointer hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path
                  fillRule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Dina tips</span>
            </li>
          </Link>
          <Link href="/topplistan">
            <li
              onClick={() => setMenuOpen(false)}
              className="my-6 flex items-center cursor-pointer hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <span>Topplistan</span>
            </li>
          </Link>
          <Link href="/matchresultat2">
            <li
              onClick={() => setMenuOpen(false)}
              className="my-6 flex items-center cursor-pointer hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                />
              </svg>
              <span>Matchresultat</span>
            </li>
          </Link>
          <Link href="/regler">
            <li
              onClick={() => setMenuOpen(false)}
              className="my-6 flex flex-items cursor-pointer hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
              </svg>
              <span>Regler</span>
            </li>
          </Link>
        </ul>
        <button
          className="absolute top-6 right-6 h-8 w-8 outline-none focus:outline-none"
          onClick={() => setMenuOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key={"black-overlay"}
            animate={{ opacity: 0.7 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            className="fixed z-20 w-screen h-screen top-0 left-0 bg-black"
            onClick={() => setMenuOpen(false)}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
