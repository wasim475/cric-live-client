import { useContext } from "react";
import { fetchInfo } from "../../provider/FetchProvider";
import { stateInfo } from "../../provider/StateProvider";
import { motion } from "framer-motion";
const ExtraMinus = () => {
  const { singleMatchData, singleMatchId } = useContext(stateInfo);
  // const { singleMatchId } = useContext(handlesInfo);
  const { teamTotal } = singleMatchData;
  const { fetchBatterData } = useContext(fetchInfo);
  // const { singleMatchId } = useContext(stateInfo);

  const handleMinusWide = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: -1, extra: "wide" }),
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
  const handleMinusWide2 = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: -2, extra: "wide" }),
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
  const handleMinusWide3 = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: -3, extra: "wide" }),
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
  const handleMinusWide4 = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: -4, extra: "wide" }),
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
  const handleMinusWide5 = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: -5, extra: "wide" }),
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

  const handleMinusNoBall = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: -1, extra: "noBall" }),
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

  const handleMinusLegBye = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: -1, extra: "legBye" }),
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
  const handleMinusLegBye2 = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: -2, extra: "legBye" }),
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
  const handleMinusLegBye3 = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: -3, extra: "legBye" }),
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
  const handleMinusLegBye4 = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: -4, extra: "legBye" }),
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
  const handleMinusBye = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: -1, extra: "bye" }),
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
  const handleMinusBye2 = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: -2, extra: "bye" }),
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
  const handleMinusBye3 = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: -3, extra: "bye" }),
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
  const handleMinusBye4 = (total, id) => {
    fetch(`https://cric-server.vercel.app/extra/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ incrementValue: -4, extra: "bye" }),
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
      <motion.button
       whileTap={{ scale: 0.9 }}
        onClick={() => handleMinusWide(teamTotal, singleMatchId)}
        className="bg-red-400 text-white  px-2 py-1 rounded-lg"
      >
        Wd
      </motion.button>
      <motion.button
       whileTap={{ scale: 0.9 }}
        onClick={() => handleMinusWide2(teamTotal, singleMatchId)}
        className="bg-red-400 text-white  px-2 py-1 rounded-lg "
      >
        Wd-2
      </motion.button>
      <motion.button
       whileTap={{ scale: 0.9 }}
        onClick={() => handleMinusWide3(teamTotal, singleMatchId)}
        className="bg-red-400 text-white  px-2 py-1 rounded-lg "
      >
        Wd-3
      </motion.button>
      <motion.button
       whileTap={{ scale: 0.9 }}
        onClick={() => handleMinusWide4(teamTotal, singleMatchId)}
        className="bg-red-400 text-white  px-2 py-1 rounded-lg "
      >
        Wd-4
      </motion.button>
      <motion.button
       whileTap={{ scale: 0.9 }}
        onClick={() => handleMinusWide5(teamTotal, singleMatchId)}
        className="bg-red-400 text-white  px-2 py-1 rounded-lg "
      >
        Wd-5
      </motion.button>{" "}
      <motion.button
       whileTap={{ scale: 0.9 }}
        onClick={() => handleMinusNoBall(teamTotal, singleMatchId)}
        className="bg-red-300 px-2 py-1 text-white  rounded-lg "
      >
        NB
      </motion.button>
      <motion.button
       whileTap={{ scale: 0.9 }}
        onClick={() => handleMinusLegBye(teamTotal, singleMatchId)}
        className="bg-red-400 px-2 text-white  py-1 rounded-lg  "
      >
        1LB
      </motion.button>
      <motion.button
       whileTap={{ scale: 0.9 }}
        onClick={() => handleMinusLegBye2(teamTotal, singleMatchId)}
        className="bg-red-400 text-white  px-2 py-1 rounded-lg  "
      >
        2LB
      </motion.button>
      <motion.button
       whileTap={{ scale: 0.9 }}
        onClick={() => handleMinusLegBye3(teamTotal, singleMatchId)}
        className="bg-red-400 text-white  px-2 py-1 rounded-lg  "
      >
        3LB
      </motion.button>
      <motion.button
       whileTap={{ scale: 0.9 }}
        onClick={() => handleMinusLegBye4(teamTotal, singleMatchId)}
        className="bg-red-400 text-white  px-2 py-1 rounded-lg  "
      >
        4LB
      </motion.button>{" "}
      <motion.button
       whileTap={{ scale: 0.9 }}
        onClick={() => handleMinusBye(teamTotal, singleMatchId)}
        className="bg-red-400 px-2 py-1 text-white  rounded-lg  "
      >
        1Bye
      </motion.button>
      <motion.button
       whileTap={{ scale: 0.9 }}
        onClick={() => handleMinusBye2(teamTotal, singleMatchId)}
        className="bg-red-400 px-2 text-white  py-1 rounded-lg  "
      >
        2Bye
      </motion.button>
      <motion.button
       whileTap={{ scale: 0.9 }}
        onClick={() => handleMinusBye3(teamTotal, singleMatchId)}
        className="bg-red-400 px-2 py-1 text-white  rounded-lg  "
      >
        3Bye
      </motion.button>
      <motion.button
       whileTap={{ scale: 0.9 }}
        onClick={() => handleMinusBye4(teamTotal, singleMatchId)}
        className="bg-red-400 px-2 py-1 text-white rounded-lg  "
      >
        4Bye
      </motion.button>
    </div>
  );
};

export default ExtraMinus;
