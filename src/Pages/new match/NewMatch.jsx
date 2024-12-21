import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContex } from "../../provider/AuthProvider";
import { stateInfo } from "../../provider/StateProvider";

const NewMatch = () => {
  const { user } = useContext(AuthContex);
  const [showSubmit, setShowSubmit] = useState(false);
  const [batNow, setBatNow] = useState(null);
  const [totalOver, setTotalOver] = useState(null);
  const [target, setTarget] = useState(null);
  const [showTarget, setShowTarget] = useState(false);
  const [toss, setToss] = useState(null);
  const [hideTargetButtons, setHideTargetButtons] = useState(true);
  const { teamNames, setTeamNames } = useContext(stateInfo);
  const email = user?.email;
  const displayName = user?.displayName;
  const photoURL = user?.photoURL;
  // console.log(email)
  const navigate = useNavigate();
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setTeamNames({ ...teamNames, [name]: value });
  };

  const hadleSubmit = () => {
    let teamTotal = 0;
    let teamOver = 0;
    let lastTen = [];
    let extra = 0;
    let noBall = 0;
    let wide = 0;
    let legbye = 0;
    let bye = 0;
    let teamWicket = 0;
    let teamBall = 0;
    const { team1, team2 } = teamNames;
    const matchData = {
      displayName,
      photoURL,
      email,
      lastTen,
      team1,
      team2,
      batNow,
      totalOver,
      extra,
      target,
      teamTotal,
      teamOver,
      teamWicket,
      teamBall,
      noBall,
      wide,
      legbye,
      bye,
    };
    fetch("https://cric-server.vercel.app/matches", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(matchData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("New Match Created");
          navigate("/");
        }
      });
  };

  return (
    <>
      <main>
        {/* Team Names */}
        <div className="flex flex-col w-1/2 gap-y-1 mt-2">
          <input
            className="border-2 mr-2 rounded-lg"
            type="text"
            name="team1"
            onChange={handleChange}
            placeholder="Team1"
          />
          <input
            className="border-2 mr-2 rounded-lg"
            type="text"
            name="team2"
            onChange={handleChange}
            placeholder="Team2"
          />
        </div>
        {/* Who bat first */}
        <div className="mb-2 mt-2">
          {teamNames?.team1 && teamNames?.team2 && (
            <select
              className="select-bordered border-red-500 h-5 w-40 max-w-xs"
              onChange={(e) => {
                const selectedValue = e.target.value;
                if (selectedValue === teamNames?.team1) {
                  setBatNow(teamNames?.team1);
                } else if (selectedValue === teamNames?.team2) {
                  setBatNow(teamNames?.team2);
                }
              }}
            >
              <option disabled selected>
                Who Bat first?
              </option>
              <option value={teamNames?.team1}>{teamNames?.team1}</option>
              <option value={teamNames?.team2}>{teamNames?.team2}</option>
            </select>
          )}
        </div>
        {/* Total Over */}
        {batNow && (
          <div>
            <input
              onChange={(e) => {
                setTotalOver(e.target.value);
              }}
              className="border-2 mr-2 rounded-lg mb-2"
              type="number"
              placeholder="write total over"
            />
          </div>
        )}
        {/* Target */}
        {totalOver && (
          <div className="mb-2">
            {hideTargetButtons && (
              <div>
                <h1>Will {batNow} chase target?</h1>
                <button
                  onClick={() => {
                    setHideTargetButtons(!hideTargetButtons);
                    setShowSubmit(!showSubmit);
                  }}
                  className="btn btn-error mr-2"
                >
                  No
                </button>
                <button
                  onClick={() => {
                    setShowTarget(!showTarget);
                    setHideTargetButtons(!hideTargetButtons);
                  }}
                  className="btn btn-success"
                >
                  Yes
                </button>
              </div>
            )}

            <div>
              {showTarget && (
                <div className="mt-2">
                  <input
                    onChange={(e) => {
                      setTarget(e.target.value);
                    }}
                    className="border-2 mr-2 rounded-lg mb-2"
                    type="number"
                    placeholder="Write Target"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        <div>
          {(showSubmit || target) && (
            <button
              className={`${
                teamNames ? "bg-green-500 text-white" : "bg-gray-400"
              } px-3 py-1 rounded-lg`}
              disabled={totalOver === 0}
              onClick={hadleSubmit}
            >
              Create Match
            </button>
          )}
        </div>
      </main>
    </>
  );
};

export default NewMatch;
