import React from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { Wrapper } from "./projects.styled";
import projectsData from "../api/projectsData";

//types
import { props } from "../components/ProjectCard/ProjectCard";

const obj: any = {
  name: "brutedict",
  link: "!#",
  linkTitle: "Github",
  img: "!#",
  imgAlt: "None",
  description: "Lorem ipsum description",
};

const Projects = () => {
  console.log(obj.name);
  return (
    <Wrapper>
      <div className="title">My Projects</div>
      <div className="container">
        {/* {projectsData.map((x) => (
          <ProjectCard props={projectsData[0]} />
        ))} */}
        <ProjectCard props={obj} />
      </div>
    </Wrapper>
  );
};

export default Projects;
