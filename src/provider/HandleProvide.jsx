import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { stateInfo } from "./StateProvider";

export const handlesInfo = createContext(null);

const HandleProvider = ({ children }) => {
  const [singleMatchInfo, setSingleMatchInfo] = useState(() => {
    // Retrieve from local storage on initial render
    const savedMatch = localStorage.getItem("singleMatchInfo");
    return savedMatch ? JSON.parse(savedMatch) : null;
  });

  const { teamTotal, setTeamTotal, teamWicket, setTeamWicket } =
    useContext(stateInfo);

  const handleSingleMatch = (match) => {
    setSingleMatchInfo(match);
    // console.log(singleMatchInfo);
    // Save to local storage
    localStorage.setItem("singleMatchInfo", JSON.stringify(match));
  };

  /* ===========================================
  Runs Handle start
 =================================================== */
  const handleOne = (teamTotal, _id, teamBall, fetchBatterData) => {
    const matchId = _id; // Match ID to be sent

    fetch(`https://cric-server.vercel.app/matches/${matchId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: 1, ballIncrement: 1 }),
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

  const handleTwo = (totalRun, _id, fetchBatterData) => {
    const matchId = _id; // Match ID to be sent

    fetch(`https://cric-server.vercel.app/matches/${matchId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: 2, ballIncrement: 1 }),
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
  const handleThree = (totalRun, _id, fetchBatterData) => {
    const matchId = _id; // Match ID to be sent

    fetch(`https://cric-server.vercel.app/matches/${matchId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: 3, ballIncrement: 1 }),
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
  const handleFour = (totalRun, _id, fetchBatterData) => {
    const matchId = _id; // Match ID to be sent

    fetch(`https://cric-server.vercel.app/matches/${matchId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: 4, ballIncrement: 1 }),
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
  const handleSix = (totalRun, _id, fetchBatterData) => {
    const matchId = _id; // Match ID to be sent

    fetch(`https://cric-server.vercel.app/matches/${matchId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: 6, ballIncrement: 1 }),
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

  const handleZero = (totalRun, _id, fetchBatterData) => {
    const matchId = _id; // Match ID to be sent

    fetch(`https://cric-server.vercel.app/matches/${matchId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: 0, ballIncrement: 1 }),
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
  const handleOver = (teamOver, _id, fetchBatterData) => {
    const matchId = _id; // Match ID to be sent

    fetch(`https://cric-server.vercel.app/matches/${matchId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementOver: 1 }),
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
  /* ===========================================
  Runs Handle end 
 =================================================== */

  // Keep localStorage in sync with singleMatchInfo

  useEffect(() => {
    if (singleMatchInfo) {
      localStorage.setItem("singleMatchInfo", JSON.stringify(singleMatchInfo));
    }
  }, [singleMatchInfo]);

  const handleStrikeChange = (matchId, batterId) => {
    fetch(
      `https://cric-server.vercel.app/matches/${matchId}/batter/${batterId}/strike`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast("Strike updated!");
        } else {
          toast(data.message || "Failed to update strike");
        }
      })
      .catch((err) => console.error(err));
  };

  const info = {
    handleSingleMatch,
    singleMatchInfo,

    // handle runs
    handleOne,
    handleTwo,
    handleThree,
    handleFour,
    handleSix,
    handleZero,
    handleOver,
  };

  return <handlesInfo.Provider value={info}>{children}</handlesInfo.Provider>;
};

export default HandleProvider;
