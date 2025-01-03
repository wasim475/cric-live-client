import { useContext } from "react";
import { fetchInfo } from "../../provider/FetchProvider";
import { stateInfo } from "../../provider/StateProvider";
import { motion } from "framer-motion";
const RunMinus = () => {
  // const { singleMatchId } = useContext(handlesInfo);
  const { singleMatchData, activeBatters } = useContext(stateInfo);
  const { fetchBatterData } = useContext(fetchInfo);

  const { team1, team2, batNow, teamBall, totalOver, _id, teamTotal } =
    singleMatchData;

  const handleMinusOne = (totalRun, _id) => {
    const matchId = _id; // Match ID to be sent

    fetch(`https://cric-server.vercel.app/matches/${matchId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: -1, ballIncrement: -1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("Response from backend:", data);
        if (data.modifiedCount > 0) {
          //   toast(`Run Decremented`);
          console.log(fetchBatterData());
          fetchBatterData();
        } else {
          console.log("No changes made.");
        }
      })
      .catch((error) => console.error("Error updating teamTotal:", error));
  };
  const handleMinusTwo = (totalRun, _id) => {
    const matchId = _id; // Match ID to be sent

    fetch(`https://cric-server.vercel.app/matches/${matchId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: -2, ballIncrement: -1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("Response from backend:", data);
        if (data.modifiedCount > 0) {
          //   toast(`Run Decremented`);
          console.log(fetchBatterData());
          fetchBatterData();
        } else {
          console.log("No changes made.");
        }
      })
      .catch((error) => console.error("Error updating teamTotal:", error));
  };
  const handleMinusThree = (totalRun, _id) => {
    const matchId = _id; // Match ID to be sent

    fetch(`https://cric-server.vercel.app/matches/${matchId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: -3, ballIncrement: -1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("Response from backend:", data);
        if (data.modifiedCount > 0) {
          console.log(fetchBatterData());
          fetchBatterData();
        } else {
          console.log("No changes made.");
        }
      })
      .catch((error) => console.error("Error updating teamTotal:", error));
  };
  const handleMinusFour = (totalRun, _id) => {
    const matchId = _id; // Match ID to be sent

    fetch(`https://cric-server.vercel.app/matches/${matchId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: -4, ballIncrement: -1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("Response from backend:", data);
        if (data.modifiedCount > 0) {
          //   toast(`Run Decremented`);
          console.log(fetchBatterData());
          fetchBatterData();
        } else {
          console.log("No changes made.");
        }
      })
      .catch((error) => console.error("Error updating teamTotal:", error));
  };
  const handleMinusSix = (totalRun, _id) => {
    const matchId = _id; // Match ID to be sent

    fetch(`https://cric-server.vercel.app/matches/${matchId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: -6, ballIncrement: -1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("Response from backend:", data);
        if (data.modifiedCount > 0) {
          //   toast(`Run Decremented`);
          console.log(fetchBatterData());
          fetchBatterData();
        } else {
          console.log("No changes made.");
        }
      })
      .catch((error) => console.error("Error updating teamTotal:", error));
  };
  const handleMinusOver = (teamOver, _id) => {
    const matchId = _id; // Match ID to be sent

    fetch(`https://cric-server.vercel.app/matches/${matchId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementOver: -1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("Response from backend:", data);
        if (data.modifiedCount > 0) {
          // toast(`Run Incremented`);
          fetchBatterData();
        } else {
          console.log("No changes made.");
        }
      })
      .catch((error) => console.error("Error updating teamTotal:", error));
  };

  return (
    <>
      <section className="grid grid-cols-4 gap-2">
        <motion.button
         whileTap={{ scale: 0.9 }}
          onClick={() => handleMinusOne(teamTotal, _id)}
          className="bg-red-500 px-6 py-3 rounded-lg text-white font-bold "
        >
          -1
        </motion.button>
        <motion.button
         whileTap={{ scale: 0.9 }}
          onClick={() => handleMinusTwo(teamTotal, _id)}
          className="bg-red-500 px-6 py-3 rounded-lg text-white font-bold "
        >
          -2
        </motion.button>
        <motion.button
         whileTap={{ scale: 0.9 }}
          onClick={() => handleMinusThree(teamTotal, _id)}
          className="bg-red-500 px-6 py-3 rounded-lg text-white font-bold "
        >
          -3
        </motion.button>
        <motion.button
         whileTap={{ scale: 0.9 }}
          onClick={() => handleMinusFour(teamTotal, _id)}
          className="bg-red-500 px-6 py-3 rounded-lg text-white font-bold "
        >
          -4
        </motion.button>
        <motion.button
         whileTap={{ scale: 0.9 }}
          onClick={() => handleMinusSix(teamTotal, _id)}
          className="bg-red-500 px-6 py-3 rounded-lg text-white font-bold "
        >
          -6
        </motion.button>
        <motion.button
         whileTap={{ scale: 0.9 }}
          onClick={() => handleMinusZero(teamTotal, _id)}
          className="bg-blue-200 px-3 py-3 rounded-lg text-red-500 font-bold "
        >
          -Dot
        </motion.button>

        <motion.button
         whileTap={{ scale: 0.9 }}
          onClick={() => handleMinusOver(totalOver, _id)}
          className="bg-violet-200 px-4 py-3 rounded-lg text-red-500 font-bold  "
        >
          -Ov
        </motion.button>
        <motion.button
         whileTap={{ scale: 0.9 }}
          onClick={() => handleMinusMOver(totalOver, _id)}
          className="bg-violet-200 px-2 py-3 rounded-lg text-red-500 font-bold  "
        >
          -MOv
        </motion.button>
      </section>
    </>
  );
};

export default RunMinus;
