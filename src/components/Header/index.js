import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

export const Header = () => {
  const location = useLocation();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const onLinkClick = () => {
    if (window.innerWidth <= 710) {
      setIsHamburgerOpen(false);
    }
  };

  return (
    <header
      id="header"
      className={`${isHamburgerOpen ? "hamburger-open" : ""}`}
    >
      <Link to="/holelizabeth" className="header-link" onClick={onLinkClick}>
        <h1>holelizabeth</h1>
      </Link>
      <div id="header-mobile-links">
        <i
          onClick={toggleHamburger}
          className={`fas fa-bars ${isHamburgerOpen ? "hide" : ""}`}
        ></i>
        <i
          onClick={toggleHamburger}
          className={`fas fa-x ${!isHamburgerOpen ? "hide" : ""}`}
        ></i>
      </div>
      <div id="header-links">
        <Link
          onClick={onLinkClick}
          to="/holelizabeth/about-me"
          className={`header-link ${
            location.pathname === "/holelizabeth/about-me" ? "selected" : ""
          }`}
        >
          about me
        </Link>
        <Link
          onClick={onLinkClick}
          to="/holelizabeth/gallery"
          className={`header-link ${
            location.pathname === "/holelizabeth/gallery" ? "selected" : ""
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
