import React, { useState, useRef, useEffect } from "react";
import ArrowIcon from "../Layout/ArrowIcon";
import UseWindowSize from "../UseWindowSize";

import "./style.scss";


const Accordion = ({ title, active, handleAccordionUpdate, children }) => {
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
            className="icon"
            scale={UseWindowSize().width > 600 ? "1.8" : "1.2"}
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
        {children}
      </div>
    </div>
  );
};

export default Accordion;
