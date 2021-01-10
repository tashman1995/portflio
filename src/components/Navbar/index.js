import React from "react";
import ArrowIcon from "../Layout/ArrowIcon";
import "./style.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__left">
        <p className="nav__name">Tom Ashman</p>
        <p className="nav__title">Front End Developer</p>
      </div>
      <a href="/" className="nav__projects">
        <p className="nav__projects--text">Projects</p>
        <div className="icon">
          <ArrowIcon className="icon__svg" scale=".8" fill="#1e1e1e" />
          <ArrowIcon className="icon__svg" scale="1.1" fill="#e0dfdb" />
        </div>
      </a>
    </nav>
  );
};

export default Navbar;
