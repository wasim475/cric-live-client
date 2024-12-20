import { useContext } from 'react';
import { fetchInfo } from '../../provider/FetchProvider';
import { handlesInfo } from "../../provider/HandleProvide";
import { stateInfo } from '../../provider/StateProvider';

const RunPlus = () => {
  const { singleMatchInfo } = useContext(handlesInfo);
  const { singleMatchData, activeBatters } = useContext(stateInfo);
  const { fetchBatterData } = useContext(fetchInfo);

  const { team1, team2, batNow, teamBall, totalOver, _id, teamTotal } =
    singleMatchData;
  const {
    handleOne,
    handleTwo,
    handleThree,
    handleFour,
    handleSix,
    handleZero,
    handleOver,
    handleMOver,
  } = useContext(handlesInfo);
  return (
    <>
      <section className='grid grid-cols-4 gap-2'>
        <button
          onClick={() => handleOne(teamTotal, _id, teamBall, fetchBatterData)}
          className="bg-green-600 px-6 py-3 rounded-lg text-white font-bold "
        >
          1
        </button>
        <button
          onClick={() => handleTwo(teamTotal, _id, fetchBatterData)}
          className="bg-green-600 px-6 py-3 rounded-lg text-white font-bold "
        >
          2
        </button>
        <button
          onClick={() => handleThree(teamTotal, _id, fetchBatterData)}
          className="bg-green-600 px-6 py-3 rounded-lg text-white font-bold "
        >
          3
        </button>
        <button
          onClick={() => handleFour(teamTotal, _id, fetchBatterData)}
          className="bg-green-600 px-6 py-3 rounded-lg text-white font-bold "
        >
          4
        </button>
        <button
          onClick={() => handleSix(teamTotal, _id, fetchBatterData)}
          className="bg-green-600 px-6 py-3 rounded-lg text-white font-bold "
        >
          6
        </button>
    
        <button
          onClick={() => handleOver(totalOver, _id, fetchBatterData)}
          className="bg-violet-500 px-2 py-3 rounded-lg text-white font-bold  "
        >
          Over
        </button>
        <button
          onClick={() => handleMOver(totalOver, _id, fetchBatterData)}
          className="bg-violet-500  py-3 rounded-lg text-white font-bold  "
        >
          M.Ov
        </button>
        <button
          onClick={() => handleZero(teamTotal, _id, fetchBatterData)}
          className="bg-blue-600 px-4 py-3 rounded-lg text-white font-bold "
        >
          Dot
        </button>
      </section>
    </>
  );
};

export default RunPlus;