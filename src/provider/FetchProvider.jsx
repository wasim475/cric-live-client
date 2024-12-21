import { createContext, useContext } from "react";
import { AuthContex } from "./AuthProvider";
import { handlesInfo } from "./HandleProvide";
import { stateInfo } from "./StateProvider";

export const fetchInfo = createContext(null);
const FetchProvider = ({ children }) => {
  const { setLoading } = useContext(AuthContex);
  const {
    setBatters,
    singleMatchData,
    setSingleMatchData,
    setBowlers,
    matches,
    setMatches,
    singleMatchId
  } = useContext(stateInfo);
 
 

  const fetchMatches = () => {
    setLoading(true);
    fetch("https://cric-server.vercel.app/matches")
      .then((res) => res.json())
      .then((data) => {
        setMatches(data.reverse());
        setLoading(false);
      });
  };
  const fetchBatterData = () => {
    // setLoading(true)
    fetch(`https://cric-server.vercel.app/matches/${singleMatchId}`)
      .then((res) => res.json())
      .then((data) => {
        setBatters(data?.batter?.reverse());
        setBowlers(data?.bowler);
        setSingleMatchData(data);
        // setLoading(false)
      });
  };

  const info = {
    fetchBatterData,
    fetchMatches,
  };
  return <fetchInfo.Provider value={info}>{children}</fetchInfo.Provider>;
};

export default FetchProvider;
