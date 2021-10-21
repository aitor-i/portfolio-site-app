import styled from "styled-components";

export const Wrapper = styled.div`
  .card {
    margin: 7px;
    background-color: #3e4249;
    letter-spacing: 0rem;
    width: 400px;
    height: 420px;
    border: 2px solid #212121;
    display: flex;
    flex-direction: column;
    border-radius: 7px;
    color: #f2f2f2;

    &__header {
      display: flex;
      justify-content: flex-end;
      padding-top: 5px;

      &-title {
        letter-spacing: 0.3rem;
        padding-right: 25%;
        font-size: 3rem;
        color: #61dafb;
      }
      &-link {
        padding-right: 5%;
        padding-top: 5%;
        font-size: 1rem;
      }
    }
    &__img {
      align-self: center;
      padding-top: 5%;
      padding-bottom: 5%;
      height: 60%;
      width: 95%;
    }
    &__description {
      align-self: center;
      width: 90%;
      text-align: justify;
    }
  }
  a {
    text-decoration: none;
    color: #f2f2f2;

    &:hover {
      color: #61dafb;
    }
  }
`;
