import React from "react";
import { Fade } from "react-awesome-reveal";
import data from "../yourdata";

const Skills = () => {
  return (
    <div className="section" id="skills">
      <div className="container">
        <div className="skills-container">
          <Fade direction={"up"}>
            <h1>Skills</h1>
            <div className="skills-grid">
              {data.skills.map((skill, index) => (
                <div className="skill" key={index}>
                  <div className="skill-header">
                    <img src={skill.img} alt="css" />
                    <div className="progress-background">
                      <div
                        className="progress"
                        style={{
                          width: `${skill.level}` + "%",
                          backgroundColor: skill.color,
                        }}
                      >
                        <span>{skill.level}%</span>
                      </div>
                    </div>
                  </div>
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
