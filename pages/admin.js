import { useEffect, useState, useContext } from "react";
import context from "../context/context";
import backend from "../data/data";
import Header from "../components/Header";

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
    event.preventDefault();

    const res = await fetch(`${backend}/greeting`, {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ greeting }),
    });

    const data = await res.json();
    if (res.status === 201) {
      console.log("Admin - Allt gick fint!");
    } else {
      console.log("Admin - Nåt sket sig");
    }
  };

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
      getMatches();
    } else {
      console.log("Admin - Nåt sket sig");
    }
  };

  useEffect(() => {
    getMatches();
  }, []);

  return (
    <div
      className={`w-screen min-h-screen bg-stripe py-32 px-2 md:px-6 flex flex-col items-center overflow-x-hidden text-xxs sm:text-base`}
    >
      
        <Header></Header>
        {user?.role === 'admin' ? (<>
        <h1 className="text-white md:text-xl mb-8 md:mb-6">ADMIN</h1>
        <form className="w-full h-40 md:h-64 p-6 flex flex-col items-center justify-around" onSubmit={(e) => sendGreeting(e)}>
          <span className="text-white">Hälsning till deltagarna:</span>
          <input
            onChange={(e) => setGreeting(e.target.value)}
            className="w-full max-w-3xl p-2 rounded"
            type="text"
          />
          <input className="p-2 rounded cursor-pointer" type="submit" />
        </form>

        {matches ? (
          matches.map((match) => {
            return (
              <div className="w-full max-w-2xl m-4 border-b pb-2" key={match.id}>
                <form
                  className="w-full flex relative justify-between"
                  onSubmit={(e) => updateResult(e, match.id)}
                >
                  <div className="w-40 h-8 text-center flex items-center text-white">
                    <span>{match.id}. </span>
                    <span>{match.home_team}</span>
                    <span>-</span>
                    <span>{match.away_team}</span>
                  </div>
                  <div className="w-32 flex ">
                    <input
                      onChange={(e) => setHomeScore(e.target.value)}
                      value={match.home_score || undefined}
                      className="w-6 md:w-12 mx-1 text-center px-2 rounded"
                      min={0}
                      type="number"
                    />
                    <input
                      onChange={(e) => setAwayScore(e.target.value)}
                      value={match.away_score || undefined}
                      className="w-6 md:w-12 mx-1 text-center px-2 rounded"
                      min={0}
                      type="number"
                    />
                    {match.finished === null && (
                      <input
                        className="px-2 rounded mx-2 cursor-pointer"
                        type="submit"
                      />
                    )}
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
      </>) : <div>Du har inte behörighet att använda den här sidan</div>}
    </div>
  );
};

export default admin;
