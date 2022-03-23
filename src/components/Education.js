import React from "react";
import { Fade } from "react-awesome-reveal";
import data from "../yourdata";

const Education = () => {
  return (
    <div className="section" id="education">
      <div className="container">
        <div className="education-container">
          <Fade direction={"up"}>
            <h1>{data.educationHeading}</h1>
          </Fade>
          {data.educations.map(({ period, title, content }, index) => (
            <div key={index} className="education-para">
              <section>
                <Fade direction={"left"}>
                  <h3>{title}</h3>
                  <p>{period}</p>
                </Fade>
              </section>
              <Fade direction={"right"}>
                <ul>
                  {content.map((text, index) => (
                    <li key={index}>
                      <p>{text}</p>
                    </li>
                  ))}
                </ul>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
