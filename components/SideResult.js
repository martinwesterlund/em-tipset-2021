import React from "react";

const SideResult = ({ user, matches, setShowSideBar, showSideBar }) => {
  return (
    // <div
    //     className={`lg:hidden z-50 fixed top-0 right-0 transform duration-300 transition-all ease-in-out bg-em-green-dark px-8 h-screen flex justify-center items-center ${
    //       menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
    //     }`}
    //   ></div>
    <div
      className={`z-20 w-auto h-screen md:h-screen fixed top-0 right-0 transform duration-300 transition-all ease-in-out text-xxs sm:text-xs lg:text-base  bg-em-green-dark text-white shadow-lg p-6 sm:p-8 lg:p-12 flex justify-center items-center ${
        showSideBar ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className="flex flex-col">
        <button
          onClick={() => setShowSideBar(false)}
          className="absolute top-6 right-6 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {user && matches && (
        <>
        <div className="text-xl underline">
          {user.first_name}
          {user.first_name.slice(-1) === "s" ? "" : "s"} tips
        </div>
        {matches.map((match, index) => (
          <div className="flex justify-between odd:bg-gray-100 odd:bg-opacity-10" key={index}>
            <div className="mr-8">
            <span>{match.id}. </span> 
              {match.home_team} - {match.away_team}
            </div>
            <div className="w-12 flex justify-center">
               
              <span className="w-1/3">{user["m" + match.id + "_h"]}</span>
              <span className="w-1/3">-</span>
              <span className="w-1/3">{user["m" + match.id + "_a"]}</span>
            </div>
          </div>
        ))}
        </>)}
      </div>
    </div>
  );
};

export default SideResult;

// usersResult={{
//     h: userMatchResults["m" + match.id + "_h"],
//     a: userMatchResults["m" + match.id + "_a"],
//   }}
