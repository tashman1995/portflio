import React, { Fragment } from "react";
import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection";
import Projects from "../components/ProjectsSection";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <IntroSection />
      <Projects />
    </Fragment>
  );
};

export default Home;
