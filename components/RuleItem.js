import React from "react";
import { motion } from "framer-motion";

const RuleItem = ({ text, imgSrc, imgLeft }) => {
  console.log(imgLeft);
  return (
    <section
      className={`flex flex-col-reverse ${
        imgLeft ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
      } w-full justify-center items-center my-4`}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 1, ease: "easeOut" },
        }}
        className="w-full md:w-[32rem] md:h-28 lg:w-160 flex flex-col justify-center items-center text-white text-center text-xs md:text-base"
      >
        {text.map((p) => (
          <p className="w-80 md:w-96 lg:w-[32rem] my-px">{p}</p>
        ))}
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          x: imgLeft ? -200 : 200,
          rotate: imgLeft ? -90 : 90,
        }}
        animate={{
          opacity: 1,
          x: 0,
          rotate: 0,
          transition: { duration: 1, ease: "easeOut" },
        }}
        className="w-28 h-28 md:w-40 md:h-40 lg:w-64 lg:h-64 mb-4 md:mb-0 bg-white flex justify-center items-center rounded-full shadow-md"
      >
        <img className="w-14 md:w-20 lg:w-28" src={imgSrc} alt="" />
      </motion.div>
    </section>
  );
};

export default RuleItem;
