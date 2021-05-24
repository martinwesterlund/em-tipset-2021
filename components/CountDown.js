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
    // const countDownDate = new Date("May 24, 2021 16:53:00").getTime();
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
    <div
      
    >
      {!deadLinePassed && (
        <div
          className={`${
            front
              ? "absolute top-2 sm:top-4 right-1/2 -mr-32 sm:-mr-0 sm:left-4"
              : "relative -mt-4 mb-4"
          }   w-64 text-white bg-black bg-opacity-50 rounded-full z-30 flex flex-col justify-center items-center text-xxs sm:text-xs p-1`}
        >
          <div className="w-full flex flex-row justify-center pb-1">
            <div className="flex justify-center mx-2 w-4">
              <span className="">{timerDays}</span>
              <span>d</span>
            </div>
            <div className="flex justify-center mx-2 w-4">
              <span className="">{timerHours}</span>
              <span>h</span>
            </div>
            <div className="flex justify-center mx-2 w-4">
              <span className="">{timerMinutes}</span>
              <span>m</span>
            </div>
            <div className="flex justify-center mx-2 w-4">
              <span className="">{timerSeconds}</span>
              <span>s</span>
            </div>
          </div>
          <span className="w-40 border-t text-center border-white pt-1">
            kvar till spelstopp!
          </span>
        </div>
      )}
    </div>
  );
};

export default CountDown;
