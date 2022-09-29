import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getInLoggedIn } from "../../redux/user/user-selectors";

function PrivetRoute({ children, redirect = "/register" }) {
  const isLoggedIn = useSelector(getInLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirect} replace />;
}

export default PrivetRoute;
