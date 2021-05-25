import { useEffect, useState, useContext } from "react";
import context from "../context/context";
import Router from "next/router";
import Header from "../components/Header";
import { motion } from "framer-motion";
import RuleItem from "../components/RuleItem";

const regler = () => {
  const { user, setUser, setIsLoading } = useContext(context);

  return (
    <div
      className={`w-screen min-h-screen bg-stripe py-32 px-4 md:px-6 flex flex-col items-center overflow-x-hidden`}
    >
      <Header></Header>
      <h1 className="text-white md:text-xl mb-8 md:mb-6">REGLER</h1>

      <RuleItem
        text={["Reglerna är enkla. Börja med att tippa slutresultaten på de 36 gruppspelsmatcherna i sommarens fotbolls-EM för herrar 2021."]}
        imgSrc="/images/rules1.svg"
        imgLeft={false}
      ></RuleItem>

      <RuleItem
        text={["Du har fram till den 11 juni kl 21.00 på dig att skicka in alla dina slutgiltiga tips. Fram till dess kan du ändra dina tips och uppdatera din tipsrad."]}
        imgSrc="/images/rules2.svg"
        imgLeft={true}
      ></RuleItem>

      <RuleItem
        text={["Efterhand som resultaten trillar in kommer du bli tilldelad poäng i form av räkor."]}
        imgSrc="/images/shrimp.svg"
        imgLeft={false}
      ></RuleItem>

      <RuleItem
        text={["Rätt antal mål gjorda av hemmalaget = 1 räka", "Rätt antal mål gjorda av bortalaget = 1 räka", "Rätt i form av 1X2 = 1 räka", "Max antal räkor på en match är alltså 3."]}
        imgSrc="/images/rules3.svg"
        imgLeft={true}
      ></RuleItem>

      <RuleItem
        text={["När gruppspelet är över summeras alla dina räkor. Flest räkor vinner!"]}
        imgSrc="/images/rules4.svg"
        imgLeft={false}
      ></RuleItem>

      <RuleItem
        text={["Vid lika antal räkor är det omvänd alfabetisk ordning som gäller."]}
        imgSrc="/images/rules6.svg"
        imgLeft={true}
      ></RuleItem>
    </div>
  );
};

export default regler;
