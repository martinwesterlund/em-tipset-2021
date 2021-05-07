import { useState, useEffect, useContext } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

import context from "../context/context";
import Router from "next/router";
import LoadingScreen from "../components/LoadingScreen";

const Home = () => {
  const { showLogin, showReg, user, isLoading } = useContext(context);

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
    }
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen></LoadingScreen>}
      <div className="min-h-screen w-screen flex flex-col lg:flex-row ">
        <div className="bg-em-green-dark h-screen lg:w-3/5 xl:w-2/3 text-white flex justify-center items-center relative p-20">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover "
            src="/football3.mp4"
            muted
            loop
            autoPlay
          ></video>
          <div
            id="overlay"
            className=" absolute top-0 left-0 w-full h-full"
          ></div>

          <div className="z-20 w-64 lg:w-160 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start">
              <img
                className="w-20 lg:w-40 mb-4 lg:mb-0 lg:mr-4"
                src="/images/football.svg"
                alt=""
              />
              <h1 className="text-5xl xl:text-7xl font-bold tracking-tight">
                EM-TIPSET <br />
                <span className="text-em-green-light">2021</span>
              </h1>
            </div>
            <p className="text-base lg:text-xl mt-4 w-auto">
              Utmana dina vänner i sommarens stora tävlingshändelse på webben!
            </p>
            <div className="lg:hidden flex justify-center mt-6 md:mt-20">
              {showLogin && <Login></Login>}
              {showReg && <Register></Register>}
            </div>
          </div>
        </div>

        <div
          id="login-section"
          className="hidden lg:flex h-64 lg:h-screen lg:w-2/5 xl:w-1/3 justify-center items-center p-8"
        >
          {showLogin && <Login></Login>}
          {showReg && <Register></Register>}
        </div>
      </div>

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
