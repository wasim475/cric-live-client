import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router";
import loader from "../assets/pic/loader.gif"

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContex);
  const location = useLocation();
  if (loading) {
    return (
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
        <img
          src={loader}
          className="rounded-full h-28 w-28"
        />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
