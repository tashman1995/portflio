import React from "react";
import "./style.scss";
import ArrowIcon from "../Layout/ArrowIcon";
import { Link } from "react-router-dom";

const IntroSection = () => {
  return (
    <section className="intro u-grid">
      <div className="intro__text-wrapper">
        <p className="intro__text">
          Front end developer currently looking for a position in the
          Cambridge and London areas. I have experience in HTML, CSS, Javascript
          and the MERN stack.
        </p>
      </div>
      <div className="intro__cv-button-container">
        <Link
          className="cv-button cv-button--1"
          to={process.env.PUBLIC_URL + "/images/TomAshmanCv.pdf"}
          target="_blank"
          download>
          <div className="cv-button__content">
            <ArrowIcon
              className="icon__svg"
              scale="3.2"
              fill="none"
              strokeColor="#e0dfdb"
              strokeWidth=".5px"
            />
            <p className="cv-button__text cv-button__text--small">
              Take a look
              <br /> at my CV
            </p>
          </div>
        </Link>
      </div>
      <div className="intro__email-button-container">
        <a
          className="cv-button cv-button--2"
          href="mailto:tom.ashman1995@gmail.com"
          target="_blank"
          rel="noopener noreferrer">
          <div className="cv-button__content">
            <ArrowIcon
              className="icon__svg"
              scale="3.5"
              fill="none"
              strokeColor="#e0dfdb"
              strokeWidth=".5px"
            />
            <p className="cv-button__text">
              Email Me and <br /> get in touch
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default IntroSection;
