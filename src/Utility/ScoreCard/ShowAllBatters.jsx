import React, { useContext } from "react";
import { VscTriangleLeft } from "react-icons/vsc";
import { GiDuck } from "react-icons/gi";
import { span } from 'framer-motion/client';

const ShowAllBatters = ({ batter, fetchBatterData }) => {
  // console.log(batter);
  let { name, run, ball, fours, sixes, sr, id, active, stike, outBy } = batter;
  const strikeRate = ball > 0 ? parseFloat(((run * 100) / ball).toFixed(1)) : 0;

  return (
    <>
      <tr>
        <th>
          <div className="flex items-center gap-x-1">
            {name}{" "}
            {active && (
              <span className="text-[7px] text-green-400 mt-1 text-lg">*</span>
            )}
          </div>
          <span className="text-[8px] font-bold flex items-center text-violet-500 -mt-1 ml-2">
            {!active && outBy ? (
              <span>
                <span className="text-red-400 font-extrabold">b</span> {outBy}
              </span>
            ) : !active ? (
              <span className='text-red-900' >Run Out</span>
            ) : null}
          </span>
        </th>
        <td>
          {!run && !active ? <GiDuck className="text-yellow-600" /> : run}
        </td>
        <td>{ball}</td>
        <td>{fours}</td>
        <td>{sixes}</td>
        <td>{strikeRate}</td>
      </tr>
    </>
  );
};

export default ShowAllBatters;
