import { useEffect } from "react";
import { useDispatch } from "react-redux";
import user from "../redux/user/userOperation";
import Container from "../component/Container/Container";
import s from "./Verify.module.css";

const { fetchVerifyUser } = user;

function Verify() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVerifyUser());
  }, [dispatch]);

  return (
    <Container className={s.container}>
      <h1 className={s.title}>Thank you for verification</h1>
    </Container>
  );
}

export default Verify;
