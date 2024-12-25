import { useContext, useEffect, useRef, useState } from "react";
import { LuBadgePlus } from "react-icons/lu";
import { toast } from "react-toastify";
import { stateInfo } from "../../../../provider/StateProvider";

const AddBowler = ({ match, fetchBatterData,handleBowlerEdit }) => {
  const inputRef = useRef(null); // Ref for the input field
  const drawerCheckboxRef = useRef(null); // Ref for the drawer toggle checkbox
  const { _id } = match;
  const [bowler, setBowler] = useState(null);
  const [loading, setLoading] = useState(false);
  const { bowlers, setBowlers } = useContext(stateInfo);

  // Focus the input field when the drawer is opened
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

  //   useEffect(() => {
  //   if (handleBowlerEdit && typeof handleBowlerEdit === "function") {
  //     handleBowlerEdit.current = () => {
  //       if (drawerCheckboxRef.current) {
  //         drawerCheckboxRef.current.checked = true; // Open the drawer
  //       }
  //     };
  //   }
  // }, [handleBowlerEdit]);


  const bowlerInfo = {
    type: "bowler",
    id: crypto.randomUUID(),
    name: bowler,
    Over: 0,
    Maiden: 0,
    Runs: 0,
    Wicket: 0,
    stike: false,
  };

  const handleBowler = () => {
    setLoading(true);
    fetch(`https://cric-server.vercel.app/matches/${_id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bowlerInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          fetchBatterData();
          setBowler(""); // Clear input after successful addition
          // toast.success("Bowler Added");
          // Close the drawer by unchecking the checkbox
          if (drawerCheckboxRef.current) {
            drawerCheckboxRef.current.checked = false;
          }
        } else {
          toast.error("Failed to add bowler. Try again!");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("An error occurred. Please try again!");
      })
      .finally(() => setLoading(false));
  };


  return (
    <div className="drawer">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle"
        ref={drawerCheckboxRef} // Attach ref to the drawer checkbox
      />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-4"
          className="font-bold drawer-button flex items-center"
        >
          <span className="text-gray-600 font-extrabold">
            <LuBadgePlus />
          </span>
          Bowler
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content w-60 p-4 mt-10 rounded-r-lg">
          <li>
            <input
              ref={inputRef} // Attach ref to input field for focus control
              type="text"
              value={bowler || ""}
              className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300 rounded px-2 py-1"
              onChange={(e) => setBowler(e.target.value)}
              placeholder="Enter bowler's name"
              aria-label="Bowler name input"
            />
            {/* You can add validation feedback messages here */}
          </li>
          <li>
            <button
              disabled={
                loading || !bowler || bowler?.length < 3 || bowlers?.length > 10
              }
              onClick={handleBowler}
              className={`btn btn-success mt-2 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              aria-label="Add bowler button"
            >
              {loading ? "Adding..." : "Add Bowler"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AddBowler;
