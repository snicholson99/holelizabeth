import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { Leaves } from "./components/Leaves";
import { Homepage } from "./pages/Homepage";
import { AboutMe } from "./pages/AboutMe";
import { Gallery } from "./pages/Gallery";
import { Header } from "./components/Header";
// import { GetInTouch } from "./pages/GetInTouch";

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/get-in-touch" element={<GetInTouch />} /> */}
      </Routes>
      {location.pathname === "/" && <Leaves />}
    </div>
  );
};

export default App;
