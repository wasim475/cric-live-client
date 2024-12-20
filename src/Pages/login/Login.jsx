import React, { useContext } from "react";
import { toast } from 'react-toastify';
import { AuthContex } from '../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router';
import { FaGoogle } from "react-icons/fa";
import loginPic from "../../assets/pic/criclive.gif"

const Login = () => {
  const {googleLOgin}= useContext(AuthContex)
  const handleGoogleLogin = ()=>{
    googleLOgin()
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white rounded-md shadow-md">
        <div className="flex justify-center mb-6">
          <img
            src={loginPic}
            alt="Google Logo"
            className="w-32"
          />
        </div>
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-400"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
