import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

const Option = styled(Link)`
  color: ${(props) => props.theme.primary};
  text-decoration: none;
`;

const Navigation = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 1.2em;
  a,
  button {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    font-weight: 400;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
    &:before {
      content: "";
      width: 2px;
      background: grey;
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: ${(props) => props.theme.secondary};
      content: "";
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
  @media (max-width: 1300px) {
    border-top: 1px solid grey;
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  padding-right: 100px;
  background-color: rgba(33, 19, 43, 0.9);
  // backdrop-filter: blur(3px);
  z-index: 1;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const Navbar = () => {
  return (
    <Main>
      <Navigation>
        <Option to="/#about">
          <b>About</b>
        </Option>
        <Option to="/#projects">
          <b>Projects</b>
        </Option>
        <Option to="/#experience">
          <b>Experience</b>
        </Option>
        <Option to="/#contact">
          <b>Contact</b>
        </Option>
      </Navigation>
    </Main>
  );
};

export default Navbar;
