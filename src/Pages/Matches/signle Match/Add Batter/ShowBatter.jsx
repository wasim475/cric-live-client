import { useContext, useState } from "react";
import { VscTriangleLeft } from "react-icons/vsc";
import { CiEdit } from "react-icons/ci";
import { toast } from "react-toastify";
import { AuthContex } from "../../../../provider/AuthProvider";
import { stateInfo } from "../../../../provider/StateProvider";
import { motion } from "framer-motion";
const ShowBatter = ({ batter, matchId, fetchBatterData, singleMatchData }) => {
  let { name, run, ball, fours, sixes, sr, id, active } = batter;
  const { batters, bowlers } = useContext(stateInfo);
  const strikeRate = ball > 0 ? parseFloat(((run * 100) / ball).toFixed(1)) : 0;
  const { user } = useContext(AuthContex);
  const { email } = singleMatchData;
  const [outOptins, setOutOptins] = useState(false);
  const [updateName, setUpdateName] = useState(name);
  const [openEditModal, setOpenEditModal] = useState(false);
  const currentBowler = bowlers?.find((bowler)=>bowler?.strike)
  const outBy = currentBowler?.name
  console.log(outBy)
  const handleOut = (batterId) => {
    fetch(`https://cric-server.vercel.app/matches/${matchId}/${batterId}`, {
      method: "PUT", // Use uppercase "PUT" for better consistency
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        active: false, // Mark the batter as inactive
        increamentWicket: 1, // Increment the wicket count
        outBy: outBy,
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
  // console.log(batters);
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

  const handleBowlerEdit = (mId, batterId) => {
    fetch(
      `https://cric-server.vercel.app/matches/${mId}/updatebattername/${batterId}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ updateName }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          fetchBatterData();
          setOpenEditModal(!openEditModal);
        }
      });
  };
  return (
    <>
      <tr
        onClick={() => email === user?.email && handleStrikeChange(matchId, id)}
      >
        <th className="flex items-center gap-x-1">
          {name}
          <span>
            {
              user?.email === email && 
              <>
              {/* Button to open the modal */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setOpenEditModal(!openEditModal);
                }}
              >
                <CiEdit />
              </button>
            
              {/* Modal Component */}
              {openEditModal && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation()
                    setOpenEditModal(false)
                  }} // Close modal on overlay click
                >
                  <div
                    className="modal-box bg-white rounded-lg p-5 w-80 relative shadow-lg"
                    onClick={(e) => e.stopPropagation()} // Prevent overlay click from closing modal
                  >
                    {/* Close button */}
                    <button
                      className="btn btn-sm btn-circle btn-ghost absolute top-0 right-0 bg-red-500 text-white font-bold"
                      onClick={() => setOpenEditModal(!openEditModal)}
                    >
                      ✕
                    </button>
                    {/* Input and Update button */}
                    <div className="flex flex-col items-center">
                      <input
                        type="text"
                        placeholder="Type here"
                        value={updateName}
                        onChange={(e) => setUpdateName(e.target.value)} // Update state on change
                        className="input input-bordered w-full max-w-xs mb-4"
                      />
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        className="bg-green-500 px-5 rounded-lg py-2 text-white"
                        onClick={() => handleBowlerEdit(matchId, id)}
                      >
                        Update
                      </motion.button>
                    </div>
                  </div>
                </div>
              )}
            </>
            
            }
          </span>
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
              <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center"
              onClick={() => setOpenDropdownModal(false)} // Close modal on overlay click
            >
              <ul
                className="bg-white rounded-lg w-64 p-5 shadow-lg z-50 flex flex-col gap-y-4"
                onClick={(e) => e.stopPropagation()} // Prevent overlay click from closing modal
              >
                <li
                  className="font-bold text-red-500 border-2 border-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOut(id);
                    
                  }}
                >
                  Out by bowler
                </li>
                <li
                  className="font-bold text-red-500 border-2 border-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRunOut(id);
                    setOpenDropdownModal(false); // Close modal after selection
                  }}
                >
                  Run Out
                </li>
              </ul>
            </div>
              
              )}
            </div>
          </td>
        )}
      </tr>
    </>
  );
};

export default ShowBatter;
