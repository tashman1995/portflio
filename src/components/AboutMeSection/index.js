import React from "react";
import ImageLoad from "../ImageLoad";
import "./style.scss";

const AboutMeSection = () => {
  return (
    <section className="about-me u-grid dark">
      <div className="about-me__image-container">
        <ImageLoad
          className="about-me__image"
          src={process.env.PUBLIC_URL + "/images/holi.jpg"}
          placeholder={process.env.PUBLIC_URL + "/images/holi2.jpg"}
          alt="A picture of myself"
        />
      </div>
      <div className="about-me__text">
        <h2 className="secondary-heading secondary-heading--light">
          Hello, I am Tom
        </h2>
        <h3 className="tertiary-heading tertiary-heading--light">
          Electrical and Electronic Engineering graduate turned web developer.
        </h3>
        <p className="about-me__paragraph">
          While searching for a career that will continue to interest both my
          logical and my creative side, I found the fast-moving world of web
          development.{" "}
        </p>
        <p className="about-me__paragraph">
          For the past year and a half, I have been spending my spare time
          expanding the knowledge I have on the popular technologies within the
          field.{" "}
        </p>
        <p className="about-me__paragraph">
          I am now at a stage where I believe my knowledge, paired with my work
          ethic and creative eye, will allow me to be a genuine asset to any web
          development team.{" "}
        </p>
      </div>
    </section>
  );
};

export default AboutMeSection;
