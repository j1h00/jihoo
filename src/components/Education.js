import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

const Education = () => {
  return (
    <div className="section" id="education">
      <div className="container">
        <div className="education-container">
          <Fade bottom cascade>
            <h1>{data.educationHeading}</h1>
          </Fade>
          {data.educations.map(({ period, title, content }, index) => (
            <div key={index} className="education-para">
              <section>
                <h3>{title}</h3>
                <p>{period}</p>
              </section>
              <ul>
                {content.map((text, index) => (
                  <li key={index}>
                    <p>{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
