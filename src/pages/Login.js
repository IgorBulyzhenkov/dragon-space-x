import { useSelector } from "react-redux";
import LoginUser from "../component/Form/LoginUser";
import VerifyMail from "../component/VerifyMail/VerifyMail";
import { getVerifyMail } from "../redux/user/user-selectors";
import s from "./Login.module.css";
import Container from "../component/Container/Container";

function Login() {
  const verifyMail = useSelector(getVerifyMail);

  return (
    <main className={s.main}>
      <Container>
        <LoginUser />
        {verifyMail ? <VerifyMail /> : null}
      </Container>
    </main>
  );
}

export default Login;
