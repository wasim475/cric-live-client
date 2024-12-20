import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import MainRoute from "./Routes/MainRoute";
import StateProvider from "./provider/StateProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HandleProvider from "./provider/HandleProvide";
import FetchProvider from "./provider/FetchProvider";
import AuthProvider from "./provider/AuthProvider";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <AuthProvider>
    <StateProvider>
      <HandleProvider>
        <FetchProvider>
          <MainRoute />
        </FetchProvider>
      </HandleProvider>
      <ToastContainer />
    </StateProvider>
  </AuthProvider>
  </BrowserRouter>
);
