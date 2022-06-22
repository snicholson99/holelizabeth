import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/Homepage";
import { AboutMe } from "./pages/AboutMe";
import { Gallery } from "./pages/Gallery";
import { Header } from "./components/Header";
// import { GetInTouch } from "./pages/GetInTouch";
import { Leaves } from "./components/Leaves";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/holelizabeth" element={<Homepage />} />
        <Route path="/holelizabeth/*" element={<HolelizabethRouter />} />
      </Routes>
      <Leaves />
    </div>
  );
};

export default App;

const HolelizabethRouter = () => (
  <>
    <Header />
    <Routes>
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  </>
);
