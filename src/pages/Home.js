import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { FaHandPointer } from "react-icons/fa";
import { getDragonItems } from "../redux/dragon/dragon-selector";
import s from "./Home.module.css";
import dragonOperation from "../redux/dragon/dragonOperation";

const { fetchDragonId } = dragonOperation;

function Home() {
  const data = useSelector(getDragonItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    const id = e.target.id;
    if (!id) return;
    dispatch(fetchDragonId(id));
    navigate(`/details/${id}`);
  };

  return (
    <main className={s.main}>
      {data ? (
        <section className={s.dragon}>
          {data.map(
            ({
              flickr_images,
              id,
              name,
              description,
              first_flight,
              dry_mass_kg,
              wikipedia,
              height_w_trunk: { meters },
            }) => {
              return (
                <div key={uuidv4()} className={s.card}>
                  <h2 className={s.title} key={uuidv4()}>
                    {name}
                  </h2>
                  <div className={s.containerImg}>
                    <Link onClick={handleClick} id={id} className={s.link_img}>
                      <img
                        src={flickr_images}
                        alt={flickr_images}
                        className={s.img}
                        key={uuidv4()}
                        id={id}
                      />
                      <FaHandPointer className={s.click} />
                    </Link>
                  </div>

                  <ul className={s.list} key={uuidv4()}>
                    <li key={uuidv4()} className={s.item}>
                      {new Date(first_flight).toDateString()}
                    </li>
                    <li key={uuidv4()} className={s.item}>
                      <span className={s.span}>KG:</span> {dry_mass_kg}kg
                    </li>
                    <li key={uuidv4()} className={s.item}>
                      <span className={s.span}>HEIGHT:</span> {meters}m
                    </li>
                    <li key={uuidv4()} className={s.item}>
                      <a
                        href={wikipedia}
                        target="_blank"
                        rel="noreferrer"
                        key={uuidv4()}
                        className={s.link}
                      >
                        <span className={s.span}>Wikipedia:</span> {name}
                      </a>
                    </li>
                  </ul>
                  <p className={s.text} key={uuidv4()}>
                    {description}
                  </p>
                </div>
              );
            }
          )}
        </section>
      ) : null}
    </main>
  );
}

export default Home;
