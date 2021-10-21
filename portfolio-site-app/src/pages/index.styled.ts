import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 40vh;
  height: 100vh;
  .home {
    letter-spacing: 0.3rem;
    height: 100%;
    width: 100%;
    text-align: center;
    font-size: 2rem;
    align-items: center;
    color: white;
    &__description {
      padding-top: 5px;
    }

    &__name {
      display: flex;
      justify-content: center;
      font-size: 3rem;
      padding: 10px;
      border-bottom: 2px solid #fff;
      &-first {
        color: #61dafb;
        margin-right: 10px;
      }
    }
  }
`;
