import { memo } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { getDragonItems } from "../redux/dragon/dragon-selector";
import s from "./Home.module.css";

function Home() {
  const data = useSelector(getDragonItems);

  return (
    <main className={s.main}>
      {data ? (
        <section className={s.dragon}>
          {data.map(
            ({
              flickr_images,
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
                    <img
                      src={flickr_images}
                      alt={flickr_images}
                      className={s.img}
                      key={uuidv4()}
                    />
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

export default memo(Home);
