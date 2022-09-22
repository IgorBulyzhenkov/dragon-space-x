import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchDragon from "../redux/dragon/dragon0operation";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.dragon.items);
  // data.map((el) => console.log(el));
  console.log(data);
  const { flickr_images } = data;
  useEffect(() => {
    dispatch(fetchDragon());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">Hello!</header>
      {flickr_images.map(el =>
      {
        return <img src={el} alt={el} />;
      })}
    </div>
  );
}

export default App;
