import { useEffect, useState } from "react";
import backend from "../data/data";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const ProgressBar = ({ matches }) => {
  return (
    <div className="w-full flex justify-center">
      {matches && (
        <div className="flex flex-col justify-center items-center w-full">
          <span className="text-xs md:text-lg text-em-green-dark">
            Tävlingstid som gått
          </span>

      {/* .box */}
          {/* <div className="w-full h-full flex items-center justify-center relative">
            <div className="absolute ">
            <CountUp
                useEasing={false}
                duration={1}
                delay={0.5}
                end={Math.round(
                  (matches.filter((match) => match.finished === "yes").length /
                    matches.length) *
                    100
                )}
              />
            </div>
            <svg className="w-[250px] h-[250px] transform -rotate-90"> 
              <circle fill="none" stroke="lightGreen" strokeWidth="10" className="" r="100" cx="125" cy="125"></circle>
              <circle fill="none" stroke="black" strokeWidth="10" strokeDasharray="630" strokeDashoffset={630 - ((Math.round(matches.filter((match) => match.finished === "yes").length)/matches.length) * 630)} className="animate-progress" r="100" cx="125" cy="125"></circle>
            </svg>
          </div> */}
           
          <div className="w-full h-16 mt-4 rounded-xl overflow-hidden flex relative justify-center items-center border-4 border-blue-900">
            <div className="absolute text-white text-xl ">
              <CountUp
                useEasing={false}
                duration={1}
                delay={0.5}
                end={Math.round(
                  (matches.filter((match) => match.finished === "yes").length /
                    matches.length) *
                    100
                )}
              />
              <span>%</span>
            </div>
            <div className="w-full h-full bg-blue-900">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${Math.round(
                    (matches.filter((match) => match.finished === "yes")
                      .length /
                      matches.length) *
                      100
                  )}%`,
                  transition: {
                    duration: 2,
                  },
                }}
                className="bg-white absolute left-0 h-full"
              ></motion.div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
