import React from "react";
import { Link } from "react-scroll";
import ArrowIcon from "../Layout/ArrowIcon";
import "./style.scss";

const Navbar = () => {
  return (
    <nav className="nav u-grid">
      <div className="nav__left">
        <p className="nav__name">Tom Ashman</p>
        <p className="nav__title">Front End Developer</p>
      
      </div>
      <div className="projects-nav">
        <Link
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          // offset={-80}
          className="projects-nav__link">
          <p className="projects-nav__text">Projects</p>
          <div className="icon">
            <ArrowIcon className="icon__svg" scale=".8" fill="#1e1e1e" />
            <ArrowIcon className="icon__svg" scale="1.1" fill="#e0dfdb" />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
