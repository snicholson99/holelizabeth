import { Link } from "react-router-dom";
import { LogoGraphic } from "../../components/LogoGraphic";
import "./style.css";

export const Homepage = () => {
  return (
    <div id="homepage" className="page">
      <LogoGraphic />
      <h1>Hol Elizabeth</h1>
      <div id="homepage-links">
        <Link to="/holelizabeth/about-me" className="homepage-link">
          About Me
        </Link>
        <Link to="/holelizabeth/gallery" className="homepage-link">
          Gallery
        </Link>
        {/* <Link to="/get-in-touch" className="homepage-link">
          get in touch
        </Link> */}
      </div>
    </div>
  );
};
