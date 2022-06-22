import { Link } from "react-router-dom";
import "./style.css";

export const Homepage = () => {
  return (
    <div id="homepage" className="page">
      <h1>holelizabeth</h1>
      <div id="homepage-links">
        <Link to="/holelizabeth/about-me" className="homepage-link">
          about me
        </Link>
        <Link to="/holelizabeth/gallery" className="homepage-link">
          gallery
        </Link>
        {/* <Link to="/get-in-touch" className="homepage-link">
          get in touch
        </Link> */}
      </div>
    </div>
  );
};
