import { Link, useLocation } from "react-router-dom";
import "./style.css";

export const Header = () => {
  const location = useLocation();
  return (
    <header id="header">
      <Link to="/" className="header-link">
        <h1>holelizabeth</h1>
      </Link>
      <div id="header-links">
        <Link
          to="/about-me"
          className={`header-link ${
            location.pathname === "/about-me" ? "selected" : ""
          }`}
        >
          about me
        </Link>
        <Link
          to="/gallery"
          className={`header-link ${
            location.pathname === "/gallery" ? "selected" : ""
          }`}
        >
          gallery
        </Link>
        {/* <Link
          to="/get-in-touch"
          className={`header-link ${
            location.pathname === "/get-in-touch" ? "selected" : ""
          }`}
        >
          get in touch
        </Link> */}
      </div>
    </header>
  );
};
