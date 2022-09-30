import { useDispatch, useSelector } from "react-redux";
import { getUserMail } from "../../redux/user/user-selectors";
import s from "./VerifyMail.module.css";
import user from "../../redux/user/userOperation";

const { fetchVerifyMail } = user;

function VerifyMail() {
  const email = useSelector(getUserMail);

  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(fetchVerifyMail());
  };

  return (
    <div className={s.textContainer}>
      <p className={s.text}>
        A letter has been sent to the {email} to confirm the e-mail. If the
        email has not arrived, click send again
      </p>
      <button type="button" className={s.button} onClick={handleClick}>
        send again
      </button>
    </div>
  );
}

export default VerifyMail;
