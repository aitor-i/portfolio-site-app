import styled from "styled-components";
import { theme } from "../../theme";

const { primaryColor, lightSecondaryColor, white } = theme;

export const Wrapper = styled.div`
  .about-card {
    border: 2px solid ${primaryColor};
    background-color: ${lightSecondaryColor};
    width: 80vw;
    align-self: auto;
    padding: 7px;
    border-radius: 3px;
  }
  .header {
    &-title {
      font-size: 24px;
      letter-spacing: 0.2rem;
      color: ${primaryColor};
      border-bottom: 1px solid ${white};
    }
    &-academy {
      font-size: 20px;
      letter-spacing: 0.2rem;
      font-style: italic;
      color: ${white};
      padding-top: 5px;
    }
  }
  .description {
    font-size: 16px;
    letter-spacing: 0.1rem;
    color: ${white};
    padding-top: 5px;
  }
`;
