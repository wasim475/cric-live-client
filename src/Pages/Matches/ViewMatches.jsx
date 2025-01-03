import { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContex } from "../../provider/AuthProvider";
import { fetchInfo } from "../../provider/FetchProvider";
import { handlesInfo } from "../../provider/HandleProvide";
import { toast } from 'react-toastify';

const ViewMatches = ({ match, fetchMatches }) => {
  const [matchInfo, setMatchInfo] = useState([]);
  const {
    team1,
    batNow,
    team2,
    _id,
    teamTotal,
    teamWicket,
    email,
    displayName,
    photoURL,
    target,
    teamOver,
    totalOver,
  } = match;
  const { handleSingleMatch } = useContext(handlesInfo);
  const { fetchBatterData } = useContext(fetchInfo);
  const { user } = useContext(AuthContex);
  const handleDelete = (matchId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      width: "320px",
      customClass: {
        text: "custom-text",
        icon: "custom-icon",
        title: "costom-title",
      },
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://cric-server.vercel.app/matches/${matchId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
             toast.success(`Your match (${team1} vs ${team2}) has been deleted.`)
              fetchMatches();
            }
          });
      }
    });
  };
  const remaining = target - teamTotal;
  const remainingWicket = 10 - teamWicket;
  // console.log(match)
  return (
    <>
      <Link
        // onClick={() => handleSingleMatch(_id)}
        to={`/matches/${match._id}`}
        // state={{ matchId: match._id }}
      >
        <div className="card  bg-base-100 image-full w-44 ">
          <figure>
            <img
              src="https://t3.ftcdn.net/jpg/00/42/87/12/240_F_42871201_ZnkmmVDckE54IrS6y0S13crH1S6Mgha5.jpg"
              alt="Background Image"
            />
          </figure>
          <div className="card-body p-0">
            <div>
              {email === user?.email && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleDelete(_id);
                  }}
                  className="text-red-500 p-2 absolute top-0 right-0 z-40"
                >
                  {" "}
                  <MdDelete />{" "}
                </button>
              )}
            </div>
            <div className="flex items-center text-xs absolute bottom-0 left-2 gap-x-1">
              <img
                className="w-4 h-4 rounded-full"
                src={photoURL}
                alt="Creator"
              />
              <h1 className="text-cyan-200">{displayName}</h1>
            </div>

            <section className="text-center mt-5">
              <h2 className="">
                <span className="text-sm">{team1}</span>{" "}
                <span className="text-xs">vs</span>{" "}
                <span className="text-sm">{team2}</span>
              </h2>
              <div className="">
                <p className="text-sm py-1">
                  {batNow}: {teamTotal}/{teamWicket}
                </p>
                <p>
                  <>
                    <h1 className="text-[10px]">
                      {target &&
                      target > teamTotal &&
                      teamWicket < 10 &&
                      parseInt(totalOver) > teamOver
                        ? `${batNow} need ${remaining} runs to win.`
                        : target !== null && target < teamTotal
                        ? `${batNow} win by ${remainingWicket} wickets`
                        : teamWicket === 10 || parseInt(totalOver) === teamOver
                        ? `${batNow} lose by ${remaining - 1} runs`
                        : ""}
                    </h1>
                  </>
                </p>
              </div>
            </section>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ViewMatches;
