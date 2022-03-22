import React from "react";
import { Fade } from "react-awesome-reveal";
import data from "../yourdata";

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade direction={"up"}>
            <h1>Contact</h1>
            <h2>{data.contactSubHeading}</h2>
          </Fade>
          <a className="email-link" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a>
          <div className="social-icons">
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons" />
              </a>
            ))}
          </div>
          <span>
            refer to <a href="https://www.chetanverma.com/">Chetan Verma</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
