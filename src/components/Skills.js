import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <Fade bottom>
            <h1>Skills</h1>
            <div className="skills-grid">
              {data.skills.map((skill, index) => (
                <div className="skill" key={index}>
                  <img src={skill.img} alt="css" />
                  <p>{skill.para}</p>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Skills;
