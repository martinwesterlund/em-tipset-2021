import { useState, useContext, useRef } from "react";
import context from "../context/context";
const MatchBox = ({ match, usersResult }) => {
  const { user, setUser, setIsLoading, points, setPoints } =
    useContext(context);

  

  const calculatePoints = () => {
    let userBet;
    let result;
    if (usersResult.h > usersResult.a) {
      userBet = "1";
    } else if (usersResult.h < usersResult.a) {
      userBet = "2";
    } else {
      userBet = "x";
    }
    if (match.home_score > match.away_score) {
      result = "1";
    }
    if (match.home_score < match.away_score) {
      result = "2";
    }
    if (match.home_score === match.away_score && match.home_score != null) {
      result = "x";
    }

    let stars = [];
    if (match.home_score === usersResult.h) {
      stars.push(true);
    }
    if (match.away_score === usersResult.a) {
      stars.push(true);
    }
    if (userBet === result) {
      stars.push(true);
    }
    return stars;
  };
  return (
    <div className="w-full md:w-160 lg:w-192 relative bg-white rounded-2xl flex flex-col justify-center p-6 m-3">
      <div className="flex">
        <div className="w-1/3 md:w-2/5 flex flex-col justify-center items-center">
          <img
            className="w-12 h-12 rounded-full object-cover shadow-md"
            src={`/images/flags/${match.home_team.toLowerCase()}.svg`}
            alt=""
          />
          <h2 className="mt-4 text-xs sm:text-base">{match.home_team}</h2>
        </div>

        <div className="w-1/3 md:w-1/5 flex text-2xl md:text-3xl justify-center items-center">
          {match.home_score} - {match.away_score}
        </div>
        <div className="w-1/3 md:w-2/5 flex flex-col justify-center items-center">
          <img
            className="w-12 h-12 rounded-full object-cover shadow-md"
            src={`/images/flags/${match.away_team.toLowerCase()}.svg`}
            alt=""
          />
          <h2 className="mt-4 text-xs sm:text-base">{match.away_team}</h2>
        </div>
      </div>

      <div className="flex w-full justify-start items-center mx-auto relative mt-2 text-em-green-default text-xs sm:text-base border-t border-gray-200 pt-2">
        <h2 className="w-1/3 md:w-2/5 text-center">Ditt tips</h2>
        <div className="w-1/3 md:w-1/5 flex justify-center">
          <h2 className="">{usersResult.h}</h2>
          <span className="mx-4"> - </span>
          <h2>{usersResult.a}</h2>
        </div>
      </div>
      <div className="absolute left-2 top-2 md:left-4 md:top-4 bg-em-green-default w-7 h-7 rounded-full border-2 border-em-green-dark flex justify-center items-center text-white">
        <h1 className="mt-px ml-px">{match.id}</h1>
      </div>
      <div  className="absolute right-2 bottom-2 flex">
        {calculatePoints().map((shrimp, index) => (
          <img key={index} className="w-8 h-8" src="/images/shrimp.svg" alt="" />
        ))}
      </div>
    </div>
  );
};

export default MatchBox;
