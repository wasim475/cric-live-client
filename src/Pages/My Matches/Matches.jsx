import React, { useContext, useEffect } from "react";
import { stateInfo } from "../../provider/StateProvider";
import { AuthContex } from "../../provider/AuthProvider";
import ViewMatches from "../Matches/ViewMatches";
import { fetchInfo } from "../../provider/FetchProvider";

const Matches = () => {
  const { user } = useContext(AuthContex);
  const { matches, setMatches } = useContext(stateInfo);
  const { fetchMatches } = useContext(fetchInfo);

  // Filter matches based on the logged-in user's email
  const myMatches = matches.filter((match) => match?.email === user?.email);



  return (
    <div className="p-4">
      {myMatches.length === 0 ? (
        <div>
          <h1 className="text-lg font-bold text-center">You have not created any matches.</h1>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5 overflow-y-auto h-[calc(100vh-100px)]">
          {myMatches.map((match, index) => (
            <ViewMatches key={match._id} match={match} fetchMatches={fetchMatches} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Matches;
