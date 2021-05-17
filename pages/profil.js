import { useEffect, useState, useContext } from "react";
import context from "../context/context";
import Router from "next/router";
import Header from "../components/Header";
import backend from "../data/data";

const profil = ({ user_match_results }) => {
  const { user, setUser, setIsLoading } = useContext(context);
  const [userMatchResult, setUserMatchResult] = useState(null);
  const [topList, setTopList] = useState();

  const getUsersBet = async () => {
    const res = await fetch(`${backend}/user-match-results`);
    const data = await res.json();
    setTopList(data);
  };

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
      <div className="bg-stripe flex h-screen justify-center items-center">
        <div className="h-full w-full fixed top-0 left-0 bg-gradient-to-tl from-black opacity-20"></div>
        {user && topList && (
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
      </div>
    </>
  );
};

export default profil;
