import { useEffect, useState, useContext } from "react";
import useSWR from "swr";
import backend from "../data/data";
import Header from "../components/Header";
import context from "../context/context";

const tips2 = () => {
  const { user, setUser, setIsLoading, points, setPoints } = useContext(context);
  const [matches, setMatches] = useState();
  const [usersBet, setUsersBet] = useState();
  const [combinedData, setCombinedData] = useState();

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

  const handleChange = (e) => {
    let value = Number(e.target.value);
    setUsersBet({
      ...usersBet,
      [e.target.name]: value,
    });
  };


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
    event.preventDefault();

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
    } else {
      console.log("Nåt sket sig");
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

  return (
    <div>
      <Header></Header>
      <h1 className="mt-40">Dina tips</h1>
      <form
        onSubmit={submitBet}
        className="w-full flex flex-col text-black items-center"
      >
        {combinedData ? (
          combinedData.map((match) => {
            return (
              <div
                className="w-1/2 border border-white flex items-center p-2 m-4"
                key={match.id}
              >
                <span>{match.home_team}</span>
                <span>-</span>
                <span>{match.away_team}</span>

                <span></span>
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
                {/* <input className="bg-transparent" name={`m${match.id}_1x2`} on  onChange={(e) => handleChange1X2(e)} type="text" value={set1X2(match)} /> */}

                <span>{set1X2(match)}</span>
              </div>
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
        <input
          className="bg-em-green-default fixed right-8 bottom-8 rounded mt-4 p-3 text-white cursor-pointer"
          value={"Uppdatera ditt tips!"}
          type="submit"
        />
      </form>
    </div>
  );
};

export default tips2;
