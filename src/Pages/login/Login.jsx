import React, { useContext } from "react";
import { toast } from 'react-toastify';
import { AuthContex } from '../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router';
import { FaGoogle } from "react-icons/fa";

import glogo from "../../assets/logo/googleLogo.png"

const Login = () => {
  const {googleLOgin}= useContext(AuthContex)
  const handleGoogleLogin = ()=>{
    googleLOgin()
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white rounded-md shadow-md">
        <div className="flex flex-col items-center justify-center mb-6">
          <h1 className="mb-4 text-blue-500 font-medium">Login</h1>
         <h1>Wellcome to <span className="bg-black text-white font-bold rounded-sm px-1">Cric</span><span className="font-bold">Cast</span></h1>
        </div>
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-400"
        >
          <img className="w-5 mr-1" src={glogo} alt="logo" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
