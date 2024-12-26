import { useContext } from 'react';
import { fetchInfo } from '../../provider/FetchProvider';
import { stateInfo } from '../../provider/StateProvider';
import { handlesInfo } from '../../provider/HandleProvide';
import { motion } from "framer-motion";

const More = () => {
  // const { singleMatchId } = useContext(handlesInfo);
  const { singleMatchData, activeBatters } = useContext(stateInfo);
  const { fetchBatterData } = useContext(fetchInfo);

  const { team1, team2, batNow, teamBall, totalOver, _id, teamTotal } =
    singleMatchData;
  const {
    handleThree,
    handleMOver,
    handleFive,
  } = useContext(handlesInfo);
  return (
    <>
      <section className='grid grid-cols-4 gap-2'>
        <motion.button
         whileTap={{ scale: 0.9 }}
          onClick={() => handleThree(teamTotal, _id, fetchBatterData)}
          className="bg-green-600 px-6 py-3 rounded-lg text-white font-bold "
        >
          3
        </motion.button>
        <motion.button
         whileTap={{ scale: 0.9 }}
          onClick={() => handleFive(teamTotal, _id, fetchBatterData)}
          className="bg-green-600 px-6 py-3 rounded-lg text-white font-bold "
        >
          5
        </motion.button>
        {/* Maiden over */}
        <motion.button
         whileTap={{ scale: 0.9 }}
          onClick={() => handleMOver(totalOver, _id, fetchBatterData)}
          className="bg-violet-500  py-3 rounded-lg text-white font-bold  "
        >
          M.Over
        </motion.button>
      
      </section>
    </>
  );
};

export default More;
