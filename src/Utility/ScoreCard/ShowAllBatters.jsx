import React from "react";
import { VscTriangleLeft } from "react-icons/vsc";

const ShowAllBatters = ({ batter, fetchBatterData }) => {
  let { name, run, ball, fours, sixes, sr, id, active, stike } = batter;
  const strikeRate = ball > 0 ? parseFloat(((run * 100) / ball).toFixed(1)) : 0;
  return (
    <>
      <tr>
        <th className="flex items-center gap-x-1">
          {name} {active && <span className="text-[7px] text-green-400 mt-1 text-lg">*</span>}
        </th>
        <td>{run}</td>
        <td>{ball}</td>
        <td>{fours}</td>
        <td>{sixes}</td>
        <td>{strikeRate}</td>
      </tr>
    </>
  );
};

export default ShowAllBatters;
