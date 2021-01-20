import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="u-grid footer">
      <div className="footer__licensing">2021 | Tom Ashman</div>
      <ul className="footer__links">
        <li className="footer__link">
          <a
            className="footer__link-text"
            href="mailto:tom.ashman1995@gmail.com"
            target="_blank"
            rel="noopener noreferrer">
            Email
          </a>
        </li>
        <li className="footer__link">
          <a
            className="footer__link-text"
            href={"//www.linkedin.com/in/tom-a-129392a9//"}
            target="_blank"
            rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li className="footer__link">
          <a
            className="footer__link-text"
            href={"//www.instagram.com/tomrhysash/"}
            target="_blank"
            rel="noopener noreferrer">
            Instagram
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
