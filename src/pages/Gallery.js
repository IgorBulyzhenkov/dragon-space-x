import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import fetchDragon from "../redux/dragon/dragon0operation";
import s from "./Gallery.module.css";
import ItemsCarousel from "react-items-carousel";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

function Gallery() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const dispatch = useDispatch();

  const data = useSelector((state) => state.dragon.items);

  useEffect(() => {
    dispatch(fetchDragon());
  }, [dispatch]);

  const arrImg = [];
  data.map(({ flickr_images }) => arrImg.push(...flickr_images));

  return (
    <main className={s.carousel}>
      <div style={{ padding: `0 ${chevronWidth}px` }}>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={1}
          gutter={20}
          leftChevron={
            <button className={s.right} type="button">
              {<FaArrowCircleLeft className={s.svg} />}
            </button>
          }
          rightChevron={
            <button className={s.left} type="button">
              {<FaArrowCircleRight className={s.svg} />}
            </button>
          }
          outsideChevron
          chevronWidth={chevronWidth}
          infiniteLoop={true}
        >
          {arrImg?.map((el) => {
            return <img src={el} alt={el} className={s.img} key={uuidv4()} />;
          })}
        </ItemsCarousel>
      </div>
    </main>
  );
}

export default Gallery;

// <section className={s.carousel}>
//   <h1 className={s.isHidden}> dragon</h1>
//   <div className={s.roundabout}>
//     {arrImg?.map((el) => {
//       return <img src={el} alt={el} className={s.img} key={uuidv4()} />;
//     })}
//   </div>
// </section>;
