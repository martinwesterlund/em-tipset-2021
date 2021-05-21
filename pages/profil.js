import { useEffect, useState, useContext } from "react";
import context from "../context/context";
import Router from "next/router";
import Header from "../components/Header";
import backend from "../data/data";
import ProgressBar from "../components/ProgressBar";
import ProfileInfo from "../components/ProfileInfo";
import ProfileStatus from "../components/ProfileStatus";
import NextMatch from "../components/NextMatch";
import { motion } from "framer-motion";

const profil = ({ user_match_results }) => {
  const { user, setUser, setIsLoading } = useContext(context);
  const [userMatchResult, setUserMatchResult] = useState(null);
  const [topList, setTopList] = useState();
  const [matches, setMatches] = useState();
  const [match, setMatch] = useState();
  const [nextBet, setNextBet] = useState()

  const getMatches = async () => {
    const res = await fetch(`${backend}/fixtures`);
    const data = await res.json();
    setMatches(data);
    setMatch(data.find((match) => match.finished != "yes"));
  };

  const getUsersBet = async () => {
    const res = await fetch(`${backend}/user-match-results`);
    const data = await res.json();
    setTopList(data);
  };

  useEffect(() => {
    getMatches();
  }, []);

  useEffect(() => {
    if (user) {
      getUsersBet();
    }
  }, [user]);

  useEffect(() => {
    if (topList) {
      setUserMatchResult(
        topList.filter((result) => result.user_email === user.email)[0]
      );
      
    }
  }, [topList]);

  useEffect(() => {
    if (!user) {
      Router.push("/");
    }
  }, []);

  return (
    <>
      <Header></Header>
      <div className="bg-stripe flex min-h-screen justify-center items-center py-20 overflow-hidden">
        {/* <div className="h-full w-full z-20 fixed top-0 left-0 bg-gradient-to-tl from-black opacity-20"></div> */}
        {user && topList && userMatchResult && match && matches && (
          <div className="grid grid-rows-8 lg:grid-rows-5 grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 w-full xl:max-w-[1500px] xl:h-[800px] p-4 lg:p-12">
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { ease: "easeOut", duration: 1 },
              }}
              className="bg-white rounded-2xl row-span-1 lg:row-span-3 flex justify-center items-center py-4 px-4 md:px-8"
            >
              <ProfileInfo user={user}></ProfileInfo>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -150 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { ease: "easeOut", duration: 1 },
              }}
              className="bg-white rounded-2xl row-span-2 flex justify-center items-center py-4 px-4 md:px-8"
            >
              <ProfileStatus
                topList={topList}
                user={user}
                userResult={userMatchResult}
              ></ProfileStatus>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { ease: "easeOut", duration: 1 },
              }}
              className="bg-white rounded-2xl row-span-2 lg:row-span-3 flex justify-center items-center py-4 px-4 md:px-8"
            >
              <NextMatch match={match} ></NextMatch>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { ease: "easeOut", duration: 1 },
              }}
              className="bg-white rounded-2xl row-span-2 flex justify-center items-center py-4 px-4 md:px-8"
            >
              <ProgressBar matches={matches}></ProgressBar>
            </motion.div>
          </div>
        )}

        {/* {user && topList && (
          <div className="bg-white p-6">
            <h1>
              {user?.first_name} {user.last_name}
            </h1>
            <h1>{userMatchResult?.points} p</h1>

            <h1>
              Placering{" "}
              {topList.findIndex((result) => result.user_email === user.email) +
                1}
              /{topList.length}
            </h1>
            
          </div>
        )}
        <ProgressBar></ProgressBar> */}
      </div>
    </>
  );
};

export default profil;
