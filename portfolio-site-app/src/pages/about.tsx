import React from "react";
import { Wrapper } from "./about.tyled";
const About = () => {
  return (
    <Wrapper>
      <div className="about-card">
        <div className="header">
          <div className="header-title">Chemistry Degree</div>
          <div className="header-academy">UPV/EHU</div>
        </div>
        <div className="description">
          Chemistry degree specialization on polymer science
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
