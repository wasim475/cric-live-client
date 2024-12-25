import React, { useContext, useState, useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { stateInfo } from "../../provider/StateProvider";
import Swal from 'sweetalert2';
import { fetchInfo } from '../../provider/FetchProvider';

const EditBowler = () => {
  const { editInfo } = useContext(stateInfo);
  const { fetchBatterData } = useContext(fetchInfo);
  const { name, matchId, id } = editInfo || {}; // Handle cases where editInfo might be undefined

  console.log(name)

  const [UpdateName, setUpdateName] = useState(name); // Initialize state

  // Synchronize UpdateName with editInfo.name whenever editInfo changes
  // useEffect(() => {
  //   setUpdateName(name || "");
  // }, [id]);

  const handleBowlerEdit = () => {
    fetch(`https://cric-server.vercel.app/matches/${matchId}/update/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({UpdateName})
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.success);
          if (data.success) {
            fetchBatterData()
              document.getElementById("my_modal_2").close(); // Close modal after updating
          }
        });
  };

  return (
    <>
      {/* Button to open the modal */}
      {/* <button onClick={() => document.getElementById("my_modal_2").showModal()}> */}
      <button>
        <CiEdit />
      </button>

      {/* Modal Component */}
      <dialog id="my_modal_2" className="rounded-lg bg-transparent">
        <div className="modal-box flex flex-col items-center">
          {/* Close button */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-1 top-0"
            onClick={() => document.getElementById("my_modal_2").close()}
          >
            ✕
          </button>
          <input
            type="text"
            placeholder="Type here"
            value={UpdateName}
            onChange={(e) => setUpdateName(e.target.value)} // Update state on change
            className="input input-bordered w-full max-w-xs"
          />
          <button
            className="bg-green-500 mt-2 px-5 rounded-lg py-2 text-white"
            onClick={handleBowlerEdit}
          >
            Update
          </button>
        </div>
      </dialog>
    </>
  );
};

export default EditBowler;
