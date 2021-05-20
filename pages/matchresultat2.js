import { useEffect, useState, useContext, useRef } from "react";
import context from "../context/context";
import Router from "next/router";

import MatchBox from "../components/MatchBox";
import backend from "../data/data";
import Header from "../components/Header";

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

  useEffect(() => {
    if (!user) {
      Router.push("/");
    }
  }, []);

  return (
    <>
      <Header></Header>

      <div className="w-screen min-h-screen bg-stripe pt-32 p-6 flex flex-col items-center">
        <div className="h-full w-full fixed top-0 left-0 bg-gradient-to-tl from-black opacity-20"></div>
        <h1 className="text-white md:text-xl mb-8">MATCHRESULTAT</h1>
        {userMatchResults && matches ? (
          <>
            {matches.map((match, index) => (
              <MatchBox
                key={index}
                match={match}
                usersResult={{
                  h: userMatchResults["m" + match.id + "_h"],
                  a: userMatchResults["m" + match.id + "_a"],
                }}
              ></MatchBox>
            ))}
          </>
        ) :
        <div className="w-full h-56 flex flex-col justify-center items-center">
          <img className="w-12 animate-bounce" src="/images/football.svg" alt=""/>
          <span className="text-white">Laddar in matcher...</span>
          </div>}
      </div>
    </>
  );
};

export default matchresultat;
