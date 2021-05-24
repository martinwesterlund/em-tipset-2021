import { useEffect, useState, useContext } from "react";
import context from "../context/context";
import backend from "../data/data";

const admin = () => {
  const [matches, setMatches] = useState();
  const [homeScore, setHomeScore] = useState();
  const [awayScore, setAwayScore] = useState();
  const [greeting, setGreeting] = useState();
  const { user, setUser, setIsLoading, points, setPoints } =
    useContext(context);

  const getMatches = async () => {
    const res = await fetch(`${backend}/fixtures`);
    const data = await res.json();
    setMatches(data);
  };

  const sendGreeting = async (event) => {
    event.preventDefault()

    const res = await fetch(`${backend}/greeting`, {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ greeting }),
    });

    const data = await res.json()
    if (res.status === 201) {
      console.log("Admin - Allt gick fint!");
    } else {
      console.log("Admin - Nåt sket sig");
    }
  }

  const updateResult = async (event, id) => {
    event.preventDefault();

    let matchResult = {};
    matchResult.id = id;
    matchResult.h = homeScore;
    matchResult.a = awayScore;
    if (homeScore > awayScore) {
      matchResult.result = "1";
    } else if (homeScore < awayScore) {
      matchResult.result = "2";
    } else {
      matchResult.result = "X";
    }

    const res = await fetch(`${backend}/update-result`, {
      method: "put",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ matchResult }),
    });

    const data = await res.json();
    if (res.status === 200) {
      console.log("Admin - Allt gick fint!");
    } else {
      console.log("Admin - Nåt sket sig");
    }
  };

  useEffect(() => {
    getMatches();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={(e) => sendGreeting(e)}>
        <span>Hälsning till deltagarna:</span>
        <input onChange={(e) => setGreeting(e.target.value)} className="w-96" type="text" />
        <input type="submit" />
      </form>

      {matches ? (
        matches.map((match) => {
          return (
            <div className="m-4" key={match.id}>
              <form
                className="flex relative"
                onSubmit={(e) => updateResult(e, match.id)}
              >
                <div className="w-64 text-center">
                  <span>{match.home_team}</span>
                  <span>-</span>
                  <span>{match.away_team}</span>
                </div>
                <div className="w-64 flex ">
                  <input
                    onChange={(e) => setHomeScore(e.target.value)}
                    value={match.home_score}
                    className="w-12 mx-2 text-center"
                    min={0}
                    type="number"
                  />
                  <input
                    onChange={(e) => setAwayScore(e.target.value)}
                    value={match.away_score}
                    className="w-12 mx-2 text-center"
                    min={0}
                    type="number"
                  />
                  <input className="px-2 mx-2" type="submit" />
                </div>
                {match.finished === "yes" ? (
                  <div className="flex justify-content items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-em-green-light h-5 w-5 absolute right-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                ) : (
                  <span></span>
                )}
              </form>
            </div>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default admin;
