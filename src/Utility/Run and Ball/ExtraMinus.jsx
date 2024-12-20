import { useContext } from "react";
import { fetchInfo } from "../../provider/FetchProvider";
import { handlesInfo } from "../../provider/HandleProvide";
import { stateInfo } from "../../provider/StateProvider";

const ExtraMinus = () => {
  const { singleMatchData } = useContext(stateInfo);
  const { singleMatchInfo } = useContext(handlesInfo);
  const { teamTotal } = singleMatchData;
  const { fetchBatterData } = useContext(fetchInfo);

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
    <div className='grid grid-cols-4 gap-2'>
      <button
        onClick={() => handleMinusWide(teamTotal, singleMatchInfo)}
        className="bg-red-400 text-white  px-2 py-1 rounded-lg"
      >
        Wd
      </button>
      <button
        onClick={() => handleMinusWide2(teamTotal, singleMatchInfo)}
        className="bg-red-400 text-white  px-2 py-1 rounded-lg "
      >
        Wd-2
      </button>
      <button
        onClick={() => handleMinusWide3(teamTotal, singleMatchInfo)}
        className="bg-red-400 text-white  px-2 py-1 rounded-lg "
      >
        Wd-3
      </button>
      <button
        onClick={() => handleMinusWide4(teamTotal, singleMatchInfo)}
        className="bg-red-400 text-white  px-2 py-1 rounded-lg "
      >
        Wd-4
      </button>
      <button
        onClick={() => handleMinusWide5(teamTotal, singleMatchInfo)}
        className="bg-red-400 text-white  px-2 py-1 rounded-lg "
      >
        Wd-5
      </button>{" "}
     
      <button
        onClick={() => handleMinusNoBall(teamTotal, singleMatchInfo)}
        className="bg-red-300 px-2 py-1 text-white  rounded-lg "
      >
        NB
      </button>
      <button
        onClick={() => handleMinusLegBye(teamTotal, singleMatchInfo)}
        className="bg-red-400 px-2 text-white  py-1 rounded-lg  "
      >
        1LB
      </button>
      <button
        onClick={() => handleMinusLegBye2(teamTotal, singleMatchInfo)}
        className="bg-red-400 text-white  px-2 py-1 rounded-lg  "
      >
        2LB
      </button>
      <button
        onClick={() => handleMinusLegBye3(teamTotal, singleMatchInfo)}
        className="bg-red-400 text-white  px-2 py-1 rounded-lg  "
      >
        3LB
      </button>
      <button
        onClick={() => handleMinusLegBye4(teamTotal, singleMatchInfo)}
        className="bg-red-400 text-white  px-2 py-1 rounded-lg  "
      >
        4LB
      </button>{" "}
     
      <button
        onClick={() => handleMinusBye(teamTotal, singleMatchInfo)}
        className="bg-red-400 px-2 py-1 text-white  rounded-lg  "
      >
        1Bye
      </button>
      <button
        onClick={() => handleMinusBye2(teamTotal, singleMatchInfo)}
        className="bg-red-400 px-2 text-white  py-1 rounded-lg  "
      >
        2Bye
      </button>
      <button
        onClick={() => handleMinusBye3(teamTotal, singleMatchInfo)}
        className="bg-red-400 px-2 py-1 text-white  rounded-lg  "
      >
        3Bye
      </button>
      <button
        onClick={() => handleMinusBye4(teamTotal, singleMatchInfo)}
        className="bg-red-400 px-2 py-1 text-white rounded-lg  "
      >
        4Bye
      </button>
    </div>
  );
};

export default ExtraMinus;
