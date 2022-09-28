import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/Homepage";
import { AboutMe } from "./pages/AboutMe";
import { Gallery } from "./pages/Gallery";
import { Header } from "./components/Header";
import { GalleryItems } from "./components/GalleryItems";
// import { GetInTouch } from "./pages/GetInTouch";
import { Leaves } from "./components/Leaves";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/holelizabeth" element={<Homepage />} />
        <Route exact path="/holelizabeth/about-me" element={<AboutMe />} />
        <Route exact path="/holelizabeth/gallery" element={<Gallery />} />
        <Route
          path={`/holelizabeth/gallery/:categoryId`}
          element={<GalleryItems />}
        />
      </Routes>
      {/* <Leaves /> */}
    </div>
  );
};

export default App;
