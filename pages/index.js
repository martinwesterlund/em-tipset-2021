import { useState, useEffect, useContext } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

import context from "../context/context";
import Router from "next/router";
import LoadingScreen from "../components/LoadingScreen";
import { motion } from "framer-motion"
const Home = () => {
  const { showLogin, showReg, user, isLoading, setIsLoading, isCookiesAccepted, setIsCookiesAccepted } =
    useContext(context);
  const [showCookieBanner, setShowCookieBanner] = useState(true)  

  let [distance, setDistance] = useState(
    new Date("Jun 11, 2021 20:55:00").getTime() - new Date().getTime()
  );

  // setInterval(() => {
  //   let deadline = new Date("Jun 11, 2021 20:55:00").getTime();
  //   let now = new Date().getTime();
  //   setDistance(deadline - now);
  // }, 1000);

  useEffect(() => {
    if (user) {
      Router.push("/profil");
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen></LoadingScreen>}
      <div className="min-h-screen w-screen flex flex-col lg:flex-row ">
        <div className="bg-em-green-dark min-h-screen lg:w-3/5 xl:w-2/3 text-white flex justify-center items-center relative p-8 lg:p-20">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover "
            src="/football3.mp4"
            muted
            loop
            autoPlay
          ></video>
          <div
            // id="overlay"
            className=" absolute bg-em-green-light opacity-20 top-0 left-0 w-full h-full"
          ></div>

          <div className="z-20 w-64 lg:w-160 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start">
              <img
                className="w-20 lg:w-40 mb-4 lg:mb-0 lg:mr-4"
                src="/images/football2.svg"
                alt=""
              />
              <h1 className="text-5xl xl:text-7xl font-bold tracking-tight">
                EM-TIPSET <br />
                <span className="text-em-green-default">2021</span>
              </h1>
            </div>
            <p className="hidden md:block text-base lg:text-xl mt-4 w-auto">
              Utmana dina vänner i sommarens stora tävlingshändelse på webben!
            </p>
            <div className="lg:hidden flex justify-center p-8 mt-2 lg:mt-20">
              {showLogin && <Login></Login>}
              {showReg && <Register></Register>}
            </div>
          </div>
        </div>

        <div
          id="login-section"
          className="hidden bg-white lg:flex h-64 lg:h-screen lg:w-2/5 xl:w-1/3 justify-center items-center px-4 lg:p-8"
        >
          {showLogin && <Login></Login>}
          {showReg && <Register></Register>}
        </div>
      </div>

      {/* Cookie banner */}
      {!isCookiesAccepted && showCookieBanner &&(
        <motion.div initial={{y: '100%'}} animate={{ y: 0, transition: {duration: 1, delay: 1} }} className="z-50 w-screen text-xs md:text-sm lg:text-base bg-white border-t border-em-green-default flex flex-col justify-center items-center h-32 lg:h-64 fixed bottom-0 left-0">
          <h1 className="">Vi använder Cookies för att optimera din upplevelse till max.</h1>
          <div className="flex mt-4">
          <button className="bg-em-green-default text-white rounded border mx-2 border-black p-2" onClick={() => setIsCookiesAccepted(true)}>Acceptera allt!</button>
          <button className="border border-em-green-default rounded text-em-green-default mx-2 p-2" onClick={() => setShowCookieBanner(false)}>Acceptera inget</button>
          </div>
        </motion.div>
      )}
      {/* <div
            style={{ minWidth: "160px" }}
            className="text-white h-40 w-40 bg-red-900 rounded-full z-30 flex justify-center items-center flex-col"
          >
            <span>{Math.floor(distance / (1000 * 60 * 60 * 24))} dagar, </span>
            <span>
              {Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
              )}{" "}
              h,{" "}
            </span>
            <span>
              {Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))} min,{" "}
            </span>
            <span>{Math.floor((distance % (1000 * 60)) / 1000)} sek</span>
          </div> */}
    </>
  );
};

export default Home;
