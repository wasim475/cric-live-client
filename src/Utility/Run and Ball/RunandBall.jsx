import { useContext } from "react";
import AddBatter from "../../Pages/Matches/signle Match/Add Batter/AddBatter";
import { fetchInfo } from "../../provider/FetchProvider";
import { stateInfo } from "../../provider/StateProvider";
import { motion } from "framer-motion";
import Extra from "./Extra";
import ExtraMinus from "./ExtraMinus";
import NoballRun from "./ExtraMore";
import RunMinus from "./RunMinus";
import RunPlus from "./RunPlus";
import More from './More';

const RunandBall = () => {
  // const { singleMatchId } = useContext(handlesInfo);
  const { singleMatchData, activeBatters, singleMatchId } =
    useContext(stateInfo);
  const { fetchBatterData } = useContext(fetchInfo);

  const {
    team1,
    team2,
    batNow,
    teamBall,
    totalOver,
    _id,
    teamTotal,
    target,
    teamWicket,
    teamOver,
  } = singleMatchData;

  // State for button position
  // const [position, setPosition] = useState({ top: "50%", left: "90%" });

  // Handle drag end
  // const handleDragEnd = (e) => {
  //   const newTop = e.clientY; // Get Y position
  //   const newLeft = e.clientX; // Get X position

  //   setPosition({
  //     top: `${newTop}px`,
  //     left: `${newLeft}px`,
  //   });
  // };

  const handleStrikeChange = (matchId, batterId) => {
    fetch(
      `https://cric-server.vercel.app/matches/${matchId}/batter/${batterId}/strike`,
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
    <main className="z-10">
      {/* Run */}
      <section
        className="fixed bottom-12 -right-5"
        // style={{ top: position.top, left: position.left }}
        // draggable="true"
        // onDragEnd={handleDragEnd}
      >
        <button
          className="bg-transparent border-pink-500 border-t-[1px] border-b-[1px] text-pink-500 rounded-l-box py-3 px-2 font-bold"
          onClick={() => document.getElementById("my_modal_5").showModal()}
          // disabled={ ( parseInt(totalOver) === teamOver || teamWicket===10)}
        >
          Controller
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <div role="tablist" className="tabs tabs-bordered">
              <input
                type="radio"
                name="my_tabs_1"
                role="tab"
                className="tab"
                aria-label="Run-"
              />
              <div role="tabpanel" className="tab-content p-3">
                {/* ============================
                      Extra part Start
                ====================================*/}
                <div role="tablist" className="tabs tabs-lifted">
                  <input
                    type="radio"
                    name="tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Extra-"
                  />
                  <div
                    role="tabpanel"
                    className="tab-content bg-base-100 border-base-300 rounded-box p-6"
                  >
                    <ExtraMinus />
                  </div>

                  <input
                    type="radio"
                    name="tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Run-"
                    defaultChecked
                  />
                  <div
                    role="tabpanel"
                    className="tab-content bg-base-100 border-base-300 rounded-box p-6"
                  >
                   <RunMinus />
                  </div>
                  <div
                    role="tabpanel"
                    className="tab-content bg-base-100 border-base-300 rounded-box p-6"
                  >
                    <ExtraMinus />
                  </div>

                  <input
                    type="radio"
                    name="tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Extra More"
                    disabled
                  />
                  <div
                    role="tabpanel"
                    className="tab-content bg-base-100 border-base-300 rounded-box p-6"
                  >
                    <h1>Comming soon</h1>
                  </div>
                </div>

                {/* ============================
                      Extra part End
                ====================================*/}
              </div>

              <input
                type="radio"
                name="my_tabs_1"
                role="tab"
                className="tab"
                aria-label="Runs"
                defaultChecked
              />
              <div role="tabpanel" className="tab-content">
                {/* ============================
                  Runs Part Start
                ================================*/}
                <div role="tablist" className="tabs tabs-lifted">
                  <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Extra"
                  />
                  <div
                    role="tabpanel"
                    className="tab-content bg-base-100 border-base-300 rounded-box p-6"
                  >
                    <Extra/>
                    
                  </div>

                  <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Runs+"
                    defaultChecked
                  />
                  <div
                    role="tabpanel"
                    className="tab-content bg-gray-50 border-base-300 rounded-box p-6"
                  >
                    <RunPlus />
                  </div>

                  <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="More"
                    
                  />
                  <div
                    role="tabpanel"
                    className="tab-content bg-base-100 border-base-300 rounded-box p-6"
                  >
                    <More/>
                  </div>
                </div>

                {/* ============================
                  Runs Part End
                ================================*/}

                {/* ============================
                  Batter Pair Part Start
                ================================*/}
                <section className="border p-1 rounded-xl">
                  <h1>Batting Pair</h1>
                  <div className="flex gap-x-2 mt-1">
                    {activeBatters?.map((batter, index) => (
                      <motion.button
                      whileTap={{ scale: 0.9 }}
                        key={index}
                        onClick={() =>
                          handleStrikeChange(singleMatchId, batter.id)
                        }
                        className={`${
                          batter.strike
                            ? "bg-green-500 font-bold"
                            : "bg-gray-400"
                        } px-2 py-1 rounded-lg text-white`}
                      >
                        {batter.name}
                        <span className="text-xl">
                          {batter.strike && "*"}
                        </span>{" "}
                      </motion.button>
                    ))}
                  </div>
                </section>
                {/* ============================
                  Batter Pair Part End
                ================================*/}
              </div>

              <input
              disabled
                type="radio"
                name="my_tabs_1"
                role="tab"
                className="tab"
                aria-label="Batter"
              />
              <div role="tabpanel" className="tab-content p-10">
                <button>
                  <AddBatter
                    fetchBatterData={fetchBatterData}
                    match={singleMatchData}
                  />
                </button>
              </div>
            </div>

            <div className="modal-action fixed top-0 right-0">
              <form method="dialog">
                <button className="btn bg-red-500 text-white">X</button>
              </form>
            </div>
          </div>
        </dialog>
      </section>
    </main>
  );
};

export default RunandBall;
