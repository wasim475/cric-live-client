import { useContext } from "react";
import { BiSolidCricketBall } from "react-icons/bi";
import { AuthContex } from "../../../../provider/AuthProvider";

const ShowBowler = ({ bowler, matchId, fetchBatterData, singleMatchData }) => {
  const { user } = useContext(AuthContex);
  let { name, Runs, Over, Maiden, Wicket, id, stike } = bowler;
  const economi = Over > 0 ? parseFloat(Runs / Over).toFixed(1) : 0;
  //   const handleOut = ( batterId, event) => {
  //     event.stopPropagation()
  //     fetch(`https://cric-server.vercel.app/matches/${matchId}/${id}`, {
  //       method: "put",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify({ active: false, id: id, increamentWicket: 1 }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         console.log(data.modifiedCount);
  //         if (data.modifiedCount > 0) {
  //           fetchBatterData();
  //           toast(` ${name} is Out`);
  //         }
  //       });
  //   };

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
  return (
    <>
      <tr
        onClick={() =>
          singleMatchData.email === user?.email &&
          handleStrikeChange(matchId, id)
        }
      >
        <th className="flex items-center gap-x-1">
          {name}{" "}
          <span className="text-pink-950">
            {bowler.strike && <BiSolidCricketBall />}
          </span>
        </th>
        <td>{Over}</td>
        <td>{Maiden}</td>
        <td>{Runs}</td>
        <td>{Wicket}</td>
        <td>{economi}</td>
        {/* <td>
          <button className="font-bold text-red-500 border-2 border-red-500 px-2 rounded-lg" onClick={(e) => handleOut(id,e)}>Out</button>
        </td> */}
      </tr>
    </>
  );
};

export default ShowBowler;
