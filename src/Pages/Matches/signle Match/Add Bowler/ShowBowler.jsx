import { useContext, useState } from "react";
import { BiSolidCricketBall } from "react-icons/bi";
import { AuthContex } from "../../../../provider/AuthProvider";
import { CiEdit } from "react-icons/ci";
import { GiDeathStar } from "react-icons/gi";
import EditBowler from "../../../../Utility/Edit Batter and Bowler/EditBowler";
import { stateInfo } from "../../../../provider/StateProvider";
import { fetchInfo } from '../../../../provider/FetchProvider';
import { motion } from "framer-motion";
const ShowBowler = ({
  bowler,
  matchId,
  fetchBatterData,
  singleMatchData,
  
}) => {
  const { user } = useContext(AuthContex);
  let { name, Runs, Over, Maiden, Wicket, id, stike } = bowler;
  const { email } = singleMatchData;
  const economy = Over > 0 ? parseFloat(Runs / Over).toFixed(1) : 0;
  const { setEditInfo } = useContext(stateInfo);
  const [updateName, setUpdateName] = useState(name)
  const [openEditModal, setOpenEditModal]= useState(false)
  // const { fetchBatterData } = useContext(fetchInfo);
  const handleStrikeChange = (matchId, bowlerId) => {
    fetch(
      `https://cric-server.vercel.app/matches/${matchId}/bowler/${bowlerId}/strike`,
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

  const handleEdit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
  };


  const handleBowlerEdit = (mId,bowlerId) => {
    fetch(`https://cric-server.vercel.app/matches/${mId}/updatebowlername/${bowlerId}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({updateName})
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            fetchBatterData()
              setOpenEditModal(!openEditModal)
          }
        });
  };
  return (
    <>
      <tr
        onClick={() =>
          singleMatchData?.email === user?.email &&
          handleStrikeChange(matchId, id)
        }
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
                  className="modal-box bg-white rounded-lg p-5 w-80 relative shadow-lg -top-40"
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
          <span className="text-violet-600">
            {bowler.strike && <> <div className='w-3 h-3 bg-green-200 rounded-full flex justify-center items-center'> <div className='w-[6px] h-[6px] bg-green-600 rounded-full'></div> </div></> }
          </span>
        </th>
        <td>{Over}</td>
        <td>{Maiden}</td>
        <td>{Runs}</td>
        <td>{Wicket}</td>
        <td>{economy}</td>
        {/* <td>
          <button className="font-bold text-red-500 border-2 border-red-500 px-2 rounded-lg" onClick={(e) => handleOut(id,e)}>Out</button>
        </td> */}
      </tr>
    </>
  );
};

export default ShowBowler;
