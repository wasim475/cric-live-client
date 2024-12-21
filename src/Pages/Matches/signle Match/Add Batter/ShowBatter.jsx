import { useContext, useState } from "react";
import { VscTriangleLeft } from "react-icons/vsc";
import { toast } from "react-toastify";
import { AuthContex } from "../../../../provider/AuthProvider";
import { stateInfo } from "../../../../provider/StateProvider";

const ShowBatter = ({ batter, matchId, fetchBatterData, singleMatchData }) => {
  let { name, run, ball, fours, sixes, sr, id, active } = batter;
  const { batters } = useContext(stateInfo);
  const strikeRate = ball > 0 ? parseFloat(((run * 100) / ball).toFixed(1)) : 0;
  const { user } = useContext(AuthContex);
  const { email } = singleMatchData;
  const [outOptins, setOutOptins] = useState(false);
  const handleOut = (batterId) => {
    fetch(`https://cric-server.vercel.app/matches/${matchId}/${batterId}`, {
      method: "PUT", // Use uppercase "PUT" for better consistency
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        active: false, // Mark the batter as inactive
        increamentWicket: 1, // Increment the wicket count
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Server Response:", data);

        if (data.modifiedCount > 0) {
          // Update UI with new data
          fetchBatterData(); // Refetch the updated batter and bowler details
          toast(`${name} is Out`); // Display a success message
          setOutOptins(!outOptins);
        } else {
          toast.warn("No changes made. Please check the data."); // Handle no update
        }
      })
      .catch((err) => {
        console.error("Error occurred:", err);
        toast.error("Something went wrong! Please try again.");
      });
  };
  console.log(batters);
  const handleRunOut = (batterId) => {
    fetch(`https://cric-server.vercel.app/matches/${matchId}/${batterId}`, {
      method: "PUT", // Use uppercase "PUT" for better consistency
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        active: false, // Mark the batter as inactive
        increamentWicket: 1, // Increment the wicket count
        wicket: "runOut",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Server Response:", data);

        if (data.modifiedCount > 0) {
          // Update UI with new data
          fetchBatterData(); // Refetch the updated batter and bowler details
          toast(`${name} is Run Out`); // Display a success message
          setOutOptins(!outOptins);
        } else {
          toast.warn("No changes made. Please check the data."); // Handle no update
        }
      })
      .catch((err) => {
        console.error("Error occurred:", err);
        toast.error("Something went wrong! Please try again.");
      });
  };

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
          fetchBatterData();
          // toast("Strike updated!");
        } else {
          // toast(data.message || "Failed to update strike");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <tr
        onClick={() => email === user?.email && handleStrikeChange(matchId, id)}
      >
        <th className="flex items-center gap-x-1">
          {name}{" "}
          <span className="text-green-500 text-lg">
            {batter.strike && <VscTriangleLeft />}
          </span>
        </th>
        <td>{run}</td>
        <td>{ball}</td>
        <td>{fours}</td>
        <td>{sixes}</td>
        <td>{strikeRate ? strikeRate : 0}</td>
        {email === user?.email && (
          <td>
            <div
              onClick={(e) => {
                e.stopPropagation();
                setOutOptins(!outOptins);
              }}
              className="bg-red-400 dropdown dropdown-left dropdown-end rounded-lg text-white"
            >
              <div tabIndex={0} role="button" className="px-2">
                <button disabled={batters.length >= 10}>Out</button>
              </div>
              {outOptins && (
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box w-36 p-2 shadow mt-2 z-20 flex flex-col gap-y-1"
                >
                  <li
                    className="font-bold text-red-500 border-2 border-red-500 px-2 rounded-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOut(id);
                    }}
                  >
                    Out by bowler
                  </li>
                  <li
                    className="font-bold text-red-500 border-2 border-red-500 px-2 rounded-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRunOut(id);
                    }}
                  >
                    Run Out
                  </li>
                </ul>
              )}
            </div>
          </td>
        )}
      </tr>
    </>
  );
};

export default ShowBatter;
