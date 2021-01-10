import React from "react";
import "./style.scss";
import ArrowIcon from "../Layout/ArrowIcon";

const IntroSection = () => {
  return (
    <section className="intro">
      <div className="intro__text-wrapper">
        <p className="intro__text">
          I'm currently looking for a front end development position in the
          Cambridge and London areas. I have experience in HTML, CSS, Javascript
          and the MERN stack.
        </p>
      </div>
      <div className="intro__button-container">
        <button className="cv-button">
          <div className="cv-button__content">
            <ArrowIcon
              className="icon__svg"
              scale="3.5"
              fill="none"
              strokeColor="#e0dfdb"
              strokeWidth=".5px"
            />
            <p className="cv-button__text">
              Take a look
              <br /> at my CV
            </p>
          </div>
        </button>
      </div>
    </section>
  );
};

export default IntroSection;
