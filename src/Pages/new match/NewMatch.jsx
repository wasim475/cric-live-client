import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContex } from "../../provider/AuthProvider";
import { stateInfo } from "../../provider/StateProvider";
import { motion } from "framer-motion";
import { div } from 'framer-motion/client';

const NewMatch = () => {
  const { user } = useContext(AuthContex);
  const [loading, setLoading] = useState(false);
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
    if (team1.length<3 || team2.length<3) {
      toast.error("Team name must be at least 3 characters long.")
      return
    }
    if (totalOver==0) {
      toast.error("Please Write Total Over.")
      return
    }
    if (totalOver<0) {
      toast.error("Overs not be a negative number.")
      return
    }
    if (showTarget && target==0) {
      toast.error("Please Write the Target")
      return
    }
    if (showTarget && target<0) {
      toast.error("The target not be a negative number.")
      return
    }
    setLoading(true)
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
          toast.success("New Match Created");
          navigate("/");
          setLoading(false)
        }
      });
  };

  return (
    <>
      <main>
        {/* Team Names */}
        <motion.div
          className=" px-4 text-center rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-xl font-bold tracking-wide uppercase"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            New Match
          </motion.h1>
          <motion.p
            className="text-gray-400 mt-2 text-sm mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Create and get access to customize your cricket match!
          </motion.p>
        </motion.div>
        <section className="border-2 ">
          <div className="flex flex-col items-center justify-center gap-y-1 mt-2">
            <motion.label
              className="input input-bordered flex items-center gap-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Team-1
              <input
                type="text"
                className="grow"
                name="team1"
                onChange={handleChange}
                placeholder="Write Team-1 Name"
              />
            </motion.label>

            <motion.label
              className="input input-bordered flex items-center gap-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Team-2
              <input
                type="text"
                className="grow"
                name="team2"
                onChange={handleChange}
                placeholder="Write Team-2 Name"
              />
            </motion.label>
          </div>
          {/* Who bat first */}
          <div className="">
            <div className="mb-2 mt-2 flex justify-center items-center">
              {teamNames?.team1 && teamNames?.team2 && (
                <div>
                  <label
                    htmlFor="batFirst"
                    className="block text-sm font-medium text-gray-700 mb-2 border-red-500"
                  >
                    Which Team Will Bat First?
                  </label>
                  <select
                    id="batFirst"
                    className="select-bordered h-8 w-64 max-w-xs px-2"
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
                      Select One
                    </option>
                    <option value={teamNames?.team1}>{teamNames?.team1}</option>
                    <option value={teamNames?.team2}>{teamNames?.team2}</option>
                  </select>
                </div>
              )}
            </div>
          </div>

          {/* Total Over */}
          <div className="flex justify-center items-center">
            {batNow && (
              <div className="">
                <label className="input input-bordered flex items-center gap-x-2">
                  Total Over
                  <input
                    type="number"
                    className="grow"
                    onChange={(e) => {
                      setTotalOver(e.target.value);
                    }}
                    placeholder="write total over"
                  />
                </label>
              </div>
            )}
          </div>

          {/* Target */}
          {totalOver && (
            <div className="mb-2 mt-2 flex justify-center">
              {hideTargetButtons && (
                <div className="text-center">
                  <h1>Will {batNow} play for target?</h1>

                  <motion.button
                   whileHover={{ scale: 1.2 }}
                   whileTap={{ scale: 0.8 }}
                    onClick={() => {
                      setHideTargetButtons(!hideTargetButtons);
                      setShowSubmit(!showSubmit);
                    }}
                    className="btn btn-error mr-2 mt-2 text-white font-bold"
                  >
                    No
                  </motion.button>
                  <motion.button
                   whileHover={{ scale: 1.2 }}
                   whileTap={{ scale: 0.8 }}
                    onClick={() => {
                      setShowTarget(!showTarget);
                      setHideTargetButtons(!hideTargetButtons);
                    }}
                    className="btn btn-success mt-2 text-white font-bold"
                  >
                    Yes
                  </motion.button>
                </div>
              )}

              <div className="flex justify-center items-center">
                {showTarget && (
                  <div className="mt-2 text-center">
                    <label className="input input-bordered flex items-center gap-x-2">
                      Target
                      <input
                        type="number"
                        className="grow"
                        onChange={(e) => {
                          setTarget(e.target.value);
                        }}
                        placeholder="write the Taget"
                      />
                    </label>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="text-center mb-2">
            {(showSubmit || target) && (
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`${
                  teamNames ? "bg-green-500 text-white" : "bg-gray-400"
                } px-3 py-1 rounded-lg`}
                onClick={hadleSubmit}
              >
                {loading
                 ?
                  <div className='flex justify-center'>
                    Creating..
                    <span className="loading loading-bars loading-xs"></span>
                  </div> 
                  :
                   "Create Match"}
                
              </motion.button>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default NewMatch;
