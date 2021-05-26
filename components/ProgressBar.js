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
          <div className="w-full h-16 mt-4 rounded-xl overflow-hidden flex relative justify-center items-center">
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
            <div className="w-full h-full bg-em-green-dark flex items-center p-2">
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
                className="bg-gradient-to-br from-em-green-light to-em-green-default w-full h-full rounded "
              ></motion.div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
