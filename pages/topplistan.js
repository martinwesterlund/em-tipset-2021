import { useContext, useEffect } from "react";
import context from "../context/context";
import backend from "../data/data";
import Header from "../components/Header";
import Router from "next/router";

const topplistan = ({ toplist }) => {
  const { user } = useContext(context);
  useEffect(() => {
    if (!user) {
      Router.push("/");
    }
  }, []);
  return (
    <div className="bg-stripe h-screen p-8 pt-32 ">
      <div className="h-full w-full fixed top-0 left-0 bg-gradient-to-tl from-black opacity-20"></div>
      <Header></Header>
      {user && (<ol className="flex flex-col w-full items-center">
        {toplist.map((item, index) => (
          <li
            key={index}
            className={`flex w-full md:w-1/2 justify-between border-b border-gray-300 ${user.email === item.user_email ? 'text-yellow-500' : 'text-white'}`}
          >
            <h1>{index + 1}</h1>
            <div>
              {item.first_name} {item.last_name}
            </div>
            <h2>{item.points}</h2>
          </li>
        ))}
      </ol>)}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${backend}/user-match-results`);
  const data = await res.json();

  return {
    props: {
      toplist: data,
    },
  };
};

export default topplistan;