import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <Link to="home" smooth={true} spy={true}>
            <div role="button" className="name" tabIndex={0}>
              Portfolio.
            </div>
          </Link>
          <div className="links-wrapper">
            <Link to="work" smooth={true} spy={true}>
              <button>Work</button>
            </Link>
            <Link to="about" smooth={true} spy={true}>
              <button>About</button>
            </Link>
            <Link to="contact" smooth={true} spy={true}>
              <button>Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
