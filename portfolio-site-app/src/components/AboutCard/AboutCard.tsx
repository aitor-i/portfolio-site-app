import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { Wrapper } from "./AboutCard.styled";

const AboutCard = () => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default AboutCard;
