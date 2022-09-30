import { useSelector } from "react-redux";
import Registry from "../component/Form/Registry";
import VerifyMail from "../component/VerifyMail/VerifyMail";
import { getVerifyMail } from "../redux/user/user-selectors";
import s from "./Registration.module.css";

import Container from "../component/Container/Container";
function Registration() {
  const verifyMail = useSelector(getVerifyMail);

  return (
    <main className={s.main}>
      <Container>
        <Registry />
        {verifyMail ? <VerifyMail /> : null}
      </Container>
    </main>
  );
}
export default Registration;
