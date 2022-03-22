import React from "react";
import { Fade } from "react-awesome-reveal";
import data from "../yourdata";

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade direction={"up"}>
              <h1>About Me</h1>
            </Fade>
            <p>
              &nbsp; {data.aboutParaOne}
              <br></br>
              <br></br>
              &nbsp; {data.aboutParaTwo}
              <br></br>
              <br></br>
              &nbsp; {data.aboutParaThree}
            </p>
          </div>
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
