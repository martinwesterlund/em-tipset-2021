import { useState, useContext, useEffect } from "react";
import context from "../context/context";
import backend from "../data/data";
import Header from "../components/Header";
import Router from "next/router";
import SideResult from "../components/SideResult";
import Medal from "../components/Medal";
import { motion } from "framer-motion";

const topplistan = () => {
  const { user } = useContext(context);
  const [topList, setTopList] = useState();
  const [selectedUser, setSelectedUser] = useState();
  const [showSideBar, setShowSideBar] = useState();
  const [matches, setMatches] = useState();

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

  const showSideResult = (email) => {
    setSelectedUser(topList.filter((user) => user.user_email === email)[0]);
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
    <div className="h-screen p-6 pt-32 flex justify-center ">
      {/* <div className="h-full w-full fixed top-0 left-0 bg-gradient-to-tl from-black opacity-20 flex items-center"></div> */}
      <Header></Header>
      
        <SideResult
          user={selectedUser}
          matches={matches}
          setShowSideBar={setShowSideBar}
          showSideBar={showSideBar}
        ></SideResult>
      
      {user && topList && (
        <div className="w-full md:h-80 md:w-160 lg:w-240 flex flex-col">
          <div className="flex md:min-h-full flex-col md:flex-row justify-center items-center md:items-end w-full">
            <motion.button
              whileHover={{scale: 1.02}}
              onClick={() => showSideResult(topList.slice(0, 1)[0].user_email)}
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              }}
              className="cursor-pointer w-full m-2 lg:m-4 h-32 md:h-64 bg-white rounded-2xl flex md:flex-col justify-center items-center relative border-4 border-yellow-300"
            >
              <Medal value={1}></Medal>
              <div className="flex flex-col">
                <span className="w-full p-1 capitalize">
                  {topList[0].first_name} {topList[0].last_name}
                </span>
                <div className="w-full h-px bg-gray-400"></div>
                <span className="p-1">{topList[1].points} räkor</span>
              </div>
            </motion.button>
            <motion.button
            whileHover={{scale: 1.02}}
              onClick={() => showSideResult(topList.slice(1, 2)[0].user_email)}
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.1, ease: "easeOut" },
              }}
              className={`w-full h-32 md:h-48 bg-white m-2 lg:m-4 rounded-2xl flex md:flex-col justify-center items-center relative border-4 border-gray-100`}
            >
              <Medal value={2}></Medal>
              <div className="flex flex-col">
                <span className="w-full p-1 capitalize">
                  {topList[1].first_name} {topList[1].last_name}
                </span>
                <div className="w-full h-px bg-gray-400"></div>
                <span className="p-1">{topList[1].points} räkor</span>
              </div>
            </motion.button>
            <motion.button
            whileHover={{scale: 1.02}}
              onClick={() => showSideResult(topList.slice(2, 3)[0].user_email)}
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2, ease: "easeOut" },
              }}
              className="w-full m-2 lg:m-4 h-32 bg-white rounded-2xl flex md:flex-col justify-center items-center relative border-4 border-yellow-500"
            >
              <Medal value={3}></Medal>
              <div className="flex flex-col">
                <span className="w-full p-1 capitalize">
                  {topList[2].first_name} {topList[2].last_name}
                </span>
                <div className="w-full h-px bg-gray-400"></div>
                <span className="p-1">{topList[2].points} räkor</span>
              </div>
            </motion.button>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col justify-center items-center w-full md:px-2 lg:px-4"
          >
            {topList.slice(3).map((user, index) => (
              <motion.button
              whileHover={{scale: 1.02}}
                onClick={() => showSideResult(user.user_email)}
                variants={item}
                key={index}
                className="w-full m-2 lg:m-4 h-32 bg-white rounded-2xl flex flex-col md:flex-row justify-center items-center relative"
              >
                <Medal value={index + 4}></Medal>
                <div className="flex flex-col">
                  <span className="w-full p-1 capitalize">
                    {user.first_name} {user.last_name}
                  </span>
                  <div className="w-full h-px bg-gray-400"></div>
                  <span className="p-1">{user.points} räkor</span>
                </div>
              </motion.button>
            ))}
          </motion.div>
          
        </div>
      )}
    </div>
  );
};

export default topplistan;
