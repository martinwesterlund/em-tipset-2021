import { useState, useEffect, useContext, useRef } from "react";
import context from "../context/context";
import { motion, AnimatePresence } from "framer-motion";

const CountDown = ({ front }) => {
  const { deadLinePassed, setDeadLinePassed } = useContext(context);

  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval = useRef();

  const countDown = () => {
    
    const countDownDate = new Date("Jun 11, 2021 21:00:00").getTime();
    // const countDownDate = new Date("May 26, 2021 18:58:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
        setDeadLinePassed(true);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    countDown();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <>
      {!deadLinePassed && (
        <div
          className={`${
            front
              ? "absolute left-1/2 -ml-32 top-2 sm:left-4 sm:-ml-0 lg:left-1/2 lg:-ml-80 lg:w-160 lg:text-lg p-1"
              : "relative xl:fixed xl:right-8 xl:bottom-32 -mt-4 mb-4 p-2  "
          }    text-white bg-black bg-opacity-50 rounded-full w-64 z-30 flex flex-col text-xxs sm:text-xs justify-center items-center`}
        >
          <div className="w-full flex flex-row justify-center pb-1">
            <div className={`flex justify-center mx-2 w-4 ${front && 'lg:w-12'}`}>
              <span className="">{timerDays}</span>
              <span>d</span>
            </div>
            <div className={`flex justify-center mx-2 w-4 ${front && 'lg:w-12'}`}>
              <span className="">{timerHours}</span>
              <span>h</span>
            </div>
            <div className={`flex justify-center mx-2 w-4 ${front && 'lg:w-12'}`}>
              <span className="">{timerMinutes}</span>
              <span>m</span>
            </div>
            <div className={`flex justify-center mx-2 w-4 ${front && 'lg:w-12'}`}>
              <span className="">{timerSeconds}</span>
              <span>s</span>
            </div>
          </div>
          <span className={`${front && 'w-32 lg:w-80'} w-40 border-t text-center border-white pt-1`}>
            kvar till spelstopp!
          </span>
        </div>
      )}
    </>
  );
};

export default CountDown;
