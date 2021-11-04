import React from "react";
import { Wrapper } from "./index.styled";

const Home: React.FC = () => {
  return (
    <Wrapper>
      <div className="home">
        <div className="home__name">
          <div className="home__name-first">Aitor</div>
          <div className="home__name-last">Ibarra</div>
        </div>
        <div className="home__description">
          Chemist, Developer & Photographer
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
