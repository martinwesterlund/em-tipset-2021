import React, { useState, useEffect, useContext } from "react";
import backend from "../data/data";
import Header from "../components/Header";
import context from "../context/context";

const tips = ({ matches, user_match_results }) => {
  const { user, setUser, setIsLoading } = useContext(context);

  const [userMatchResults, setUserMatchResults] = useState(null);
  const [betArray, setBetArray] = useState();

  const submitBet = async (event) => {
    event.preventDefault();

    let newBet = {
      m1_h: userMatchResults.m1_h,
      m1_a: userMatchResults.m1_a,
      m2_h: userMatchResults.m2_h,
      m2_a: userMatchResults.m2_a,
      m3_h: userMatchResults.m3_h,
      m3_a: userMatchResults.m3_a,
      m4_h: userMatchResults.m4_h,
      m4_a: userMatchResults.m4_a,
      m5_h: userMatchResults.m5_h,
      m5_a: userMatchResults.m5_a,
      m6_h: userMatchResults.m6_h,
      m6_a: userMatchResults.m6_a,
      m7_h: userMatchResults.m7_h,
      m7_a: userMatchResults.m7_a,
      m8_h: userMatchResults.m8_h,
      m8_a: userMatchResults.m8_a,
      m9_h: userMatchResults.m9_h,
      m9_a: userMatchResults.m9_a,
      m10_h: userMatchResults.m10_h,
      m10_a: userMatchResults.m10_a,
      m11_h: userMatchResults.m11_h,
      m11_a: userMatchResults.m11_a,
      m12_h: userMatchResults.m12_h,
      m12_a: userMatchResults.m12_a,
      m13_h: userMatchResults.m13_h,
      m13_a: userMatchResults.m13_a,
      m14_h: userMatchResults.m14_h,
      m14_a: userMatchResults.m14_a,
      m15_h: userMatchResults.m15_h,
      m15_a: userMatchResults.m15_a,
      m16_h: userMatchResults.m16_h,
      m16_a: userMatchResults.m16_a,
      m17_h: userMatchResults.m17_h,
      m17_a: userMatchResults.m17_a,
      m18_h: userMatchResults.m18_h,
      m18_a: userMatchResults.m18_a,
      m19_h: userMatchResults.m19_h,
      m19_a: userMatchResults.m19_a,
      m20_h: userMatchResults.m20_h,
      m20_a: userMatchResults.m20_a,
      m21_h: userMatchResults.m21_h,
      m21_a: userMatchResults.m21_a,
      m22_h: userMatchResults.m22_h,
      m22_a: userMatchResults.m22_a,
      m23_h: userMatchResults.m23_h,
      m23_a: userMatchResults.m23_a,
      m24_h: userMatchResults.m24_h,
      m24_a: userMatchResults.m24_a,
      m25_h: userMatchResults.m25_h,
      m25_a: userMatchResults.m25_a,
      m26_h: userMatchResults.m26_h,
      m26_a: userMatchResults.m26_a,
      m27_h: userMatchResults.m27_h,
      m27_a: userMatchResults.m27_a,
      m28_h: userMatchResults.m28_h,
      m28_a: userMatchResults.m28_a,
      m29_h: userMatchResults.m29_h,
      m29_a: userMatchResults.m29_a,
      m30_h: userMatchResults.m30_h,
      m30_a: userMatchResults.m30_a,
      m31_h: userMatchResults.m31_h,
      m31_a: userMatchResults.m31_a,
      m32_h: userMatchResults.m32_h,
      m32_a: userMatchResults.m32_a,
      m33_h: userMatchResults.m33_h,
      m33_a: userMatchResults.m33_a,
      m34_h: userMatchResults.m34_h,
      m34_a: userMatchResults.m34_a,
      m35_h: userMatchResults.m35_h,
      m35_a: userMatchResults.m35_a,
      m36_h: userMatchResults.m36_h,
      m36_a: userMatchResults.m36_a,
    };

    // if(userMatchResults.m1_h > userMatchResults.m1_a ){
    //     userMatchResults.m1_1x2 = '1'
    // } else if(userMatchResults.m1_h < userMatchResults.m1_a){
    //     userMatchResults.m1_1x2 = '2'
    // } else {
    //     userMatchResults.m2_1x2 = 'X'
    // }
    const res = await fetch(`${backend}/submit-bet`, {
      method: "put",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newBet: newBet, user: user }),
    });

    const data = await res.json();
    // console.log('Data från server', data)
    if (res.status === 200) {
      console.log("Allt gick fint!");
    } else {
      console.log("Nåt sket sig");
    }
  };

  const handleChange = (e) => {
    const value = Number(e.target.value);
    setUserMatchResults({
      ...userMatchResults,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    if (userMatchResults) {
      let a = Object.values(userMatchResults);
      a = a.slice(4, 76);
      let b = [];
      for (let i = 0; i < a.length; i += 2) {
        b.push({ ...a[i], ...a[i + 1] });
      }
      let c = [];
      for (let i = 0; i < matches.length; i++) {
        const userBets = [];
        userBets.h = a.shift();
        userBets.a = a.shift();
        c.push({ ...matches[i], ...b[i], ...userBets });
      }
      setBetArray(c);
      console.log("C", c);
    }
  }, [userMatchResults]);

  useEffect(() => {
    if (user) {
      setUserMatchResults(
        user_match_results.filter(
          (result) => result.user_email === user.email
        )[0]
      );
    }
  }, [user]);

  //   useEffect(() => {
  //     if (!user) {
  //       Router.push("/");
  //     }
  //   }, []);

  return (
    <>
      <Header></Header>

      <div className="w-screen min-h-screen bg-stripe pt-32 p-6 flex flex-col items-center">
        <h1>DINA TIPS</h1>

        {betArray && (
          <form
            onSubmit={submitBet}
            className="w-full flex flex-col text-black items-center"
          >
            {betArray.map((match) => (
              <div
                key={match.id}
                className="border border-black m-2 p-2 flex w-1/2 justify-center items-center"
              >
                <div className="w-1/2">
                  <span className="mr-4">{match.id}</span>
                  <span>{match.home_team}</span>
                  <span className="mx-2">-</span>
                  <span>{match.away_team}</span>
                </div>

                <input
                  name={`m${match.id}_h`}
                  onChange={(e) => handleChange(e)}
                  className="w-20 p-2 border text-center border-red-300"
                  type="number"
                  min="0"
                  value={match.h}
                />
                <input
                  name={`m${match.id}_a`}
                  onChange={(e) => handleChange(e)}
                  className="w-20 p-2 border text-center border-red-300"
                  type="number"
                  min="0"
                  value={match.a}
                />
              </div>
            ))}
            <input
              className="bg-em-green-default fixed right-8 bottom-8 rounded mt-4 p-3 text-white cursor-pointer"
              value={"Skicka in ditt tips!"}
              type="submit"
            />
            {/* <span>{userMatchResults.filter(m => m.id === match.id)[0]}</span> */}
          </form>
        )}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${backend}/fixtures`);
  const data = await res.json();
  const res2 = await fetch(`${backend}/user-match-results`);
  const data2 = await res2.json();
  return {
    props: {
      matches: data,
      user_match_results: data2,
    },
  };
};

export default tips;
