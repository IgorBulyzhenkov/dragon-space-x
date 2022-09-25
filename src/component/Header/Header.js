import s from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../image/kisspnspacex-dragon.png";
import Container from "../Container/Container";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import MobMenu from "../MobMenu/MobMenu";

function Header() {
  const [toggle, setToggle] = useState(false);

  const elBody = document.querySelector("body");

  const toggleClick = () => {
    if (toggle === true) {
      return setToggle(false);
    }
    setToggle(true);
    elBody.classList.add("hidden");
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
            <li className={s.item}>Log in</li>
            <li className={s.item}>Log out</li>
            <li className={s.item}>Sin in</li>
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
