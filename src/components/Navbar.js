import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <Link to="home" smooth={true} spy={true}>
            <div role="button" className="name" tabIndex={0}>
              Portfolio.
            </div>
          </Link>
          <div className="links-wrapper">
            <Link to="work" smooth={"easeInOutCubic"} spy={true}>
              <button>Work</button>
            </Link>
            <Link to="about" smooth={"easeInOutCubic"} spy={true}>
              <button>About</button>
            </Link>
            <Link to="skills" smooth={"easeInOutCubic"} spy={true}>
              <button>Skills</button>
            </Link>
            <Link to="education" smooth={"easeInOutCubic"} spy={true}>
              <button>Education</button>
            </Link>
            <Link to="contact" smooth={"easeInOutCubic"} spy={true}>
              <button>Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
