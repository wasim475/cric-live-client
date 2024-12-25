
import { useContext } from 'react';
import { FaPlusCircle } from "react-icons/fa";
import { Link } from 'react-router';
import { AuthContex } from '../../../provider/AuthProvider';

const AddMatch = () => {
  const {user}= useContext(AuthContex)
  // console.log(user)
  return (
    <div className='mt-5'>
      
      <button > <Link className='flex items-center bg-green-500 px-2 py-1 rounded-lg text-lg font-medium text-white gap-x-1' to={"/newmatch"}>Create Match <FaPlusCircle/></Link> </button>
      
    </div>
  )
}

export default AddMatch
