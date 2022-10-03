import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import PulseLoader from "react-spinners/PulseLoader";
import Container from "../component/Container/Container";
import { getDragonId } from "../redux/dragon/dragon-selector";
import s from "./DragonDetails.module.css";
import dragonOperation from "../redux/dragon/dragonOperation";
import { getInLoggedIn } from "../redux/user/user-selectors";

const { fetchDragonId } = dragonOperation;
function DragonDetails() {
  const dataId = useSelector(getDragonId);
  const params = useParams();
  const dispatch = useDispatch();
  const loggedIn = useSelector(getInLoggedIn);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (dataId.length) return;
    dispatch(fetchDragonId(params.id));
  }, [dispatch, params.id, dataId.length]);

  const handleClick = () => {
    navigate(location.state.from, { replace: false });
  };

  const {
    name,
    active,
    description,
    flickr_images,
    first_flight,
    wikipedia,
    type,
    height_w_trunk,
    dry_mass_kg,
  } = dataId;

  return (
    <main className={s.main}>
      {loggedIn && dataId.id ? (
        <Container>
          <div className={s.containerBtn}>
            <button type="button" onClick={handleClick} className={s.btn}>
              Go back
            </button>
          </div>
          <h1 className={s.title}>{name}</h1>
          <div className={s.wrap}>
            <div className={s.containerImg}>
              {flickr_images?.map((el) => {
                return (
                  <img src={el} alt={el} className={s.img} key={uuidv4()} />
                );
              })}
            </div>
            <div className={s.listContainer}>
              <ul className={s.list}>
                <li className={s.item}>
                  <p className={s.text}>Active:</p>
                  <span className={s.span}>{active ? "yes" : "no"}</span>
                </li>
                <li className={s.item}>
                  <p className={s.text}>First flight:</p>
                  <span className={s.span}>{first_flight}</span>
                </li>
                <li className={s.item}>
                  <p className={s.text}>Type:</p>
                  <span className={s.span}>{type}</span>
                </li>
                <li className={s.item}>
                  <p className={s.text}>Dry mass kg:</p>
                  <span className={s.span}>{dry_mass_kg}kg</span>
                </li>
                <li className={s.item}>
                  <p className={s.text}>Height w trunk:</p>
                  <span className={s.span}>{height_w_trunk?.meters}m</span>
                </li>
                <li className={s.item}>
                  <a
                    href={wikipedia}
                    target="_blank"
                    rel="noreferrer"
                    className={s.link}
                  >
                    <span className={s.span}>Wikipedia:</span> {name}
                  </a>
                </li>
                <li className={s.item}>
                  <p className={s.text}> Description: </p>
                  <span className={s.span}>{description}</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      ) : (
        <div className="loader">
          <PulseLoader color="#02172a" className="spinier" />
        </div>
      )}
    </main>
  );
}

export default DragonDetails;
