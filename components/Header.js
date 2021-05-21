import { useState, useContext } from "react";
import context from "../context/context";
import Link from "next/link";
import { useCookies } from 'react-cookie';
import Router from "next/router";
const Header = () => {
  const {
    user,
    setUser,
    menuOpen,
    setMenuOpen,
    profileMenuOpen,
    setProfileMenuOpen,
  } = useContext(context);
  const [cookies, setCookie, removeCookie] = useCookies(['emTipset21']);
  const logOut = () => {
    removeCookie('emTipset21')
    setUser(null)
    setProfileMenuOpen(false)
    Router.push('/')
  }

  // absolute top-0 right-0 bg-em-green-dark w-1/2 h-screen flex justify-center item-center
  return (
    <>
    <header className="h-20 bg-em-green-dark bg-opacity-80 z-20 fixed top-0 left-0 w-full px-6 py-6 flex text-white justify-between items-center">
      <div className="w-28  flex-none justify-center items-center">
        <Link href="/profil">
          <img
            className="w-8 cursor-pointer"
            src="/images/football2.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="hidden flex-grow lg:flex justify-center items-center">
        {user?.role === "user" && (
          <ul className="w-1/2 flex justify-around">
            <Link href="/tips2">
              <li className="cursor-pointer hover:underline">Dina tips</li>
            </Link>
            <Link href="/topplistan">
              <li className="cursor-pointer hover:underline">Topplistan</li>
            </Link>
            <Link href="/matchresultat2">
              <li className="cursor-pointer hover:underline">Matchresultat</li>
            </Link>
            <Link href="/regler">
              <li className="cursor-pointer hover:underline">Regler</li>
            </Link>
          </ul>
        )}
        {user?.role === "admin" && (
          <ul className="w-1/2 flex justify-around">
            <Link href="/admin">
              <li className="cursor-pointer hover:underline">Admin</li>
            </Link>
          </ul>
        )}
      </div>

      <div className="w-28 flex-none flex justify-end items-center">
        <button
          className="flex justify-end items-center outline-none focus:outline-none"
          onClick={() => setProfileMenuOpen(!profileMenuOpen)}
        >
          {user && <h1 className="hidden lg:block">{user.first_name.charAt(0).toUpperCase()}{user.last_name.charAt(0).toUpperCase()}</h1>}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 lg:ml-4"
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
            className={`h-5 w-5 transition-all transform ${profileMenuOpen ? "rotate-180" : "rotate-0"}`}
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
          className="lg:hidden h-8 w-8 ml-2 md:ml-4 outline-none focus:outline-none"
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
        className={`bg-em-green-dark bg-opacity-80 px-8 py-4 z-50 fixed top-20 right-0 outline-none focus:outline-none transform duration-300 transition-all ease-in-out ${
          profileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        Logga ut
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
          className="my-6 cursor-pointer hover:underline"
        >
          Ditt tips
        </li>
      </Link>
      <Link href="/topplistan">
        <li
          onClick={() => setMenuOpen(false)}
          className="my-6 cursor-pointer hover:underline"
        >
          Topplistan
        </li>
      </Link>
      <Link href="/matchresultat2">
        <li
          onClick={() => setMenuOpen(false)}
          className="my-6 cursor-pointer hover:underline"
        >
          Matchresultat
        </li>
      </Link>
      <Link href="/regler">
        <li
          onClick={() => setMenuOpen(false)}
          className="my-6 cursor-pointer hover:underline"
        >
          Regler
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
  </>
  );
};

export default Header;
