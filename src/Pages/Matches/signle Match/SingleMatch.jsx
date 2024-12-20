import { useContext, useEffect, useState } from "react";
import { stateInfo } from "../../../provider/StateProvider";
import { handlesInfo } from "../../../provider/HandleProvide";
import AddBatter from "./Add Batter/AddBatter";
import ShowBatter from "./Add Batter/ShowBatter";
import RunandBall from "../../../Utility/Run and Ball/RunandBall";
import { fetchInfo } from "../../../provider/FetchProvider";
import ScoreCard from "../../../Utility/ScoreCard/ScoreCard";
import AddBowler from "./Add Bowler/AddBowler";
import ShowBowler from "./Add Bowler/ShowBowler";
import { AuthContex } from '../../../provider/AuthProvider';
import loader from "../../../assets/pic/loader.gif"

const SingleMatch = () => {
  const {user, loading}= useContext(AuthContex)
  const { matches, setMatches } = useContext(stateInfo);

  const { singleMatchInfo } = useContext(handlesInfo); //only id is here
  // const { team1, team2, batNow, totalOver, _id, teamTotal,teamOver,teamWicket } = singleMatchInfo;
  const { batters, setBatters, singleMatchData, setSingleMatchData, bowlers,activeBatters } =
    useContext(stateInfo);
  const { fetchBatterData } = useContext(fetchInfo);

  useEffect(() => {
    fetchBatterData();
  }, [singleMatchInfo]);
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
    bye
  } = singleMatchData;
  // console.log("teamTotal",teamTotal)
 
  const remaining = target - teamTotal;
  const remainingWicket = 10 - teamWicket;
  return (
    <main>
      {
        loading 
        ?
        <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
        <img
          src={loader}
          className="rounded-full h-28 w-28"
        />
      </div>
        :
        <>
              <section>
        <h1 className="text-center">
          {" "}
          <span className="text-xl font-bold">{team1}</span>
          <span> vs </span>
          <span className="text-xl font-bold">{team2}</span>
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
          <span className="text-gray-100">{teamWicket}</span>{" "}  <br />
          Overs: <span className="text-white">{teamOver} </span>({totalOver}) <br />
          <span className='text-sm'>Extra: <span className='text-white'>{extra}</span> (<span className='text-xs'>WD:{wide} NB:{noBall} LB:{legbye} B:{bye}</span>)</span>
        </h1>
        
        <ScoreCard />
      </section>

      {/* Batters */}
      <section className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-gray-200">
              <th>
              {
                  email === user?.email 
                  ?
                  <AddBatter
                  fetchBatterData={fetchBatterData}
                  match={singleMatchData}
                  />
                  :
                  "Batter"
                }
                
              </th>
              <th>Runs</th>
              <th>Balls</th>
              <th>4s</th>
              <th>6s</th>
              <th>SR</th>
              {
                email === user?.email &&
                <th>Action</th>
              }
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {activeBatters?.map((batter, index) => (
              <ShowBatter
                batter={batter}
                matchId={singleMatchInfo}
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
                {
                  email === user?.email 
                  ?
                  <AddBowler
                    match={singleMatchData}
                    fetchBatterData={fetchBatterData}
                  />
                  :
                  "Bowler"
                }
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
                  matchId={singleMatchInfo}
                  singleMatchData={singleMatchData}
                  fetchBatterData={fetchBatterData}
                  key={index}
                />
              ))}
            
          </tbody>
        </table>
      </section>
      <section>
        {
          email=== user?.email &&
        <RunandBall />
        }
      </section>
        </>
      }

    </main>
  );
};

export default SingleMatch;
