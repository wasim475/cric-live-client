import { Link } from "react-router";
import { MdOutlineSportsHandball } from "react-icons/md";
import { useContext } from "react";
import { AuthContex } from "../../../provider/AuthProvider";
import { stateInfo } from '../../../provider/StateProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContex);
  const { matches } =useContext(stateInfo);
  const myMatches = matches?.filter((match)=> match?.email === user?.email)

  return (
    <nav className="flex justify-between mt-1">
      <div>
        <Link
          className="text-xl font-medium px-2 rounded-md flex justify-center items-center"
          to={"/"}
        >
          <span className="bg-black text-white px-1 rounded-md font-medium">Cric</span> Cast
        </Link>
      </div>
      <div className="flex justify-center gap-x-5">
        {user && <Link to={"/my-matches"}>
        My Matches <span className='bg-red-500 text-white rounded-lg text-xs px-1 absolute'>{myMatches.length >0 && myMatches?.length}</span>
        
        </Link>}
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
