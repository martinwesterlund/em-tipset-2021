import { useState, useContext } from "react";
import context from "../context/context";
import Link from "next/link";

const Header = () => {
  const { user, setUser, menuOpen, setMenuOpen } = useContext(context);

  return (
    <header className="bg-em-green-dark bg-opacity-80 z-20 fixed top-0 left-0 w-full px-6 py-5 flex text-white justify-between items-center">
      <div className="w-12  flex-none justify-center items-center">
        <Link href="/profil">
          <img
            className="w-8 cursor-pointer"
            src="/images/football.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="hidden flex-grow lg:flex justify-center items-center">
        {user?.role === "user" && (
          <ul className="w-1/2 flex justify-around">
            <Link href="/tips2">
              <li className="cursor-pointer hover:underline">Ditt tips</li>
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
        {user?.role === 'admin' && (
          <ul className="w-1/2 flex justify-around">
            <Link href="/admin">
              <li className="cursor-pointer hover:underline">Admin</li>
            </Link>
          </ul>
        )}
      </div>
      <div className="w-24 lg:w-12 flex-none flex justify-end items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
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
          className="lg:hidden h-8 w-8 ml-4"
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
      </div>
    </header>
  );
};

export default Header;
