import { useState, useContext, useEffect } from "react";
import context from "../context/context";
import backend from "../data/data";
import Header from "../components/Header";
import Router from "next/router";
import SideResult from "../components/SideResult";
import Medal from "../components/Medal";
import { motion } from "framer-motion";
import LoadingElement from "../components/LoadingElement";
import { GiShrimp } from "react-icons/gi";
import { CookiesProvider, useCookies } from "react-cookie";
import Head from "next/head";

const topplistan = () => {
  const { user } = useContext(context);
  const [topList, setTopList] = useState();
  const [selectedUser, setSelectedUser] = useState();
  const [showSideBar, setShowSideBar] = useState();
  const [matches, setMatches] = useState();
  const [rank, setRank] = useState();
  const [cookies, setCookie] = useCookies(["em-tipset"]);

  const getResults = async () => {
    const res = await fetch(`${backend}/user-match-results`);
    const data = await res.json();
    setTopList(data);
  };

  const getMatches = async () => {
    const res = await fetch(`${backend}/fixtures`);
    const data = await res.json();
    setMatches(data);
  };

  // useEffect(() => {
  //   if (!user) {
  //     Router.push("/");
  //   }
  // }, []);

  useEffect(() => {
    getResults();
    getMatches();
  }, []);

  const showSideResult = (email, rank) => {
    setSelectedUser(topList.filter((user) => user.user_email === email)[0]);
    setRank(rank);
    setShowSideBar(true);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div
      className={`w-screen min-h-screen bg-stripe pt-32 p-6 flex flex-col items-center ${
        showSideBar ? "overflow-hidden" : ""
      }`}
    >
      <Head>
        <title>EM-tipset 2021 | Topplistan</title>
        <meta property="og:title" content="Topplistan" key="title" />
      </Head>
      <Header></Header>
      <h1 className="text-white md:text-xl mb-8 md:mb-12">TOPPLISTAN</h1>
      {user && (
        <SideResult
          selectedUser={selectedUser}
          userEmail={user.email}
          matches={matches}
          setShowSideBar={setShowSideBar}
          showSideBar={showSideBar}
          rank={rank}
        ></SideResult>
      )}

      {user && topList ? (
        <div className="w-full md:h-80 md:w-160 xl:w-240 flex flex-col text-xs sm:text-sm md:text-base">
          <div className="hidden md:flex md:min-h-full flex-col md:flex-row lg:px-2 justify-center items-center md:items-end w-full">
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() =>
                showSideResult(topList.slice(1, 2)[0]?.user_email, 2)
              }
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.1, ease: "easeOut" },
              }}
              className={`w-full px-2 h-32 md:h-56 bg-white m-2 rounded-xl flex md:flex-col justify-center items-center relative ${
                topList[1]?.user_email === user.email &&
                "animate-pulse"
              } `}
            >
              <Medal value={2}></Medal>
              <div className="flex flex-col">
                <span className="w-full p-1 capitalize">
                  {topList[1]?.first_name} {topList[1]?.last_name}
                </span>
                <div className="w-32 mx-auto h-px bg-gray-400"></div>
                <div className="flex justify-center items-center p-2">
                  <span className="mr-2 md:text-3xl">
                    {topList[1]?.points}{" "}
                  </span>
                  <GiShrimp className="text-red-400 w-6 h-6 md:w-12 md:h-12" />
                </div>
              </div>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() =>
                showSideResult(topList.slice(0, 1)[0]?.user_email, 1)
              }
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              }}
              className={`cursor-pointer w-full px-2 m-2  h-32 md:h-64 bg-white rounded-xl flex md:flex-col justify-center items-center relative ${
                topList[0]?.user_email === user.email &&
                "animate-pulse"
              }`}
            >
              <Medal value={1}></Medal>
              <div className="flex flex-col">
                <span className="w-full  p-1 capitalize">
                  {topList[0]?.first_name} {topList[0]?.last_name}
                </span>
                <div className="w-32 mx-auto h-px bg-gray-400"></div>
                <div className="flex justify-center items-center p-2">
                  <span className="mr-2 md:text-3xl">
                    {topList[0]?.points}{" "}
                  </span>
                  <GiShrimp className="text-red-400 w-6 h-6 md:w-12 md:h-12" />
                </div>
              </div>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() =>
                showSideResult(topList.slice(2, 3)[0]?.user_email, 3)
              }
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2, ease: "easeOut" },
              }}
              className={`w-full m-2 px-2 h-32 md:h-48 bg-white rounded-xl flex md:flex-col justify-center items-center relative ${
                topList[2]?.user_email === user.email &&
                "animate-pulse"
              }`}
            >
              
              <Medal value={3}></Medal>
              <div className="flex flex-col">
                <span className="w-full p-1 capitalize">
                  {topList[2]?.first_name} {topList[2]?.last_name}
                </span>
                <div className="w-32 mx-auto h-px bg-gray-400"></div>
                <div className="flex justify-center items-center p-2">
                  <span className="mr-2 md:text-3xl">
                    {topList[2]?.points}{" "}
                  </span>
                  <GiShrimp className="text-red-400 w-6 h-6 md:w-12 md:h-12" />
                </div>
              </div>
            </motion.button>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col justify-center items-center w-full md:px-2 lg:px-4"
          >
            {topList.slice(0, 3).map((listItem, index) => (
              <motion.button
                whileHover={{ scale: 1.02 }}
                onClick={() => showSideResult(listItem.user_email, index + 1)}
                variants={item}
                key={index}
                className={` w-full m-2 h-32 bg-white rounded-xl flex md:hidden flex-col md:flex-row justify-center items-center relative ${
                  listItem.user_email === user.email &&
                  "animate-pulse"
                }`}
              >
                
                <Medal value={index + 1}></Medal>
                <div className="flex flex-col">
                  <span className="w-full p-1 capitalize">
                    {listItem.first_name} {listItem.last_name}
                  </span>
                  <div className="w-32 mx-auto h-px bg-gray-400"></div>
                  <div className="flex justify-center items-center p-2">
                    <span className="mr-2">{listItem.points} </span>
                    <GiShrimp className="text-red-400 w-6 h-6" />
                  </div>
                </div>
              </motion.button>
            ))}
            {topList.slice(3).map((listItem, index) => (
              <motion.button
                whileHover={{ scale: 1.02 }}
                onClick={() => showSideResult(listItem.user_email, index + 4)}
                variants={item}
                key={index}
                className={`w-full m-2 h-32 bg-white rounded-xl flex flex-col md:flex-row justify-center items-center relative ${
                  listItem.user_email === user.email &&
                  "animate-pulse"
                }`}
              >
                <Medal value={index + 4}></Medal>
                <div className="flex flex-col">
                  <span className="w-full p-1 capitalize">
                    {listItem.first_name} {listItem.last_name}
                  </span>
                  <div className="w-32 mx-auto h-px bg-gray-400"></div>
                  <div className="flex justify-center items-center p-2">
                    <span className="mr-2">{listItem.points} </span>
                    <GiShrimp className="text-red-400 w-6 h-6" />
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      ) : (
        <LoadingElement text={"Laddar topplistan..."}></LoadingElement>
      )}
    </div>
  );
};

export default topplistan;
