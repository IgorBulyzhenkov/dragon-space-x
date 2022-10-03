import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";
import { getInLoggedIn } from "../../redux/user/user-selectors";
import PropTypes from "prop-types";

function PublicRoute({ children, redirect = "/home" }) {
 
  const isLoggedIn = useSelector(getInLoggedIn);
  return isLoggedIn ? <Navigate to={redirect} replace /> : children;
}

export default PublicRoute;

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
