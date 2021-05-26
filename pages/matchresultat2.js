import { useEffect, useState, useContext, useRef } from "react";
import context from "../context/context";
import Router from "next/router";

import MatchBox from "../components/MatchBox";
import backend from "../data/data";
import Header from "../components/Header";
import { motion, AnimatePresence } from "framer-motion";
import LoadingElement from "../components/LoadingElement";

const matchresultat = () => {
  const { user, setUser, setIsLoading, points } = useContext(context);

  const [userMatchResults, setUserMatchResults] = useState();
  const [allResults, setAllResults] = useState();
  const [matches, setMatches] = useState();

  const getMatches = async () => {
    const res = await fetch(`${backend}/fixtures`);
    const data = await res.json();
    setMatches(data);
  };

  const getUserMatchResults = async () => {
    const res = await fetch(`${backend}/user-match-results`);
    const data = await res.json();
    setAllResults(data);
  };

  const filterUsersResults = async () => {
    if (user && allResults) {
      setUserMatchResults(
        allResults.filter((result) => result.user_email === user.email)[0]
      );
    }
  };

  useEffect(() => {
    getUserMatchResults();
    getMatches();
  }, []);

  useEffect(() => {
    filterUsersResults();
  }, [allResults]);

  // useEffect(() => {
  //   if (!user) {
  //     Router.push("/");
  //   }
  // }, []);

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
    hidden: { opacity: 0, y: -100 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      <Header></Header>

      <div className="w-screen min-h-screen bg-stripe pt-32 p-6 flex flex-col items-center">
        {/* <div className="h-full w-full fixed top-0 left-0 bg-gradient-to-tl from-black opacity-20"></div> */}
        <h1 className="text-white md:text-xl mb-8">MATCHRESULTAT</h1>
        {userMatchResults && matches ? (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full flex flex-col items-center mb-20"
          >
            {matches.map((match, index) => (
              <motion.div variants={item} key={index} className="w-full md:w-160 lg:w-192 relative bg-white rounded-xl flex flex-col justify-center p-6 m-2">
                <MatchBox
                  match={match}
                  usersResult={{
                    h: userMatchResults["m" + match.id + "_h"],
                    a: userMatchResults["m" + match.id + "_a"],
                  }}
                ></MatchBox>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <LoadingElement text={'Laddar resultat...'}></LoadingElement>
        )}
      </div>
    </>
  );
};

export default matchresultat;
