import { useContext, useEffect, useRef, useState } from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { toast } from "react-toastify";
import { stateInfo } from "../../../../provider/StateProvider";

const AddBatter = ({ match, fetchBatterData }) => {
  const { _id } = match;
  const [batter, setBatter] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state for feedback
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
          // toast.success("Batter Added");
          setBatter(""); // Clear input
          fetchBatterData(); // Refresh data
          // Close the drawer
          if (drawerCheckboxRef.current) {
            drawerCheckboxRef.current.checked = false;
          }
        } else {
          toast.error("Failed to add batter. Try again!");
        }
      })
      .catch(() => toast.error("An error occurred. Please try again!"))
      .finally(() => setLoading(false));
  };

  return (
    <div className="drawer z-[100]">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        ref={drawerCheckboxRef} // Attach ref to the drawer checkbox
      />
      <div className="drawer-content">
        {/* Page content */}
        <label
          htmlFor="my-drawer"
          className="font-bold drawer-button flex items-center"
        >
          <span className="text-green-500">
            <FaRegPlusSquare />
          </span>
          Batter
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
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
            {/* {!batter || batter.length < 3 ? (
              <p className="text-red-500 text-sm">Name must be at least 3 characters</p>
            ) : batters?.length > 10 ? (
              <p className="text-red-500 text-sm">You cannot add more than 10 batters</p>
            ) : null} */}
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
