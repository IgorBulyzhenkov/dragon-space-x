import { memo, useEffect } from "react";
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
    <main className={s.main}> 
      <Container>
        <h1 className={s.title}>Thank you for verification</h1>
      </Container>
    </main>
  );
}

export default memo(Verify);
