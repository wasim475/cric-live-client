import React, { useContext } from "react";

import ShowAllBatters from "./ShowAllBatters";
import { stateInfo } from "../../provider/StateProvider";

const ScoreCard = () => {
    const { batters } = useContext(stateInfo);
    const reversedBatters = [...(batters || [])].reverse();
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="px-3 py-1 rounded-lg text-white font-medium bg-green-400"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        ScoreCard
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className=" btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10 bg-red-500 text-white font-bold">
              ✕
            </button>
          </form>
          <section className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-gray-200">
              <th>
               Name
              </th>
              <th>R</th>
              <th>B</th>
              <th>4s</th>
              <th>6s</th>
              <th>SR</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            
                {
                    reversedBatters?.map((batter, index)=>(
                        <ShowAllBatters batter={batter} key={index}/>
                    ))
                }
            
          </tbody>
        </table>
      </section>
        </div>
      </dialog>
    </>
  );
};

export default ScoreCard;
