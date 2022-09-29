import { useEffect } from "react";
import { useDispatch } from "react-redux";
import user from "../redux/user/userOperation";

const { fetchVerifyUser } = user;

function Verify() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVerifyUser());
  }, [dispatch]);

  return <h1>Thank you for verification</h1>;
}

export default Verify;
