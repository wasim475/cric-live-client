import { useContext, useEffect } from "react";
import { stateInfo } from "../../provider/StateProvider";
import ViewMatches from "./ViewMatches";
import { AuthContex } from "../../provider/AuthProvider";
import loader from "../../assets/pic/loader.gif"
import { fetchInfo } from '../../provider/FetchProvider';

const Matches = () => {
  const { loading, setLoading } = useContext(AuthContex);
 const {matches}= useContext(stateInfo)
 const {fetchMatches}= useContext(fetchInfo)

  useEffect(() => {
    fetchMatches();
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5 overflow-scroll">
      {loading ? (
        <div className="relative flex justify-center items-center">
          <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
          <img
            src={loader}
            className="rounded-full h-28 w-28"
          />
        </div>
      ) : (
        matches?.map((match) => <ViewMatches key={match._id} match={match} fetchMatches={fetchMatches} />)
      )}
    </div>
  );
};

export default Matches;
