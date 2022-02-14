import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  // Navigate,
} from "react-router-dom";
import Parks from "./Pages/Parks";
import ParkDetails from "./Pages/ParkDetails";
import Map from "./Pages/Map";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import HikerDetails from "./Pages/HikerDetails";
import Hikes from "./Pages/Hikes";
// import HikeDetails from "./Pages/HikeDetails";
// import EditHike from "./Pages/EditHike";
// import RecordHike from "./Pages/RecordHike";
import ErrorPage from "./Pages/ErrorPage";
import Header from "./Components/Header";

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [currentHiker, setCurrentHiker] = useState(????);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Parks />} />
        <Route path="parks/:parkName" element={<ParkDetails />} />
        <Route path="parks/:parkName/map" element={<Map />} />
        <Route path="signup" element={<SignUp />} />
        {/* <Route
          path="signup"
          element={
            loggedIn ? <Navigate replace to="hiker/:hikerId" /> : <SignUp />
          }
        /> */}
        <Route path="login" element={<Login />} />
        <Route path="hikers/:hikerId" element={<HikerDetails />} />
        <Route path="hikers/:hikerId/hikes" element={<Hikes />} />
        {/* <Route
          path="hikers/:hikerId"
          element={loggedIn ? <HikerInfo /> : <Navigate replace to="login" />}
        >
          <Route
            path="hikes"
            element={loggedIn ? <Hikes /> : <Navigate replace to="login" />}
          >
            <Route>
              path=":hikeId" element=
              {loggedIn ? <HikeDetails /> : <Navigate replace to="login" />}
              <Route
                path="edit"
                element={
                  loggedIn ? <EditHike /> : <Navigate replace to="login" />
                }
              />
            </Route>
          </Route>
        </Route>
        <Route
          path="record-hike"
          element={loggedIn ? <RecordHike /> : <Navigate replace to="/login" />}
        /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
