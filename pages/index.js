import { useState, useEffect, useContext } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

import context from "../context/context";
import Router from "next/router";
import LoadingScreen from "../components/LoadingScreen";
import { motion, AnimatePresence } from "framer-motion";
import CountDown from "../components/CountDown";
const Home = () => {
  const {
    showLogin,
    showReg,
    user,
    isLoading,
    setIsLoading,
    isCookiesAccepted,
    setIsCookiesAccepted,
    showCookieBanner,
    setShowCookieBanner,
    distance,
    deadLinePassed,
  } = useContext(context);
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  useEffect(() => {
    if (user) {
      Router.push("/profil");
    }
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen></LoadingScreen>}
      <div className="min-h-screen w-screen flex flex-col lg:flex-row ">
        <div className="bg-em-green-dark min-h-screen lg:w-3/5 xl:w-2/3 text-white flex justify-center items-center relative p-16 lg:p-20">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover "
            src="/football6.mp4"
            muted
            loop
            autoPlay
          ></video>
          <div
            // id="overlay"
            className=" absolute bg-em-green-light opacity-20 top-0 left-0 w-full h-full"
          ></div>

          <div className="z-20 w-64 md:w-160 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start">
              <motion.div
                initial={{ rotate: 90, scale: 0 }}
                animate={{
                  rotate: 0,
                  scale: 1,
                  transition: {
                    delay: 1,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 300,
                  },
                }}
              >
                <img
                  className="animate-ball-spin w-20 lg:w-40 mb-4 lg:mb-0 lg:mr-4"
                  src="/images/football2.svg"
                  alt=""
                />
              </motion.div>
              <div className="flex flex-col text-5xl xl:text-7xl font-bold tracking-tight">
                <motion.h1
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                  className=""
                >
                  EM-TIPSET
                </motion.h1>

                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 1, delay: 0.5 },
                  }}
                  className="text-em-green-default "
                >
                  2021
                </motion.span>
              </div>
            </div>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 1, delay: 1 },
              }}
              className="hidden md:block w-full text-2xl mt-4"
            >
              Sommarens stora tävlingshändelse på webben!
            </motion.p>

            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 1, delay: 2 },
              }}
              className="hidden md:block text-lg mt-4 lg:mt-2"
            >
              Tippa matcherna och samla räkor - flest räkor vinner!
            </motion.p>

            <div className="lg:hidden flex flex-col items-center justify-center mt-6 sm:mt-12 lg:mt-20">
            {isInfoVisible && (
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
              className="flex flex-col justify-center items-center text-white mb-2 text-xs"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>{" "}
              <h1>Konto skapat</h1>
            </motion.div>
          )}
              {showLogin && <Login setIsInfoVisible={setIsInfoVisible}></Login>}
              {showReg && (
                <Register setIsInfoVisible={setIsInfoVisible}></Register>
              )}
            </div>
            <AnimatePresence></AnimatePresence>
          </div>
        </div>

        <div
          id="login-section"
          className="hidden bg-white lg:flex flex-col h-64 lg:h-screen lg:w-2/5 xl:w-1/3 justify-center items-center px-4 lg:p-8"
        >
          {isInfoVisible && (
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
              className="flex flex-col justify-center items-center text-em-green-default"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>{" "}
              <h1>Konto skapat</h1>
            </motion.div>
          )}
          {showLogin && <Login setIsInfoVisible={setIsInfoVisible}></Login>}
          {showReg && <Register setIsInfoVisible={setIsInfoVisible}></Register>}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: 1, ease: "easeOut" },
          }}
        >
          <CountDown front={true}></CountDown>
        </motion.div>
      </div>

      {/* Cookie banner */}
      {!isCookiesAccepted && showCookieBanner && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0, transition: { duration: 1, delay: 1 } }}
          className="z-40 w-screen text-xs md:text-sm lg:text-base bg-white shadow-top flex flex-col justify-center items-center h-32 lg:h-32 fixed bottom-0 left-0"
        >
          <h1 className="px-8">
            Vi använder Cookies för att optimera din upplevelse till max.
          </h1>
          <div className="flex mt-4">
            <button
              className="bg-em-green-default text-white rounded border mx-2 border-black p-2"
              onClick={() => setIsCookiesAccepted(true)}
            >
              Acceptera allt!
            </button>
            <button
              className="border border-em-green-default rounded text-em-green-default mx-2 p-2"
              onClick={() => setShowCookieBanner(false)}
            >
              Acceptera inget
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Home;
