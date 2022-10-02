import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getInLoggedIn } from "../../redux/user/user-selectors";
import PropTypes from "prop-types";

function PrivetRoute({ children, redirect = "/auth" }) {
  const isLoggedIn = useSelector(getInLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirect} replace />;
}

export default PrivetRoute;

PrivetRoute.propTypes = {
  children: PropTypes.node.isRequired,
};