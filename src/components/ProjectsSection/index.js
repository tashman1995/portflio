import React, { useState, Fragment } from "react";
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
        "My most complete and advanced project yet, IMO is a travel photography location sharing platform aimed at photographers. I produced it using the MERN stack (MongoDB, Express, NodeJs and React). Other technologies used in the app were Scss for styling, Redux for state management, React Spring for animations, Cloudinary and Multer for image uploading and Mapbox for displaying geographical data.",
      sampleUser: {
        userName: "patwhyte@gmail.com",
        password: "password",
      },
      githubLink: "github.com/tashman1995/Imo",
      link: "pure-ravine-00967.herokuapp.com/",
    },

    {
      title: "dolla",
      active: dolla,
      content:
        "A modern site for an internet banking site with on scroll animations and smooth scroll navigation menu made in React.",
      githubLink: "github.com/tashman1995/dolla",
      link: "infinite-depths-16077.herokuapp.com/",
    },
    {
      title: "MVDB",
      active: mvdb,
      content:
        "A site made using vanilla Javascript, HTML and SCSS that utilises the OMDB api to search and compare movies and tv shows.",
      githubLink: "",
      link: "",
    },
    {
      title: "Green Light",
      active: greenlight,
      content:
        "A currently live WordPress site for a biodegradable void-fill packaging company. No templates were used in the design process and E-commerce features are going live soon.",
      githubLink: "",
      link: "greenlightpackaging.com/",
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
              title={project.title}>
              <Fragment>
                <p
                  className="accordion__text"
                  dangerouslySetInnerHTML={{ __html: project.content }}></p>

                {project.sampleUser && (
                  <div className="accordion__sample-user">
                    <p className="accordion__user-title">Sample Login</p>
                    <p className="accordion__user-text">
                      <span className="accordion__user-title">
                        Username: &nbsp;
                      </span>
                      {project.sampleUser.userName}
                    </p>
                    <p className="accordion__user-text">
                      <span className="accordion__user-title">
                        Password: &nbsp;{" "}
                      </span>{" "}
                      {project.sampleUser.password}
                    </p>
                  </div>
                )}
                <div className="accordion__links">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`//${project.link}`}
                    className="accordion__link">
                    Visit Site
                  </a>
                  {project.githubLink && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`//${project.githubLink}`}
                      className="accordion__link">
                      View Code
                    </a>
                  )}
                </div>
              </Fragment>
            </Accordion>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
