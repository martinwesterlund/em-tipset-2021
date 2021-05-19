import { useEffect, useState } from "react";
import backend from "../data/data";
import { motion } from "framer-motion";
import CountUp from 'react-countup';

const ProgressBar = ({matches}) => {

  return (
    <div className="w-full flex justify-center">
      {matches && (
        <div className="flex flex-col justify-center items-center bg-white w-full lg:w-96">
          <span>Tävlingstid som gått</span>
          <div className="w-full h-16 mt-4 rounded-xl overflow-hidden flex relative justify-center items-center">
            <div className="absolute text-white text-xl">
            <CountUp useEasing={false} duration={1} delay={0.5} end={Math.round(
                (matches.filter((match) => match.finished === "yes").length /
                  matches.length) *
                  100
              )} /><span>%</span>
            </div>
            <div className="w-full h-full bg-em-green-dark">
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
                    duration: 2
                  }
                }}
                className="bg-em-green-light absolute left-0 h-full"
              ></motion.div>
              {/* <div style={{width: `${Math.round(
              (matches.filter((match) => match.finished === "yes").length /
                matches.length) *
                100
            )}%`}} className="absolute left-0 h-full bg-em-green-light"></div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
