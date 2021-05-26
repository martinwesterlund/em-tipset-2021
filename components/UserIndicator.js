import React from "react";

const UserIndicator = ({ topThree }) => {
  return (
    <div
      className={`hidden absolute ${
        topThree ? " -top-24 md:block animate-bounce" : "-left-16 md:flex animate-bounce-side"
      }  text-white font-bold z-10`}
    >
      <span>DU</span>
      {topThree ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 13l-5 5m0 0l-5-5m5 5V6"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      )}
    </div>
  );
};

export default UserIndicator;
