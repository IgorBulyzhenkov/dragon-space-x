import s from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../image/kisspnspacex-dragon.png";
import Container from "../Container/Container";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import MobMenu from "../MobMenu/MobMenu";
import { useDispatch } from "react-redux";
import user from "../../redux/user/userOperation";

const { logOutUser } = user;

function Header() {
  const [toggle, setToggle] = useState(false);

  const elBody = document.querySelector("body");
  const dispatch = useDispatch();
  const toggleClick = () => {
    if (toggle === true) {
      return setToggle(false);
    }
    setToggle(true);
    elBody.classList.add("hidden");
  };

  const handleClick = () => {
    dispatch(logOutUser());
  };

  return (
    <header className={s.header}>
      <Container>
        <div className={s.headerContainer}>
          <img src={logo} alt="logo" className={s.logo} />
          <nav className={s.nav}>
            <Link to="/home" className={s.link}>
              Home
            </Link>
            <Link to="/gallery" className={s.link}>
              Gallery
            </Link>
          </nav>
          <ul className={s.list}>
            <li className={s.item}>
              <Link to="/login" className={s.link}>
                Log in
              </Link>
            </li>
            <li className={s.item}>
              <Link to="/auth" className={s.link}>
                Registration
              </Link>
            </li>
            <li className={s.item}>
              <button type="button" onClick={handleClick}>
                Log out
              </button>
            </li>
          </ul>
          <div className={s.menu}>
            <MdMenu
              className={!toggle ? s.burgerMenu : s.display}
              onClick={toggleClick}
            />
          </div>
        </div>
      </Container>
      <div>{toggle ? <MobMenu setToggle={setToggle} /> : null}</div>
    </header>
  );
}

export default Header;
