import { useContext } from "react";
import { fetchInfo } from "../../provider/FetchProvider";
import { stateInfo } from "../../provider/StateProvider";

const ExtraMore = () => {
  const { singleMatchData, singleMatchId } = useContext(stateInfo);
  const { teamTotal } = singleMatchData;
  const { fetchBatterData } = useContext(fetchInfo);
  const handleWide4 = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: 4, extra: "wide" }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("Response from backend:", data);
        if (data.modifiedCount > 0) {
          fetchBatterData();
        } else {
          console.log("No changes made.");
        }
      })
      .catch((error) => console.error("Error updating teamTotal:", error));
  };
  const handleLegBye3 = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: 3, extra: "legBye" }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("Response from backend:", data);
        if (data.modifiedCount > 0) {
          fetchBatterData();
        } else {
          console.log("No changes made.");
        }
      })
      .catch((error) => console.error("Error updating teamTotal:", error));
  };
  const handleBye3 = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: 3, extra: "bye" }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("Response from backend:", data);
        if (data.modifiedCount > 0) {
          fetchBatterData();
        } else {
          console.log("No changes made.");
        }
      })
      .catch((error) => console.error("Error updating teamTotal:", error));
  };
  const handleNoBallThree = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: 4, extra: "noBall" }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("Response from backend:", data);
        if (data.modifiedCount > 0) {
          fetchBatterData();
        } else {
          console.log("No changes made.");
        }
      })
      .catch((error) => console.error("Error updating teamTotal:", error));
  };

  return (
    <div className="grid grid-cols-4 gap-2">
      <button
        onClick={() => handleWide4(teamTotal, singleMatchId)}
        className="bg-cyan-400 px-2 py-1 rounded-lg "
      >
        Wd-4
      </button>
      <button
        onClick={() => handleLegBye3(teamTotal, singleMatchId)}
        className="bg-cyan-400 px-2 py-1 rounded-lg  "
      >
        3LB
      </button>
      <button
        onClick={() => handleBye3(teamTotal, singleMatchId)}
        className="bg-cyan-400 px-2 py-1 rounded-lg  "
      >
        3Bye
      </button>

      <button
        onClick={() => handleNoBallThree(teamTotal, singleMatchId)}
        className="bg-red-300 px-2 py-1 rounded-lg "
      >
        NB+3
      </button>
    </div>
  );
};

export default ExtraMore;
