import { useContext, useEffect } from 'react';
import { fetchInfo } from '../../provider/FetchProvider';

const AutoRefresh = () => {
    const { fetchBatterData } = useContext(fetchInfo);
  useEffect(() => {
    // Set an interval to refresh the page every 10 seconds
    const interval = setInterval(() => {
        fetchBatterData();
    }, 10000); // 10,000 milliseconds = 10 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default AutoRefresh;
