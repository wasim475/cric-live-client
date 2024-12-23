import { useContext } from "react";
import { fetchInfo } from "../../provider/FetchProvider";
import { handlesInfo } from "../../provider/HandleProvide";
import { stateInfo } from "../../provider/StateProvider";

const Extra = () => {
  const { singleMatchData, singleMatchId } = useContext(stateInfo);
  // const { singleMatchId } = useContext(handlesInfo);
  const { teamTotal } = singleMatchData;
  const { fetchBatterData } = useContext(fetchInfo);
  const { handleWide } = useContext(handlesInfo);

  const handleWide2 = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: 2, extra: "wide" }),
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
  const handleWide3 = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: 3, extra: "wide" }),
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

  const handleWide5 = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: 5, extra: "wide" }),
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

  const handleNoBall = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: 1, extra: "noBall" }),
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
 

  const handleLegBye = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: 1, extra: "legBye" }),
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
  const handleLegBye2 = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: 2, extra: "legBye" }),
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

  const handleLegBye4 = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: 4, extra: "legBye" }),
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
  const handleBye = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: 1, extra: "bye" }),
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
  const handleBye2 = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: 2, extra: "bye" }),
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

  const handleBye4 = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: 4, extra: "bye" }),
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
        onClick={() => handleWide2(teamTotal, singleMatchId)}
        className="bg-cyan-400 px-2 py-1 rounded-lg "
      >
        Wd-2
      </button>
      <button
        onClick={() => handleWide3(teamTotal, singleMatchId)}
        className="bg-cyan-400 px-2 py-1 rounded-lg "
      >
        Wd-3
      </button>
      <button
        onClick={() => handleWide5(teamTotal, singleMatchId)}
        className="bg-cyan-400 px-2 py-1 rounded-lg "
      >
        Wd-5
      </button>{" "}
      <button
        onClick={() => handleNoBall(teamTotal, singleMatchId)}
        className="bg-red-300 px-2 py-1 rounded-lg "
      >
        NB
      </button>
    
      <button
        onClick={() => handleLegBye(teamTotal, singleMatchId)}
        className="bg-cyan-400 px-2 py-1 rounded-lg  "
      >
        1LB
      </button>
      <button
        onClick={() => handleLegBye2(teamTotal, singleMatchId)}
        className="bg-cyan-400 px-2 py-1 rounded-lg  "
      >
        2LB
      </button>
      <button
        onClick={() => handleLegBye4(teamTotal, singleMatchId)}
        className="bg-cyan-400 px-2 py-1 rounded-lg  "
      >
        4LB
      </button>
      <button
        onClick={() => handleBye(teamTotal, singleMatchId)}
        className="bg-cyan-400 px-2 py-1 rounded-lg  "
      >
        1Bye
      </button>
      <button
        onClick={() => handleBye2(teamTotal, singleMatchId)}
        className="bg-cyan-400 px-2 py-1 rounded-lg  "
      >
        2Bye
      </button>
      <button
        onClick={() => handleBye4(teamTotal, singleMatchId)}
        className="bg-cyan-400 px-2 py-1 rounded-lg  "
      >
        4Bye
      </button>
    </div>
  );
};

export default Extra;
