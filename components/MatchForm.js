import React from "react";

const handleChange = (e) => {
    let value = Number(e.target.value);
    setUsersBet({
      ...usersBet,
      [e.target.name]: value,
    });
  };

const MatchForm = ({ match, setUsersBet }) => {
  return (
    <div className="w-full md:w-160 lg:w-192 relative bg-white rounded-2xl flex justify-center items-center p-6 m-1">
      <div className="w-1/3 flex flex-col justify-center items-center">
        <div>{match.home_team}</div>
        <img
          className="w-8 h-8 mt-2 rounded-full object-cover shadow-md"
          src={`/images/flags/${match.home_team.toLowerCase()}.svg`}
          alt=""
        />
        <input
          name={`m${match.id}_h`}
          onChange={(e) => handleChange(e)}
          className="w-12 mt-4 px-2 border-l border-r text-center border-gray-300"
          type="number"
          min="0"
          value={match.h}
        />
      </div>
      <div className="mx-6">-</div>
      <div className="w-1/3 flex flex-col justify-center items-center">
        <div>{match.away_team}</div>
        <img
          className="w-8 h-8 mt-2 rounded-full object-cover shadow-md"
          src={`/images/flags/${match.away_team.toLowerCase()}.svg`}
          alt=""
        />
        <input
          name={`m${match.id}_a`}
          onChange={(e) => handleChange(e)}
          className="w-12 mt-4 px-2 border-l border-r text-center border-gray-300"
          type="number"
          min="0"
          value={match.a}
        />
      </div>
    </div>
  );
};

export default MatchForm;

// <div
//   className="w-1/2 bg-white flex items-center p-2 m-4"
//   key={match.id}
// >
//   <span>{match.home_team}</span>
//   <span>-</span>
//   <span>{match.away_team}</span>

//   <span></span>
//   <input
//     name={`m${match.id}_h`}
//     onChange={(e) => handleChange(e)}
//     className="w-20 p-2 border text-center border-red-300"
//     type="number"
//     min="0"
//     value={match.h}
//   />
//   <input
//     name={`m${match.id}_a`}
//     onChange={(e) => handleChange(e)}
//     className="w-20 p-2 border text-center border-red-300"
//     type="number"
//     min="0"
//     value={match.a}
//   />

//   <span>{set1X2(match)}</span>
// </div>
