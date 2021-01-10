import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./style.scss";
import portraitBackground from "../../images/portraitbg.jpg";
import portraitFront from "../../images/portraitfront.png";


// Parallax setup
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0) scale(1.3)`;
const trans2 = (x, y) => `translate3d(${x / 80}px,${y / 80}px,0) `;

const HeroSection = () => {
  // Parallax Animation
  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
  };

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
 

  const onMouseMove = ({ clientX: x, clientY: y }) => {
    set({ xy: calc(x, y) });
  };
  return (
    <section className="hero">
      <div className="hero__heading-container">
        <h1 className="hero__heading">
          Front End <br />{" "}
          <span className="hero__heading--highlight">developer</span>
          <br />
          based in Cambridge
        </h1>
      </div>
      <div className="hero-image">
        <div className="hero-image__wrapper">
          <animated.img
            style={{ transform: props.xy.interpolate(trans2) }}
            src={portraitFront}
            alt=""
            className="hero-image__image hero-image__image--front"
          />
          <animated.img
            src={portraitBackground}
            alt=""
            className="hero-image__image hero-image__image--back"
            style={{ transform: props.xy.interpolate(trans1) }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
