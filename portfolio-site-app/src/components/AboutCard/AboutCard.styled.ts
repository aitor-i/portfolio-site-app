import styled from "styled-components";

export const Wrapper = styled.div`
  .about-card {
    border: 2px solid ${(props) => props.theme.primaryColor};
    background-color: ${(props) => props.theme.lightBackgroundColor};
    width: 80vw;
    align-self: auto;
    padding: 7px;
    border-radius: 3px;
  }
  .header {
    &-title {
      font-size: 24px;
      letter-spacing: 0.2rem;
      color: ${(props) => props.theme.primaryColor};
      border-bottom: 1px solid ${(props) => props.theme.white};
    }
    &-academy {
      font-size: 20px;
      letter-spacing: 0.2rem;
      font-style: italic;
      color: ${(props) => props.theme.white};
      padding-top: 5px;
    }
  }
  .description {
    font-size: 16px;
    letter-spacing: 0.1rem;
    color: ${(props) => props.theme.white};
    padding-top: 5px;
  }
`;
