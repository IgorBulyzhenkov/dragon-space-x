import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../pages/Home";
import Header from "./Header/Header";
import Gallery from "../pages/Gallery";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
