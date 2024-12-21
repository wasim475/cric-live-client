import { Route, Routes } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home/Home";
import NewMatch from '../Pages/new match/NewMatch';
import SingleMatch from '../Pages/Matches/signle Match/SingleMatch';
import Login from '../Pages/login/Login';
import Matches from '../Pages/My Matches/MyMatches';
import PrivateRoute from './PrivateRoute';
import MyMatches from '../Pages/My Matches/MyMatches';

const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/newmatch" element={<PrivateRoute><NewMatch /></PrivateRoute>} />
          <Route path="/matches/:id"  element={<SingleMatch/>} />
          <Route path="/login"  element={<Login/>} />
            <Route path="/my-matches"  element={
              <PrivateRoute>
                <MyMatches/>
              </PrivateRoute>
          } />
        </Route>
      </Routes>
    </>
  );
};

export default MainRoute;
