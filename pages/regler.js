import { useEffect, useState, useContext } from "react";
import context from "../context/context";
import Router from "next/router";
import Header from "../components/Header";
import { motion } from "framer-motion";

const regler = () => {
  const { user, setUser, setIsLoading } = useContext(context);

  return (
    <div
      className={`w-screen min-h-screen bg-stripe pt-32 p-4 flex flex-col items-center`}
    >
      <Header></Header>
      <h1 className="text-white md:text-xl mb-8 md:mb-6">REGLER</h1>

      <section className="flex w-full justify-center my-4">
        <motion.div initial={{opacity: 0, x: -200}} animate={{ opacity: 1, x: 0, transition: {duration: 1, ease: 'easeOut'}}} className="w-36 h-28 mr-2 flex justify-center items-center text-white text-center text-xxs">
          <p>
            Reglerna är enkla. Börja med att tippa slutresultaten på de 36
            gruppspelsmatcherna i sommarens fotbolls-EM för herrar 2021.
          </p>
        </motion.div>
        <motion.div initial={{opacity: 0, x: 200, rotate: 90}} animate={{ opacity: 1, x: 0, rotate: 0, transition: {duration: 1, ease: 'easeOut'}}} className="w-28 bg-white flex justify-center items-center rounded-full shadow-md">
          <img className="w-14" src="/images/rules1.svg" alt="" />
        </motion.div>
      </section>

      <section className="flex w-full justify-center my-4">
        <motion.div initial={{opacity: 0, x: -200, rotate: -90}} animate={{ opacity:1, x: 0, rotate: 0, transition: {duration: 1, ease: 'easeOut'}}} className="w-28 bg-white flex justify-center items-center rounded-full shadow-md">
          <img className="h-14" src="/images/rules2.svg" alt="" />
        </motion.div>
        <motion.div initial={{opacity: 0, x: 200}} animate={{ opacity: 1, x: 0, transition: {duration: 1, ease: 'easeOut'}}} className="w-36 h-28 ml-2 flex justify-center items-center text-white text-center text-xxs">
          <p>
            Du har fram till den 11 juni kl 21.00 på dig att skicka in alla dina
            slutgiltiga tips. Fram till dess kan du ändra dina tips och
            uppdatera din tipsrad.
          </p>
        </motion.div>
      </section>

      <section className="flex w-full justify-center my-4">
        <div className="w-36 h-28 mr-2 flex justify-center items-center text-white text-center text-xxs">
          <p>
            Efterhand som resultaten trillar in kommer du bli tilldelad poäng i
            form av räkor.
          </p>
        </div>
        <div className="w-28 bg-white flex justify-center items-center rounded-full shadow-md">
          <img className="h-14" src="/images/shrimp.svg" alt="" />
        </div>
      </section>

      <section className="flex w-full justify-center my-4">
        <div className="w-28 bg-white flex justify-center items-center rounded-full shadow-md">
          <img className="h-20" src="/images/rules3.svg" alt="" />
        </div>
        <div className="w-36 h-28 ml-2 flex justify-center items-center text-white text-center text-xxs">
          <ul className="my-4 text-center">
            <li className="my-1">
              Rätt antal mål gjorda av hemmalaget = <span className="text-em-green-dark">1 räka</span>
            </li>
            <li className="my-1">
              Rätt antal mål gjorda av bortalaget = <span className="text-em-green-dark">1 räka</span>
            </li>
            <li className="my-1">Rätt i form av 1X2 = <span className="text-em-green-dark">1 räka</span></li>
          </ul>
        </div>
      </section>

      <section className="flex w-full justify-center my-4">
        <div className="w-36 h-28 mr-2 flex justify-center items-center text-white text-center text-xxs">
          <p>
            När gruppspelet är över summeras alla dina räkor. Flest räkor vinner!
          </p>
        </div>
        <div className="w-28 bg-white flex justify-center items-center rounded-full shadow-md">
          <img className="h-14" src="/images/rules4.svg" alt="" />
        </div>
      </section>

      <section className="flex w-full justify-center my-4">
      <div className="w-28 bg-white flex justify-center items-center rounded-full shadow-md">
          <img className="h-14" src="/images/rules6.svg" alt="" />
        </div>
        <div className="w-36 h-28 ml-2 flex justify-center items-center text-white text-center text-xxs">
          <p>
            Vid lika antal räkor är det omvänd alfabetisk ordning som gäller.
          </p>
        </div>
        
      </section>
    </div>
  );
};

export default regler;
