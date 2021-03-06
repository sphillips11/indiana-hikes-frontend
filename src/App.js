import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  Navigate,
} from "react-router-dom";
import Parks from "./Pages/Parks";
import ParkDetails from "./Pages/ParkDetails";
import Map from "./Pages/Map";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import PasswordReset from "./Pages/PasswordReset";
import HikerDetails from "./Pages/HikerDetails";
import Hikes from "./Pages/Hikes";
// import EditHike from "./Pages/EditHike";
import Welcome from "./Pages/Welcome";
import RecordHike from "./Pages/RecordHike";
import ErrorPage from "./Pages/ErrorPage";
import Header from "./Components/Header";
import Userfront from "@userfront/react";

Userfront.init("vndxvjwn");

function App() {
  const loggedIn = Userfront.accessToken();
  const currentHiker = Userfront.user;

  return (
    <Router>
      <Header currentHiker={currentHiker} />
      <Routes>
        <Route
          path="/"
          element={<Parks currentHiker={currentHiker} loggedIn={loggedIn} />}
        />
        <Route
          path="parks/:parkName"
          element={
            <ParkDetails currentHiker={currentHiker} loggedIn={loggedIn} />
          }
        />
        <Route path="parks/:parkName/map" element={<Map />} />
        <Route
          path="signup"
          element={loggedIn ? <Navigate replace to={`/hiker}`} /> : <SignUp />}
        />
        <Route path="login" element={<Login />} />
        <Route path="reset" element={<PasswordReset />} />
        <Route
          path="hiker"
          element={<HikerDetails currentHiker={currentHiker} />}
        />
        <Route path="hikes" element={<Hikes currentHiker={currentHiker} />} />
        {/* <Route
          path="hikers/:hikerId"
          element={loggedIn ? <HikerInfo /> : <Navigate replace to="/login" />}
        >
          <Route
            path="hikes"
            element={loggedIn ? <Hikes /> : <Navigate replace to="/login" />}
          >
            <Route>
              path=":hikeId" element=
              {loggedIn ? <HikeDetails /> : <Navigate replace to="/login" />}
              <Route
                path="edit"
                element={
                  loggedIn ? <EditHike currentHiker={currentHiker}/> : <Navigate replace to="/login" />
                }
              />
            </Route>
          </Route>
        </Route>*/}
        <Route
          path="record-hike"
          element={
            loggedIn ? (
              <RecordHike currentHiker={currentHiker} />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
