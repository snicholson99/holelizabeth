import { Link } from "react-router-dom";
import "./style.css";

export const Homepage = () => {
  return (
    <div id="homepage" className="page">
      <h1>Hol Elizabeth</h1>
      <div id="homepage-links">
        <Link to="/holelizabeth/about-me" className="homepage-link">
          About Me
        </Link>
        <Link to="/holelizabeth/gallery" className="homepage-link">
          Gallery
        </Link>
        {/* <Link to="/holelizabeth/contact" className="homepage-link">
          Contact
        </Link> */}
      </div>
    </div>
  );
};
