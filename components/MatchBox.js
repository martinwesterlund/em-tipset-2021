import { useState } from "react";

const MatchBox = ({ match, usersResult }) => {
  const calculatePoints = () => {
    let stars = [false, false, false];
    if (match.home_score === usersResult.h && usersResult.h != null) {
      stars[0] = true;
    }
    if (match.away_score === usersResult.a && usersResult.a != null) {
      stars[1] = true;
    }
    if (
      match.home_score === usersResult.h &&
      match.away_score === usersResult.a &&
      ((usersResult.h && usersResult.h != null) || usersResult.a != null)
    ) {
      stars[2] = true;
    }
    return stars;
  };
  return (
    <div className="w-full md:w-160 relative bg-white rounded flex flex-col justify-center py-6 px-6 m-3">
      <div className="flex">
        <div className="w-2/5 flex flex-col justify-center items-center">
          <img
            className="w-12 h-12 rounded-full object-cover shadow-md"
            src={`/images/flags/${match.home_team.toLowerCase()}.svg`}
            alt=""
          />
          <h2 className="mt-4">{match.home_team}</h2>
        </div>

        <div className="w-1/5 flex text-3xl justify-center items-center">
          {match.home_score} - {match.away_score}
        </div>
        <div className="w-2/5 flex flex-col justify-center items-center">
          <img
            className="w-12 h-12 rounded-full object-cover shadow-md"
            src={`/images/flags/${match.away_team.toLowerCase()}.svg`}
            alt=""
          />
          <h2 className="mt-4">{match.away_team}</h2>
        </div>
      </div>

      <div className="flex w-full justify-start items-center mx-auto relative mt-2 text-em-green-default border-t border-gray-200 pt-2">
        <h2 className="w-2/5 text-center">Ditt tips</h2>
        <div className="w-1/5 flex justify-center">
          <h2 className="">{usersResult.h}</h2>
          <span className="mx-4"> - </span>
          <h2>{usersResult.a}</h2>
        </div>
      </div>
      <div className="absolute left-4 top-4 bg-em-green-default w-7 h-7 rounded-full border-2 border-em-green-light flex justify-center items-center text-white">
        <h1 className="mt-px ml-px">{match.id}</h1>
      </div>
      <div className="absolute right-4 bottom-4 flex">
        {calculatePoints().map((star, index) =>
          star ? (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ) : (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          )
        )}
      </div>
    </div>
  );
};

export default MatchBox;
