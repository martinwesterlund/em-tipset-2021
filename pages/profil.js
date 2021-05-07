import { useEffect, useState, useContext } from "react";
import context from "../context/context";
import Router from "next/router";
import Header from "../components/Header";
import backend from '../data/data'

const profil = ({ user_match_results }) => {
  const { user, setUser, setIsLoading } = useContext(context);
  const [userMatchResult, setUserMatchResult] = useState(null)
 

  useEffect(() => {
    if(user){
      setUserMatchResult(user_match_results.filter((result) => result.user_email === user.email)[0])
    }
  }, [user])

  // useEffect( async () => {

  //   const res = await fetch("http://localhost:3001/profile", {
  //     credentials: 'include',
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })

  //   console.log(res)
  //   if(res.status !== 200){
  //     Router.push('/')
  //   }

  // }, [])
  // useEffect(() => {
  //   if (!user) {
  //     Router.push("/");

  //   } else {
  //     setIsLoading(false)
  //   }
  // }, []);

  return (
    <>
      <Header></Header>
      <div className="bg-stripe flex h-screen justify-center items-center">
        {user && (
          <div className="bg-white p-6">
            <h1>
              {user?.first_name} {user.last_name}
            </h1>
        <h1>{userMatchResult?.points} p</h1>
       
        <h1>Placering {user_match_results.findIndex((result) => result.user_email === user.email ) + 1 }/{user_match_results.length}</h1>
          </div>
        )}
      </div>
    </>
  );
};

export const getStaticProps = async () => {

  const res = await fetch(`${backend}/user-match-results`, {});
  const data = await res.json();

  return {
    props: {
      user_match_results: data,
    },
  };
};

export default profil;
