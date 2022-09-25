import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Container from "../component/Container/Container";
import fetchDragon from "../redux/dragon/dragon0operation";
import s from "./Home.module.css";

function Home() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.dragon.items);

  console.log(data);
  const {
    flickr_images,
    name,
    wikipedia,
    description,
    first_flight,
    dry_mass_kg,
    height_w_trunk: { meters },
  } = data;
  useEffect(() => {
    dispatch(fetchDragon());
  }, [dispatch]);

  return (
    <main className={s.main}>
      <section className={s.carousel}>
        <h1 className={s.isHidden}> dragon</h1>
        {flickr_images?.map((el) => {
          return <img src={el} alt={el} className={s.img} key={uuidv4()} />;
        })}
      </section>
      <section className={s.dragon}>
        {flickr_images ? (
          <img src={flickr_images[1]} alt="" width="180" />
        ) : null}
        <div>
          <h2 className={s.title}>{name} </h2>
          <p className={s.text}>{description}</p>
          <a href={wikipedia} target="_blank" rel="noreferrer">
            Wikipedia {name}
          </a>
          <ul className={s.list}>
            <li>{new Date(first_flight).toDateString()}</li>
            <li>KG: {dry_mass_kg}kg</li>
            <li>HEIGHT: {meters}m</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Home;
