import { useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import s from "./Gallery.module.css";
import ItemsCarousel from "react-items-carousel";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { getDragonItems } from "../redux/dragon/dragon-selector";

function Gallery() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  const data = useSelector(getDragonItems);

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

