import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import fetchDragon from "../redux/dragon/dragon0operation";
import s from "./Gallery.module.css";

function Gallery() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.dragon.items);

  useEffect(() => {
    dispatch(fetchDragon());
  }, [dispatch]);

  const arrImg = [];
  data.map(({ flickr_images }) => arrImg.push(...flickr_images));

  return (
    <section className={s.carousel}>
      <h1 className={s.isHidden}> dragon</h1>
      <div className={s.roundabout}>
        {arrImg?.map((el) => {
          return <img src={el} alt={el} className={s.img} key={uuidv4()} />;
        })}
      </div>
    </section>
  );
}

export default Gallery;
