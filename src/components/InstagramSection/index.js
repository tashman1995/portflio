import React from "react";
import { FaComment, FaHeart } from "react-icons/fa";
import ImageLoad from "../ImageLoad";
import "./style.scss";

const InstagramSection = () => {
  return (
    <section className="instagram u-grid">
      <div className="instagram__headings">
        <h2 className="secondary-heading">Not Just a Developer</h2>
        <h3 className="tertiary-heading">
          I have extensive experience in events, product, portrait and travel
          photography and videography.
        </h3>
        <a
          href={"//ashmanmedia.myportfolio.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="tertiary-heading instagram__portfolio-link">
          Check out my photography portfolio
        </a>
      </div>
      <div className="instagram__images">
        <div className="image">
          <a
            href={"//www.instagram.com/p/Bxm1z88nRKt/"}
            target="_blank"
            rel="noopener noreferrer"
            className="image__info">
            <div className="image__likes">
              <FaHeart />
              291
            </div>
            <div className="image__comments">
              <FaComment />9
            </div>
          </a>
          <ImageLoad
            src={process.env.PUBLIC_URL + "/images/baligates1.jpg"}
            placeholder={process.env.PUBLIC_URL + "/images/baligates2.jpg"}
            className="image__file"
            alt="Picture of some traditional gatesin Bali"
          />
        </div>
        <div className="image">
          <a
            href={"//www.instagram.com/p/BztKVUUHNrc/"}
            target="_blank"
            rel="noopener noreferrer"
            className="image__info">
            <div className="image__likes">
              <FaHeart />
              46
            </div>
            <div className="image__comments">
              <FaComment />1
            </div>
          </a>
          <ImageLoad
            src={process.env.PUBLIC_URL + "/images/olivia1.jpg"}
            placeholder={process.env.PUBLIC_URL + "/images/olivia2.jpg"}
            className="image__file"
            alt="Picture of female model"
          />
        </div>
        <div className="image">
          <a
            href={"//www.instagram.com/p/BxC03CADtaD/"}
            target="_blank"
            rel="noopener noreferrer"
            className="image__info">
            <div className="image__likes">
              <FaHeart />
              1368
            </div>
            <div className="image__comments">
              <FaComment />
              32
            </div>
          </a>
          <ImageLoad
            src={process.env.PUBLIC_URL + "/images/taj1.jpg"}
            placeholder={process.env.PUBLIC_URL + "/images/taj2.jpg"}
            className="image__file"
            alt="Picture of a girl infront of the Taj Mahal"
          />
        </div>
        <div className="image">
          <a
            href={"//www.instagram.com/tomrhysash/"}
            target="_blank"
            rel="noopener noreferrer"
            className="image__info">
            <div className="image__likes">
              <FaHeart />
              62
            </div>
            <div className="image__comments">
              <FaComment />3
            </div>
          </a>
          <ImageLoad
            src={process.env.PUBLIC_URL + "/images/halloween1.jpg"}
            placeholder={process.env.PUBLIC_URL + "/images/halloween2.jpg"}
            className="image__file"
            alt="Picture of a girl in strong coloured lighting"
          />
        </div>
        <div className="image">
          <a
            href={"//www.instagram.com/p/Bp4x6E8lame/"}
            target="_blank"
            rel="noopener noreferrer"
            className="image__info">
            <div className="image__likes">
              <FaHeart />
              247
            </div>
            <div className="image__comments">
              <FaComment />
              17
            </div>
          </a>
          <ImageLoad
            src={process.env.PUBLIC_URL + "/images/halfdome1.jpg"}
            placeholder={process.env.PUBLIC_URL + "/images/halfdome2.jpg"}
            className="image__file"
            alt="Picture of the half dome rock in yosemite national park"
          />
        </div>
        <div className="image">
          <a
            href={"//www.instagram.com/p/Bz-zjbJAk5a/"}
            target="_blank"
            rel="noopener noreferrer"
            className="image__info">
            <div className="image__likes">
              <FaHeart />
              47
            </div>
            <div className="image__comments">
              <FaComment />2
            </div>
          </a>
          <ImageLoad
            src={process.env.PUBLIC_URL + "/images/bristol1.jpg"}
            placeholder={process.env.PUBLIC_URL + "/images/bristol2.jpg"}
            className="image__file"
            alt="Picture of a girl smiling"
          />
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
