import s from "./MobMenu.module.css";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import Container from "../Container/Container";

function MobMenu({ setToggle }) {
  const elBody = document.querySelector("body");

  const handleClickToggle = () => {
    setToggle(false);

    elBody.classList.remove("hidden");
  };

  const removeClass = (e) => {
    if (!e.target.classList.contains("MobMenu_link__RG4cL")) return;

    elBody.classList.remove("hidden");
    setToggle(false);
  };

  return (
    <Container className={s.container}>
      <div className={s.menu}>
        <div className={s.close}>
          <FiX onClick={handleClickToggle} className={s.close} />
        </div>
        <ul className={s.list} onClick={removeClass}>
          <li className={s.item}>
            <Link to="/home" className={s.link}>
              Home
            </Link>
          </li>
          <li className={s.item}>
            <Link to="/gallery" className={s.link}>
              Gallery
            </Link>
          </li>
          <li className={s.item}>Log in</li>
          <li className={s.item}>Log out</li>
          <li className={s.item}>Sin in</li>
        </ul>
      </div>
    </Container>
  );
}

export default MobMenu;
