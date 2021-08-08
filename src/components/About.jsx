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
      I am aspiring software engineer who is passionate about learning new innovative techniques capable of making a tangible difference.
      I strive to connect with clients, teammates and colleagues to create a collaborative environment, allowing me to produce well rounded products and experiences.
      </Description>
      <Description>
      Specialising in <b>web development and user experience</b>, I am constantly learning to create bigger, bolder, customer focused products. So far I've been able to do this through <b>keylogger.app</b>, enabling users of all types to better access scripting learning resources and take preventative cyber security measures against keylogging.
      </Description>
      <Description>
      Currently I'm working on a <b>Multimedia Ranking app</b>, and have been able to use GraphQL, Node.js and Express.
      </Description>
    </Main>
  );
};

export default About;
