import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const ProfileStatus = ({ topList, user, userResult }) => {
  return (
    <div className="w-full flex flex-row justify-around items-center">
      <div className="flex w-1/3 flex-col justify-center items-center">
        <span className="z-10 text-gray-400 ">Poäng</span>
        <span className="text-4xl z-10 text-em-green-dark mt-4">
          <CountUp
            useEasing={false}
            duration={1}
            delay={0.5}
            end={userResult.points}
          />
        </span>
      </div>

      <div className="flex w-1/3 flex-col justify-center items-center">
        <span className="z-10 text-gray-400 ">Placering</span>
        <span className="w-1/2 text-center text-4xl z-10 text-em-green-dark mt-4">
          {
            <CountUp
              useEasing={false}
              duration={1}
              delay={0.5}
              start={100}
              end={
                topList.findIndex(
                  (result) => result.user_email === user.email
                ) + 1
              }
            />
          }
          /{topList.length}
        </span>
      </div>
      <div className="flex w-1/3 flex-col justify-center items-center">
        <span className="z-10 text-gray-400 whitespace-nowrap">
          Bättre än
        </span>
        <span className="text-4xl z-10 text-em-green-dark mt-4">
          <CountUp
            useEasing={false}
            duration={1}
            delay={0.5}
            end={Math.round((topList.length - (topList.findIndex(
                (result) => result.user_email === user.email
              ) + 1))/(topList.length - 1) * 100)}
          />
          %
        </span>
      </div>
    </div>
  );
};

export default ProfileStatus;
