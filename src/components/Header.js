import React from "react";
import { Fade } from "react-awesome-reveal";
import data from "../yourdata";
import resumePDF from "../assets/Jihoo_resume_v0.5.pdf";

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade direction={"down"}>
            <h2>
              Hi, I'm {data.name}{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade direction={"down"}>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Building digital"}
              </h1>
              <h1>
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "products, brands"}
              </h1>
              <h1>
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : "and experience"}
              </h1>
            </div>
          </Fade>

          <Fade direction={"down"}>
            <p>{data.headerParagraph}</p>
          </Fade>

          <Fade direction={"down"}>
            <a
              href={resumePDF}
              className="primary-btn flex-center"
              download="Jihoo_resume.pdf"
            >
              resume
              <span className="bounce material-icons-outlined">
                file_download
              </span>
            </a>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Header;
