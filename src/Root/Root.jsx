import { Outlet } from "react-router";
import Navbar from "../Pages/Share Page/Navbar/Navbar";
import { useContext } from "react";
import { fetchInfo } from "../provider/FetchProvider";

const Root = () => {
  // const {fetchBatterData}= useContext(fetchInfo)
  // setInterval(()=>{
  //   fetchBatterData()
  // },10000)
  return (
    <div className='mx-auto'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
