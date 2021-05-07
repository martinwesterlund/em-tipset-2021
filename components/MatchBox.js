import React from "react";

const MatchBox = ({ match }) => {
  console.log(match);
  return (
    <div
      key={match.id}
      className="w-160 h-60 bg-white flex flex-col py-6 m-3"
    >
      <div className="flex">
        <div className="w-2/5 flex flex-col justify-center items-center">
          <img
            className="w-12 h-12 rounded-full object-cover shadow-md"
            src={`/images/flags/${match.home_team.toLowerCase()}.svg`}
            alt=""
          />
          <h2 className="mt-4">{match.home_team}</h2>
        </div>

        <div className="w-1/5 flex text-3xl justify-center items-center">{match.home_score || "0"} - {match.away_score || "0"} </div>
        <div className="w-2/5 flex flex-col justify-center items-center">
          <img
            className="w-12 h-12 rounded-full object-cover shadow-md"
            src={`/images/flags/${match.away_team.toLowerCase()}.svg`}
            alt=""
          />
          <h2 className="mt-4">{match.away_team}</h2>
        </div>
      </div>
      
      <div className="flex w-full justify-center relative mt-12 text-em-green-default">
        <h2 className="absolute left-12">Ditt tips</h2>
        <h2>{match.home_score || "0"}</h2>
        <span className="mx-4"> - </span>
        <h2>{match.away_score || "0"}</h2>
      </div>
      
    </div>
  );
};

export default MatchBox;
