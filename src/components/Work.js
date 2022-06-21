import React from "react";
import Card from "./atoms/Card";
import { Fade } from "react-awesome-reveal";

import data from "../yourdata";

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade direction={"down"}>
            <h1>Projects</h1>
          </Fade>

          <div className="grid">
            {data.projects.map((project, index) => (
              <Fade key={index} direction={index % 2 ? "right" : "left"}>
                <Card
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                ></Card>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
