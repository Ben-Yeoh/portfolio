import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

const Option = styled(Link)`
  color: ${props => props.theme.primary};
`;

const Navigation = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-between;
`;

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  padding-top: 50px;
  padding-right: 100px;
`;

const Navbar = () => {
  return (
    <Main>
      <Navigation>
        <Option to="/#about">About</Option>
        <Option to="/#projects">Projects</Option>
        <Option to="/#experience">Experience</Option>
        <Option to="/#contact">Contact</Option>
      </Navigation>
    </Main>
  );
};

export default Navbar;
