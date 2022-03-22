import React from "react";
import Card from "./atoms/Card";
import { Fade } from "react-awesome-reveal";

import data from "../yourdata";

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade direction={"up"}>
            <h1>Work</h1>
          </Fade>

          <div className="grid">
            <Fade direction={"up"}>
              {data.projects.map((project, index) => (
                <Card
                  key={index}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                ></Card>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
