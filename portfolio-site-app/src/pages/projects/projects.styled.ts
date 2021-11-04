import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    color: #61dafb;
    font-size: 4rem;
    letter-spacing: 0.3rem;
    text-align: center;
    padding-top: 25px;
    padding-bottom: 5px;
    margin-bottom: 40px;
    border-bottom: 2px solid #f2f2f2;
  }

  .container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;
