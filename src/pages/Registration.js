import { useSelector } from "react-redux";
import Registry from "../component/Form/Registry";
import VerifyMail from "../component/VerifyMail/VerifyMail";
import { getVerifyMail } from "../redux/user/user-selectors";
import s from "./Registration.module.css";
function Registration() {
  const verifyMail = useSelector(getVerifyMail);

  return (
    <main className={s.main}>
      <Registry />
      {verifyMail ? <VerifyMail /> : null}
    </main>
  );
}
export default Registration;
