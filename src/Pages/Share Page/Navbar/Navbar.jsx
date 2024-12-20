import { Link } from "react-router";
import { MdOutlineSportsHandball } from "react-icons/md";
import { useContext } from "react";
import { AuthContex } from "../../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContex);
  // console.log(user?.photoURL)

  return (
    <nav className="flex justify-between mt-1">
      <div>
        <Link
          className="text-2xl font-extrabold text-white bg-green-800 px-2 rounded-md flex justify-center items-center"
          to={"/"}
        >
          Cric Live <MdOutlineSportsHandball />{" "}
        </Link>
      </div>
      <div className="flex justify-center gap-x-5">
        {user && <Link to={"/my-matches"}>My Matches</Link>}
      </div>

      <div>
        {user ? (
          <details className="dropdown mr-5">
            <summary className="">
              <div className="avatar online">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt='Profile' />
                </div>
              </div>
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-20">
              <li>
                <Link
                  onClick={() => logOut()}
                  className="bg-blue-400 rounded-md font-bold text-white mr-1"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </details>
        ) : (
          <Link
            to={"/login"}
            className="bg-blue-400 px-2 py-1 rounded-md font-bold text-white mr-1"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
