import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { getToken } from "../../redux/user/user-selectors";

function PrivetRoute({ children, redirect = "/auth" })
{
  let token = useSelector(getToken);
 
  return token ? children : <Navigate to={redirect} replace />;
}

export default PrivetRoute;

PrivetRoute.propTypes = {
  children: PropTypes.node.isRequired,
};