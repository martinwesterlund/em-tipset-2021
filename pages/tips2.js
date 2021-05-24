import { useEffect, useState, useContext } from "react";
import useSWR from "swr";
import backend from "../data/data";
import Header from "../components/Header";
import context from "../context/context";
import MatchForm from "../components/MatchForm";
import { motion, AnimatePresence } from "framer-motion";
import LoadingElement from "../components/LoadingElement";
import CountDown from "../components/CountDown";

const tips2 = () => {
  const { user, setUser, setIsLoading, points, setPoints, deadLinePassed } =
    useContext(context);
  const [matches, setMatches] = useState();
  const [usersBet, setUsersBet] = useState();
  const [combinedData, setCombinedData] = useState();
  const [infoIsVisible, setInfoIsVisible] = useState(false);
  const [info, setInfo] = useState();

  const getMatches = async () => {
    const res = await fetch(`${backend}/fixtures`);
    const data = await res.json();
    setMatches(data);
  };

  const getUsersBet = async () => {
    const res = await fetch(`${backend}/user-match-results`);
    const data = await res.json();
    if (user) {
      setUsersBet(data.filter((result) => result.user_email === user.email)[0]);
    }
  };

  const addGoal = (name) => {
    let value = Number(usersBet[name] + 1);

    setUsersBet({
      ...usersBet,
      [name]: value,
    });
  };

  const animateInfo = (text) => {
    setInfo(text);
    setInfoIsVisible(true);
    setTimeout(() => {
      setInfoIsVisible(false);
    }, 2000);
  };

  const removeGoal = (name) => {
    let value;
    if (Number(usersBet[name] > 0)) {
      value = Number(usersBet[name] - 1);
    } else {
      value = Number(usersBet[name]);
    }

    setUsersBet({
      ...usersBet,
      [name]: value,
    });
  };

  // user["m" + match.id + "_h"]

  const setDbValue = (h, a) => {
    if (h > a) {
      return "1";
    } else if (h < a) {
      return "2";
    } else {
      return "X";
    }
  };

  const set1X2 = (match) => {
    if (match.h > match.a) {
      return "1";
    } else if (match.h < match.a) {
      return "2";
    } else {
      return "X";
    }
  };

  const submitBet = async (event) => {
    let newBet = {
      m1_h: usersBet.m1_h,
      m1_a: usersBet.m1_a,
      m1_1x2: setDbValue(usersBet.m1_h, usersBet.m1_a).toString(),
      m2_h: usersBet.m2_h,
      m2_a: usersBet.m2_a,
      m2_1x2: setDbValue(usersBet.m2_h, usersBet.m2_a).toString(),
      m3_h: usersBet.m3_h,
      m3_a: usersBet.m3_a,
      m3_1x2: setDbValue(usersBet.m3_h, usersBet.m3_a).toString(),
      m4_h: usersBet.m4_h,
      m4_a: usersBet.m4_a,
      m4_1x2: setDbValue(usersBet.m4_h, usersBet.m4_a).toString(),
      m5_h: usersBet.m5_h,
      m5_a: usersBet.m5_a,
      m5_1x2: setDbValue(usersBet.m5_h, usersBet.m5_a).toString(),
      m6_h: usersBet.m6_h,
      m6_a: usersBet.m6_a,
      m6_1x2: setDbValue(usersBet.m6_h, usersBet.m6_a).toString(),
      m7_h: usersBet.m7_h,
      m7_a: usersBet.m7_a,
      m7_1x2: setDbValue(usersBet.m7_h, usersBet.m7_a).toString(),
      m8_h: usersBet.m8_h,
      m8_a: usersBet.m8_a,
      m8_1x2: setDbValue(usersBet.m8_h, usersBet.m8_a).toString(),
      m9_h: usersBet.m9_h,
      m9_a: usersBet.m9_a,
      m9_1x2: setDbValue(usersBet.m9_h, usersBet.m9_a).toString(),
      m10_h: usersBet.m10_h,
      m10_a: usersBet.m10_a,
      m10_1x2: setDbValue(usersBet.m10_h, usersBet.m10_a).toString(),
      m11_h: usersBet.m11_h,
      m11_a: usersBet.m11_a,
      m11_1x2: setDbValue(usersBet.m11_h, usersBet.m11_a).toString(),
      m12_h: usersBet.m12_h,
      m12_a: usersBet.m12_a,
      m12_1x2: setDbValue(usersBet.m12_h, usersBet.m12_a).toString(),
      m13_h: usersBet.m13_h,
      m13_a: usersBet.m13_a,
      m13_1x2: setDbValue(usersBet.m13_h, usersBet.m13_a).toString(),
      m14_h: usersBet.m14_h,
      m14_a: usersBet.m14_a,
      m14_1x2: setDbValue(usersBet.m14_h, usersBet.m14_a).toString(),
      m15_h: usersBet.m15_h,
      m15_a: usersBet.m15_a,
      m15_1x2: setDbValue(usersBet.m15_h, usersBet.m15_a).toString(),
      m16_h: usersBet.m16_h,
      m16_a: usersBet.m16_a,
      m16_1x2: setDbValue(usersBet.m16_h, usersBet.m16_a).toString(),
      m17_h: usersBet.m17_h,
      m17_a: usersBet.m17_a,
      m17_1x2: setDbValue(usersBet.m17_h, usersBet.m17_a).toString(),
      m18_h: usersBet.m18_h,
      m18_a: usersBet.m18_a,
      m18_1x2: setDbValue(usersBet.m18_h, usersBet.m18_a).toString(),
      m19_h: usersBet.m19_h,
      m19_a: usersBet.m19_a,
      m19_1x2: setDbValue(usersBet.m19_h, usersBet.m19_a).toString(),
      m20_h: usersBet.m20_h,
      m20_a: usersBet.m20_a,
      m20_1x2: setDbValue(usersBet.m20_h, usersBet.m20_a).toString(),
      m21_h: usersBet.m21_h,
      m21_a: usersBet.m21_a,
      m21_1x2: setDbValue(usersBet.m21_h, usersBet.m21_a).toString(),
      m22_h: usersBet.m22_h,
      m22_a: usersBet.m22_a,
      m22_1x2: setDbValue(usersBet.m22_h, usersBet.m22_a).toString(),
      m23_h: usersBet.m23_h,
      m23_a: usersBet.m23_a,
      m23_1x2: setDbValue(usersBet.m23_h, usersBet.m23_a).toString(),
      m24_h: usersBet.m24_h,
      m24_a: usersBet.m24_a,
      m24_1x2: setDbValue(usersBet.m24_h, usersBet.m24_a).toString(),
      m25_h: usersBet.m25_h,
      m25_a: usersBet.m25_a,
      m25_1x2: setDbValue(usersBet.m25_h, usersBet.m25_a).toString(),
      m26_h: usersBet.m26_h,
      m26_a: usersBet.m26_a,
      m26_1x2: setDbValue(usersBet.m26_h, usersBet.m26_a).toString(),
      m27_h: usersBet.m27_h,
      m27_a: usersBet.m27_a,
      m27_1x2: setDbValue(usersBet.m27_h, usersBet.m27_a).toString(),
      m28_h: usersBet.m28_h,
      m28_a: usersBet.m28_a,
      m28_1x2: setDbValue(usersBet.m28_h, usersBet.m28_a).toString(),
      m29_h: usersBet.m29_h,
      m29_a: usersBet.m29_a,
      m29_1x2: setDbValue(usersBet.m29_h, usersBet.m29_a).toString(),
      m30_h: usersBet.m30_h,
      m30_a: usersBet.m30_a,
      m30_1x2: setDbValue(usersBet.m30_h, usersBet.m30_a).toString(),
      m31_h: usersBet.m31_h,
      m31_a: usersBet.m31_a,
      m31_1x2: setDbValue(usersBet.m31_h, usersBet.m31_a).toString(),
      m32_h: usersBet.m32_h,
      m32_a: usersBet.m32_a,
      m32_1x2: setDbValue(usersBet.m32_h, usersBet.m32_a).toString(),
      m33_h: usersBet.m33_h,
      m33_a: usersBet.m33_a,
      m33_1x2: setDbValue(usersBet.m33_h, usersBet.m33_a).toString(),
      m34_h: usersBet.m34_h,
      m34_a: usersBet.m34_a,
      m34_1x2: setDbValue(usersBet.m34_h, usersBet.m34_a).toString(),
      m35_h: usersBet.m35_h,
      m35_a: usersBet.m35_a,
      m35_1x2: setDbValue(usersBet.m35_h, usersBet.m35_a).toString(),
      m36_h: usersBet.m36_h,
      m36_a: usersBet.m36_a,
      m36_1x2: setDbValue(usersBet.m36_h, usersBet.m36_a).toString(),
    };

    const res = await fetch(`${backend}/submit-bet`, {
      method: "put",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newBet: newBet, user: user }),
    });

    const data = await res.json();
    if (res.status === 200) {
      console.log("Allt gick fint!");
      animateInfo("Uppdaterat!");
    } else {
      animateInfo("Något gick fel!");
    }
  };

  useEffect(() => {
    getMatches();
  }, [user]);

  useEffect(() => {
    getUsersBet();
  }, [matches]);

  useEffect(() => {
    if (matches && usersBet) {
      let a = Object.values(usersBet);
      a = a.slice(4, 76);
      let b = [];
      for (let i = 0; i < a.length; i += 2) {
        b.push({ ...a[i], ...a[i + 1] });
      }
      let c = [];
      for (let i = 0; i < matches.length; i++) {
        const betArray = [];
        betArray.h = a.shift();
        betArray.a = a.shift();
        c.push({ ...matches[i], ...b[i], ...betArray });
      }
      setCombinedData(c);
    }
  }, [usersBet]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      <Header></Header>
      <div className="w-screen min-h-screen bg-stripe pt-32 p-6 flex flex-col items-center">
        <h1 className="text-white md:text-xl mb-8">DINA TIPS</h1>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1 } }}
        >
          <CountDown front={false}></CountDown>
        </motion.div>
        {combinedData ? (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full flex flex-col items-center mb-20"
          >
            {combinedData.map((match) => (
              <motion.div
                variants={item}
                key={match.id}
                className="w-full  md:w-160 lg:w-192 relative bg-white rounded-2xl flex justify-around items-center p-2 sm:p-4 md:p-6 m-2"
              >
                <div className="w-1/3 flex flex-col justify-center items-center">
                  <div>{match.home_team}</div>
                  <img
                    className="w-8 h-8 mt-2 rounded-full object-cover shadow-md"
                    src={`/images/flags/${match.home_team.toLowerCase()}.svg`}
                    alt=""
                  />
                  <div className="flex items-center mt-4 text-em-green-default">
                    {!deadLinePassed && <button
                      onClick={() => removeGoal(`m${match.id}_h`)}
                      className="p-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>}
                    <span className="w-12 border-l border-r  text-center text-2xl border-gray-300">
                      {match.h}
                    </span>
                    {!deadLinePassed && <button
                      onClick={() => addGoal(`m${match.id}_h`)}
                      className="p-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>}
                  </div>
                </div>
                <div className="w-8 h-full flex flex-col justify-center items-center">
                  <div className="h-1/3 text-3xl flex items-end text-em-green-default transform translate-y-2">
                    <span>{set1X2(match)}</span>
                  </div>
                </div>
                <div className="w-1/3 flex flex-col justify-center items-center ">
                  <div>{match.away_team}</div>
                  <img
                    className="w-8 h-8 mt-2 rounded-full object-cover shadow-md"
                    src={`/images/flags/${match.away_team.toLowerCase()}.svg`}
                    alt=""
                  />
                  <div className="flex items-center mt-4 text-em-green-default">
                    {!deadLinePassed && <button
                      onClick={() => removeGoal(`m${match.id}_a`)}
                      className="p-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>}

                    <span className="w-12 border-l border-r text-center text-2xl border-gray-300">
                      {match.a}
                    </span>
                    {!deadLinePassed && <button
                      onClick={() => addGoal(`m${match.id}_a`)}
                      className="p-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <LoadingElement text={"Laddar dina tips..."}></LoadingElement>
        )}

        {!deadLinePassed && (
          <motion.button
            onClick={() => submitBet()}
            initial={{ x: "150%" }}
            animate={{
              x: 0,
              transition: { duration: 2, delay: 1, ease: "easeOut" },
            }}
            className="bg-em-green-default fixed right-2 bottom-2 md:right-8 md:bottom-8 rounded mt-4 p-3 lg:p-6 text-white lg:text-xl cursor-pointer"
          >
            Uppdatera dina tips!
          </motion.button>
        )}

        <AnimatePresence>
          {infoIsVisible && (
            <motion.div
              className="bg-em-green-default fixed shadow-md top-1/2 left-1/2 -mt-16 -ml-32 h-32 w-64 rounded p-3 flex flex-col justify-around items-center lg:p-6 text-white lg:text-xl"
              key="modal"
              initial={{ scale: 0.5, opacity: 0, x: "100%" }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              exit={{
                scale: 0.5,
                opacity: 0,
                x: "-100%",
                transition: { duration: 1, ease: "easeOut" },
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{info}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default tips2;
