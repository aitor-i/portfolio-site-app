import React from "react";

import { Wrapper } from "./about.styled";
import AboutCard from "../../components/AboutCard/AboutCard";

const About = () => {
  return (
    <Wrapper>
      <div className="title">Education</div>
      <div className="container">
        <AboutCard />
        <AboutCard />
        <AboutCard />
        <AboutCard />
      </div>
    </Wrapper>
  );
};

export default About;
