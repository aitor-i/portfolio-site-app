import { useState, useEffect } from "react";
import { ProjectCardType } from "../../components/ProjectCard/ProjectCard";
import { Wrapper } from "./projects.styled";

import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {
  const [projectsData, setProjectsData] = useState<Array<ProjectCardType>>([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setProjectsData(data));
  }, []);

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
