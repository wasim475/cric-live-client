import { useContext } from 'react';
import { fetchInfo } from '../../provider/FetchProvider';
import { handlesInfo } from "../../provider/HandleProvide";
import { stateInfo } from '../../provider/StateProvider';
import { motion } from "framer-motion";
const RunPlus = () => {
  // const { singleMatchId } = useContext(handlesInfo);
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
    handleWide,
    handleNoBall
  } = useContext(handlesInfo);
  return (
    <>
      <section className='grid grid-cols-4 gap-2'>
        
        
       
       
        <motion.button
         
         whileTap={{ scale: 0.9 }}
          onClick={() => handleSix(teamTotal, _id, fetchBatterData)}
          className="bg-green-600 px-6 py-3 rounded-lg text-white font-bold "
        >
          6
        </motion.button>
        <motion.button
        whileTap={{ scale: 0.9 }}
          onClick={() => handleFour(teamTotal, _id, fetchBatterData)}
          className="bg-green-600 px-6 py-3 rounded-lg text-white font-bold "
        >
          4
        </motion.button>
        <motion.button
        whileTap={{ scale: 0.9 }}
          onClick={() => handleTwo(teamTotal, _id, fetchBatterData)}
          className="bg-green-600 px-6 py-3 rounded-lg text-white font-bold "
        >
          2
        </motion.button>
        <motion.button
        whileTap={{ scale: 0.9 }}
          onClick={() => handleOne(teamTotal, _id, teamBall, fetchBatterData)}
          className="bg-green-600 px-6 py-3 rounded-lg text-white font-bold "
        >
          1
        </motion.button>
       
        <motion.button
        whileTap={{ scale: 0.9 }}
          onClick={() => handleOver(totalOver, _id, fetchBatterData)}
          className="bg-violet-500 px-2 py-3 rounded-lg text-white font-bold  "
        >
          Over
        </motion.button>
        <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => handleNoBall(teamTotal,  _id, fetchBatterData)}
        className="bg-orange-500 text-white font-bold px-2 py-1 rounded-lg "
      >
        No Ball
      </motion.button>
        {/* Maiden over */}
        {/* <motion.button
          onClick={() => handleMOver(totalOver, _id, fetchBatterData)}
          className="bg-violet-500  py-3 rounded-lg text-white font-bold  "
        >
          M.Ov
        </motion.button> */}
        <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => handleWide(teamTotal, _id, fetchBatterData)}
        className="bg-cyan-400 px-0 py-1 text-white font-bold rounded-lg"
      >
        Wide
      </motion.button>
        <motion.button
        whileTap={{ scale: 0.9 }}
          onClick={() => handleZero(teamTotal, _id, fetchBatterData)}
          className="bg-blue-600 px-4 py-3 rounded-lg text-white font-bold "
        >
          Dot
        </motion.button>
      </section>
    </>
  );
};

export default RunPlus;
