import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import React from "react";

export const Wrapper = styled.div``;

export const Nav = styled.nav``;

// **** CHECK PROPERTIES ****
export const NavLinks: React.CSSProperties | any = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 24px;
  letter-spacing: 0.3rem;

  &.active {
    color: #61dafb;
  }
`;
export const Bars = styled(FaBars)`
  display: none;
  color: #000;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1, 8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
