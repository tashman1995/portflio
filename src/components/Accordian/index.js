import React, { useState, useRef, useEffect } from "react";
import ArrowIcon from "../Layout/ArrowIcon";

import "./style.scss";

const Accordion = ({
  title,
  content,
  active,
  handleAccordionUpdate,
  link,
  githubLink,
}) => {
  const [setHeight, setHeightState] = useState("0px");

  const contentRef = useRef(null);

  useEffect(() => {
    setHeightState(!active ? "0px" : `${contentRef.current.scrollHeight}px`);
  }, [active]);

  return (
    <div className="accordion__section">
      <button
        className={`accordion`}
        onClick={() => handleAccordionUpdate(title)}>
        <div
          className={`accordion__icon ${active && "accordion__icon--rotate"}`}>
          <ArrowIcon
            scale="1.8"
            fill={active ? "#1e1e1e" : "none"}
            strokeColor="#1e1e1e"
            strokeWidth="1px"
          />
        </div>

        <h3 className={`accordion__title ${active && "bold"}`}>{title}</h3>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content">
        <p
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="accordion__links">
          <a href={`//${link}`} className="accordion__link">
            Visit Site
          </a>
          <a href={`//${githubLink}`} className="accordion__link">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
