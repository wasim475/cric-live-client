import { useContext } from "react";
import { fetchInfo } from "../../provider/FetchProvider";
import { stateInfo } from "../../provider/StateProvider";
import { motion } from "framer-motion";
const ExtraMore = () => {
  const { singleMatchData, singleMatchId } = useContext(stateInfo);
  const { teamTotal } = singleMatchData;
  const { fetchBatterData } = useContext(fetchInfo);


 
 

  return (
    <div className="grid grid-cols-4 gap-2">
     
     
    

    </div>
  );
};

export default ExtraMore;
