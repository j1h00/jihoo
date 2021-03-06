import React from "react";
import { Fade } from "react-awesome-reveal";
import data from "../yourdata";
import resumePDF from "../assets/Jihoo_resume_v1.0.pdf";

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade direction={"down"}>
            <h2>
              Hi, I'm {data.name}{" "}
              <span role="img" aria-label="Emoji">
                π
              </span>
            </h2>
          </Fade>
          <Fade direction={"down"}>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "λ°°μμ μ¦κΈ°λ"}
              </h1>
              <h1>
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "Front-end Web Developer"}
              </h1>
              <h1>
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : "λ°μ§νμλλ€."}
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
              download="Jihoo_resume_v1.0.pdf"
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
