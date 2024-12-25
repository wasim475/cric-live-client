import { useContext, useState } from "react";
import { BiSolidCricketBall } from "react-icons/bi";
import { AuthContex } from "../../../../provider/AuthProvider";
import { CiEdit } from "react-icons/ci";
import EditBowler from "../../../../Utility/Edit Batter and Bowler/EditBowler";
import { stateInfo } from "../../../../provider/StateProvider";
import { fetchInfo } from '../../../../provider/FetchProvider';

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
            {/* <button onClick={() => document.getElementById("my_modal_2").showModal()}> */}
            <button onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              setOpenEditModal(!openEditModal)
            }}>
              <CiEdit />
            </button>

            {/* Modal Component */}
            {
              openEditModal && 
              <section className="rounded-lg bg-transparent w-full h-full absolute top-10 left-0 z-40"
                onClick={(e)=>{
                  e.stopPropagation()
                }}
              >
              <div className="modal-box flex w-60 flex-col items-center absolute top-1 left-5 ">
                {/* Close button */}
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-1 top-0"
                  onClick={() => setOpenEditModal(!openEditModal)}
                >
                  ✕
                </button>
                <input
                  type="text"
                  placeholder="Type here"
                  value={updateName}
                  onChange={(e) => setUpdateName(e.target.value)} // Update state on change
                  className="input input-bordered w-full max-w-xs"
                />
                <button
                  className="bg-green-500 mt-2 px-5 rounded-lg py-2 text-white"
                  onClick={()=>handleBowlerEdit(matchId, id)}
                >
                  Update
                </button>
              </div>
            </section>
            }
          </>
           }
          </span>
          <span className="text-pink-950">
            {bowler.strike && <BiSolidCricketBall />}
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
