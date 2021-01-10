import React, { useState } from "react";
import Accordion from "../Accordian";
import "./style.scss";

const Projects = () => {
  const [imo, setImo] = useState(false);
  const [mvdb, setMvdb] = useState(false);
  const [dolla, setDolla] = useState(false);
  const [greenlight, setGreenlight] = useState(false);

  const data = [
    {
      title: "IMO",
      active: imo,
      content:
        "My most complete and advanced project yet, IMO is a travel photography location sharing platform aimed at photographers. I produced it using the MERN stack (MongoDB, Express, NodeJs and React). Other technologies used in the app were Scss for styling, Redux for state management, React Spring for animations, Cloudinary and Multer for image uploading and Mapbox for displaying geographical data. ",
      githubLink: "www.github.com",
      link: "https://pure-ravine-00967.herokuapp.com/",
    },
    {
      title: "MVDB",
      active: mvdb,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      githubLink: "",
      link: "",
    },
    {
      title: "dolla",
      active: dolla,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      githubLink: "",
      link: "",
    },
    {
      title: "Green Light",
      active: greenlight,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      githubLink: "",
      link: "http://www.greenlightpackaging.com/",
    },
  ];

  const handleAccordionUpdate = (accordionId) => {
    setImo(accordionId === "IMO" ? !imo : false);
    setMvdb(accordionId === "MVDB" ? !mvdb : false);
    setDolla(accordionId === "dolla" ? !dolla : false);
    setGreenlight(accordionId === "Green Light" ? !greenlight : false);
  };

  return (
    <section className="projects">
      <h2 className="projects__title">Recent Projects</h2>
      <div className="projects__accordian">
        {data.map((project) => {
          return (
            <Accordion
              active={project.active}
              handleAccordionUpdate={handleAccordionUpdate}
              title={project.title}
              content={project.content}
              githubLink={project.githubLink}
              link={project.link}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
