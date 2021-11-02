import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "../theme";
import { Wrapper } from "./about.styled";
import AboutCard from "../components/AboutCard/AboutCard";

const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <div className="title">Education</div>
        <div className="container">
          <AboutCard />
          <AboutCard />
          <AboutCard />
          <AboutCard />
        </div>
      </Wrapper>
    </ThemeProvider>
  );
};

export default About;
