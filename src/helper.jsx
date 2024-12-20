import { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { stateInfo } from "../../../../provider/StateProvider";

const AddBatter = ({ match, fetchBatterData, onOpen }) => {
  const { _id } = match;
  const [batter, setBatter] = useState(null);
  const [loading, setLoading] = useState(false);
  const { batters, setBatters } = useContext(stateInfo);

  const drawerCheckboxRef = useRef(null); // Ref for the drawer checkbox
  const inputRef = useRef(null); // Ref for the input field

  // Automatically focus on the input field when the drawer is opened
  useEffect(() => {
    const drawerCheckbox = drawerCheckboxRef.current;
    const handleFocus = () => {
      if (drawerCheckbox.checked && inputRef.current) {
        inputRef.current.focus();
      }
    };

    drawerCheckbox?.addEventListener("change", handleFocus);

    return () => {
      drawerCheckbox?.removeEventListener("change", handleFocus);
    };
  }, []);

  // Function to programmatically open the drawer
  const toggleDrawer = () => {
    if (drawerCheckboxRef.current) {
      drawerCheckboxRef.current.checked = true; // Open the drawer
    }
    if (onOpen) {
      onOpen(); // Notify parent about opening the drawer
    }
  };

  const batterInfo = {
    id: crypto.randomUUID(),
    name: batter,
    run: 0,
    ball: 0,
    fours: 0,
    sixes: 0,
    stike: false,
    sr: 0,
    active: true,
  };

  const handleBatter = () => {
    setLoading(true);
    fetch(`https://cric-server.vercel.app/matches/${_id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(batterInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setBatter(""); // Clear input
          fetchBatterData(); // Refresh data
          if (drawerCheckboxRef.current) {
            drawerCheckboxRef.current.checked = false; // Close the drawer
          }
        } else {
          toast.error("Failed to add batter. Try again!");
        }
      })
      .catch(() => toast.error("An error occurred. Please try again!"))
      .finally(() => setLoading(false));
  };

  return (
    <div className="drawer z-[100]"> {/* Higher z-index for overlay */}
      <input
        id="batter-drawer"
        type="checkbox"
        className="drawer-toggle"
        ref={drawerCheckboxRef}
      />
      <div className="drawer-content">
        {/* Trigger for testing */}
        <button onClick={toggleDrawer} className="btn btn-primary">
          Open Add Batter Drawer
        </button>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="batter-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content mt-10 w-60 p-4">
          {/* Sidebar content */}
          <li>
            <input
              type="text"
              value={batter || ""}
              onChange={(e) => setBatter(e.target.value)}
              className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300 rounded px-2 py-1"
              placeholder="Enter batter's name"
              aria-label="Batter name input"
              ref={inputRef} // Attach ref to the input field
            />
          </li>
          <li>
            <button
              disabled={
                loading || !batter || batter.length < 3 || batters?.length > 10
              }
              onClick={handleBatter}
              className={`btn btn-success mt-2 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              aria-label="Add batter button"
            >
              {loading ? "Adding..." : "Add Batter"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AddBatter;
