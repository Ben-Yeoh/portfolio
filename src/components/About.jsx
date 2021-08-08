import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.secondary};
`;

const Description = styled.p`
  color: ${(props) => props.theme.secondary};
  width: 80%;
  font-size: 1.2em;
`;

const Main = styled.div`
  padding: 3%;
  width: 50%;
  background-color: ${(props) => props.theme.highlight};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 3px;
  margin-left: 100px;
`;

const About = () => {
  return (
    <Main>
      <span id="about" />
      <Title>About Me</Title>
      <Description>
      Hello! My name's Ben. I'm an avid software developer who enjoys challenging myself with new ways to improve.
      I strive to connect with clients, teammates and colleagues to create a collaborative environment, allowing me to produce well rounded products and experiences.
      </Description>
      <Description>
      Specialising in <b>web development</b> and <b>user experience</b>, I am constantly learning to create bigger, bolder, customer focused products. So far I've been able to do this through <b>keylogger.app</b>, enabling users of all types to better access scripting learning resources and take preventative cyber security measures against keylogging.
      </Description>
      <Description>
      Currently I'm working on a <b>Multimedia Ranking app</b>, where I have been twinkering with GraphQL, Node.js and Express.
      </Description>
    </Main>
  );
};

export default About;
