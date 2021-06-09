import { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import context from "../context/context";


const SideResult = ({
  selectedUser,
  userEmail,
  matches,
  setShowSideBar,
  showSideBar,
  rank
}) => {
  const { deadLinePassed } = useContext(context);

  return (
    <>
      <div
        className={`z-30 w-auto min-h-screen md:h-screen fixed top-0 right-0 transform duration-300 transition-all ease-in-out text-[0.5rem] sm:text-xs bg-em-green-dark text-white shadow-lg p-6 sm:p-8 lg:p-12 flex justify-center ${
          showSideBar
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
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
          {selectedUser && matches && (
            <>
              {deadLinePassed || selectedUser.user_email === userEmail ? (
                <>
                <div className="flex justify-start items-center mb-2 sm:mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="flex flex-col text-xxs sm:text-sm">
                    <span className="py-1 border-b border-white">
                      {selectedUser.first_name} {selectedUser.last_name}
                    </span>
                    <div className="flex justify-center py-1 ">
                      <span className="pr-2 border-r border-white">
                        {selectedUser.points} räkor
                      </span>{" "}
                      <span className="pl-2">Plats {rank}</span>
                    </div>
                  </div>
                </div>
                {matches.map((match, index) => (
                  <div
                    className="flex justify-between odd:bg-gray-100 odd:bg-opacity-10"
                    key={index}
                  >
                    <div className="mr-8">
                      <span>{match.id}. </span>
                      {match.home_team} - {match.away_team}
                    </div>
                    <div className="w-12 flex justify-center">
                      <span className="w-1/3">
                        {selectedUser["m" + match.id + "_h"]}
                      </span>
                      <span className="w-1/3">-</span>
                      <span className="w-1/3">
                        {selectedUser["m" + match.id + "_a"]}
                      </span>
                    </div>
                  </div>
                ))}
              </>
              ) : (
                <>
                  {
                    <div className="text-xs md:text-base w-28 md:w-40">
                      När deadline passerat kommer du att kunna se{" "}
                      {selectedUser.first_name}
                      {selectedUser.first_name.slice(-1) === "s"
                        ? ""
                        : "s"}{" "}
                      tips
                    </div>
                  }
                </>
                
              )}
            </>
          )}
        </div>
      </div>

      <AnimatePresence>
        {showSideBar && (
          <motion.div
            key={"black-overlay"}
            animate={{ opacity: 0.7 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            className="fixed z-20 w-screen h-screen top-0 left-0 bg-black"
            onClick={() => setShowSideBar(false)}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideResult;

// usersResult={{
//     h: userMatchResults["m" + match.id + "_h"],
//     a: userMatchResults["m" + match.id + "_a"],
//   }}
