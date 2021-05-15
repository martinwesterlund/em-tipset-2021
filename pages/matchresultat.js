import { useEffect, useState, useContext } from "react";
import context from "../context/context";
import Router from "next/router";

import MatchBox from "../components/MatchBox";
import backend from "../data/data";
import Header from "../components/Header";

const matchresultat = ({ matches, user_match_results }) => {
  console.log(user_match_results)
  const { user, setUser, setIsLoading } = useContext(context);

  const [userMatchResults, setUserMatchResults] = useState(null);

  useEffect(() => {
    if (user) {
      setUserMatchResults(
        user_match_results.filter(
          (result) => result.user_email === user.email
        )[0]
      );
    }
  }, []);

  useEffect(() => {
    if (!user) {
      Router.push("/");
    }
  }, []);

  return (
    <>
      <Header></Header>
      
        <div className="w-screen min-h-screen bg-stripe pt-32 p-6 flex flex-col items-center">
        <div className="h-full w-full fixed top-0 left-0 bg-gradient-to-tl from-black opacity-20"> 
          </div>
          <h1 className="text-white">MATCHRESULTAT</h1>
          {userMatchResults && (
            <>
          {matches.map((match, index) => (
            <MatchBox key={index} match={match} usersResult={{h: userMatchResults['m'+ match.id + '_h'], a: userMatchResults['m'+ match.id + '_a']}}></MatchBox>
          ))}
          </>)}
        </div>
      
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${backend}/fixtures`);
  const data = await res.json();
  const res2 = await fetch(`${backend}/user-match-results`);
  const data2 = await res2.json();
  return {
    props: {
      matches: data,
      user_match_results: data2,
    },
  };
};

export default matchresultat;
