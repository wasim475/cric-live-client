import { useContext, useEffect } from "react";
import loader from "../../../assets/pic/loader.gif";
import { AuthContex } from "../../../provider/AuthProvider";
import { fetchInfo } from "../../../provider/FetchProvider";
import { handlesInfo } from "../../../provider/HandleProvide";
import { stateInfo } from "../../../provider/StateProvider";
import RunandBall from "../../../Utility/Run and Ball/RunandBall";
import ScoreCard from "../../../Utility/ScoreCard/ScoreCard";
import AddBatter from "./Add Batter/AddBatter";
import ShowBatter from "./Add Batter/ShowBatter";
import AddBowler from "./Add Bowler/AddBowler";
import ShowBowler from "./Add Bowler/ShowBowler";
import { useLocation, useParams } from 'react-router';
import Copy from '../../../Utility/CopyUrl/Copy';

const SingleMatch = () => {
  const location = useLocation()
  const { user, loading } = useContext(AuthContex);
  const { matches, setMatches, singleMatchId, setSingleMatchId, setCopyValue } = useContext(stateInfo);
  // console.log()
  setCopyValue(`https://criclive1.netlify.app${location.pathname}`)
  const { id } = useParams();
  setSingleMatchId(id)
 
  const {
    batters,
    setBatters,
    singleMatchData,
    setSingleMatchData,
    bowlers,
    activeBatters,
  } = useContext(stateInfo);
  const { fetchBatterData } = useContext(fetchInfo);

  useEffect(() => {
    fetchBatterData();
  }, [singleMatchId]);
  const {
    email,
    team1,
    team2,
    batNow,
    totalOver,
    _id,
    teamTotal,
    teamOver,
    teamWicket,
    teamBall,
    target,
    extra,
    noBall,
    wide,
    legbye,
    bye,
    lastTen,
  } = singleMatchData;
  const reverseLastTen = lastTen?.reverse();

  const handleLastTen = (matchId, index, extra) => {
    console.log("match Id:", matchId, "lastOne:", extra);

    fetch(`https://cric-server.vercel.app/matches/${matchId}/lastten`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ index, extra }), // pass the value to be removed (e.g., "wd", "nb", etc.)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log("Successfully removed from lastTen");
          fetchBatterData(); // Optionally update the state or UI here if needed
        }
      });
  };

  const remaining = target - teamTotal;
  const remainingWicket = 10 - teamWicket;
  return (
    <main>
      {loading ? (
        <div className="relative flex justify-center items-center">
          <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
          <img src={loader} className="rounded-full h-28 w-28" />
        </div>
      ) : (
        <>
          <section>
            <h1 className="text-center">
              {" "}
              <span className="text-xl font-bold">{team1}</span>
              <span> vs </span>
              <span className="text-xl font-bold">{team2}</span> <span><Copy/></span>
            </h1>
            
          </section>

          <section>
            {target && (
              <>
                <h1>Target: {target}</h1>
                <h1>
                  {target > teamTotal
                    ? `${batNow} need ${remaining} to win.`
                    : target < teamTotal
                    ? `${batNow} win by ${remainingWicket} wickets`
                    : teamWicket >= 10
                    ? `${batNow} lose by ${remaining} runs`
                    : ""}
                </h1>
              </>
            )}

            <h1 className="bg-green-500 inline-block font-bold text-xl px-2 py-1 border-2  border-red-100 rounded-lg">
              {batNow}: <span className="text-white">{teamTotal}</span> /{" "}
              <span className="text-gray-100">{teamWicket}</span> <br />
              Overs: <span className="text-white">{teamOver} </span>({totalOver}
              ) <br />
              <span className="text-sm">
                Extra: <span className="text-white">{extra}</span> (
                <span className="text-xs">
                  WD:{wide} NB:{noBall} LB:{legbye} B:{bye}
                </span>
                )
              </span>
            </h1>
            <div className="inline-block">
              <ScoreCard />
            </div>
          </section>
          <h1 className="flex gap-x-1 overflow-hidden max-w-full text-[10px]">
            <span>Last-Balls:</span>
            {reverseLastTen?.map((lastOne, index) =>
              lastOne === "w" ? (
                <span
                  key={index}
                  onClick={() =>
                    email === user?.email &&
                    handleLastTen(singleMatchId, index, lastOne)
                  }
                  className="text-red-950 font-bold"
                >
                  {lastOne}
                </span>
              ) : lastOne === 6 ? (
                <span
                  key={index}
                  onClick={() =>
                    email === user?.email &&
                    handleLastTen(singleMatchId, index, lastOne)
                  }
                  className="text-pink-500 font-extrabold"
                >
                  {lastOne}
                </span>
              ) : lastOne === 4 ? (
                <span
                  key={index}
                  onClick={() =>
                    email === user?.email &&
                    handleLastTen(singleMatchId, index, lastOne)
                  }
                  className="text-orange-600 font-extrabold"
                >
                  {lastOne}
                </span>
              ) : lastOne === "|" ? (
                <span
                  key={index}
                  onClick={() =>
                    email === user?.email &&
                    handleLastTen(singleMatchId, index, lastOne)
                  }
                  className="text-yellow-600 font-extrabold text-sm flex -mt-1"
                >
                  {lastOne}
                </span>
              ) : (
                <span
                  key={index}
                  className="bg-red-black"
                  onClick={() =>
                    email === user?.email &&
                    handleLastTen(singleMatchId, index, lastOne)
                  }
                >
                  {lastOne}
                </span>
              )
            )}
          </h1>
          {/* Batters */}
          <section className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="bg-gray-200">
                  <th>
                    {email === user?.email ? (
                      <AddBatter
                        fetchBatterData={fetchBatterData}
                        match={singleMatchData}
                      />
                    ) : (
                      "Batter"
                    )}
                  </th>
                  <th>Runs</th>
                  <th>Balls</th>
                  <th>4s</th>
                  <th>6s</th>
                  <th>SR</th>
                  {email === user?.email && <th>Action</th>}
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}

                {activeBatters?.map((batter, index) => (
                  <ShowBatter
                    batter={batter}
                    matchId={singleMatchId}
                    singleMatchData={singleMatchData}
                    fetchBatterData={fetchBatterData}
                    key={index}
                  />
                ))}
              </tbody>
            </table>
          </section>

          {/* Bowlers */}
          <section className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="bg-gray-200">
                  <th>
                    {email === user?.email ? (
                      <AddBowler
                        match={singleMatchData}
                        fetchBatterData={fetchBatterData}
                      />
                    ) : (
                      "Bowler"
                    )}
                  </th>
                  <th>Over</th>
                  <th>M</th>
                  <th>R</th>
                  <th>W</th>
                  <th>Econ</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}

                {bowlers?.map((bowler, index) => (
                  <ShowBowler
                    bowler={bowler}
                    matchId={singleMatchId}
                    singleMatchData={singleMatchData}
                    fetchBatterData={fetchBatterData}
                    key={index}
                  />
                ))}
              </tbody>
            </table>
          </section>
          <section>{email === user?.email && <RunandBall />}</section>
        </>
      )}
    </main>
  );
};

export default SingleMatch;
