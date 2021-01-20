import React, { Fragment } from "react";
import AboutMeSection from "../components/AboutMeSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InstagramSection from "../components/InstagramSection";
import IntroSection from "../components/IntroSection";
import Navbar from "../components/Navbar";
import Projects from "../components/ProjectsSection";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <HeroSection />
      <IntroSection />
      <Projects />
      <AboutMeSection />
      <InstagramSection />
      <Footer />
    </Fragment>
  );
};

export default Home;
