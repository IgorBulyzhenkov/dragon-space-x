import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVerifyToken } from "../redux/user/user-selectors";
// import s from "./Verify.module.css";
import user from "../redux/user/userOperation";

const { fetchVerifyUser } = user;

function Verify() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVerifyUser());
  }, [dispatch]);

  return <h1>Verify</h1>;
}

export default Verify;
