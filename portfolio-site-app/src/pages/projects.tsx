import React from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { Wrapper } from "./projects.styled";
//Data
import projectsData from "../api/projectsData";

const Projects = () => {
  return (
    <Wrapper>
      <div className="title">My Projects</div>
      <div className="container">
        {projectsData.map((x) => (
          <ProjectCard props={x} key={x.name} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Projects;
