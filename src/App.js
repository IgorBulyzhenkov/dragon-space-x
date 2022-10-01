import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home";
import Header from "./component/Header/Header";
import Gallery from "./pages/Gallery";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import PrivetRoute from "./component/Routy/PrivatRouter";
import PublicRoute from "./component/Routy/PublickRouter";
import user from "./redux/user/userOperation";
import {
  getName,
  getVerify,
  getVerifyToken,
} from "./redux/user/user-selectors";
import "./App.css";
import Verify from "./pages/Verify";
import Footer from "./component/Footer/Footer";
import { getDragonItems } from "./redux/dragon/dragon-selector";
import fetchDragon from "./redux/dragon/dragon0operation";

const { fetchCurrentUser } = user;

function App() {
  const items = useSelector(getDragonItems);
  const userName = useSelector(getName);
  const verify = useSelector(getVerify);
  const verifyToken = useSelector(getVerifyToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (items.length) return;
    dispatch(fetchCurrentUser());
    dispatch(fetchDragon());
  }, [dispatch, items]);

  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/auth"
            element={
              <PublicRoute>
                <Registration />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/home"
            element={
              <PrivetRoute>
                <Home />
              </PrivetRoute>
            }
          />
          <Route
            path="/gallery"
            element={
              <PrivetRoute>
                <Gallery />
              </PrivetRoute>
            }
          />
          <Route
            path="/verify"
            element={
              !verify && verifyToken ? <Verify /> : <Navigate to="/home" />
            }
          />
          <Route
            path="*"
            element={
              userName ? <Navigate to="/home" /> : <Navigate to="/auth" />
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
