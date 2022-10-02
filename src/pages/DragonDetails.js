import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Container from "../component/Container/Container";
import { getDragonId } from "../redux/dragon/dragon-selector";
import s from "./DragonDetails.module.css";

function DragonDetails() {
  //   const [dragonId, setDragonId] = useState([]);
  const dataId = useSelector(getDragonId);
  //   setDragonId([dataId]);
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
      <Container>
        <h1 className={s.title}>{name}</h1>
        <div className={s.wrap}>
          <div className={s.containerImg}>
            {flickr_images?.map((el) => {
              return <img src={el} alt={el} className={s.img} key={uuidv4()} />;
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
    </main>
  );
}

export default DragonDetails;
