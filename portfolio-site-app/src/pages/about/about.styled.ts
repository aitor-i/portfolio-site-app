import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  .title {
    color: ${(props) => props.theme.primaryColor};
    font-size: 4rem;
    letter-spacing: 0.3rem;
    text-align: center;
    padding-top: 25px;
    padding-bottom: 5px;
    margin-bottom: 40px;
    border-bottom: 2px solid ${(props) => props.theme.white};
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 9px;
  }
`;
