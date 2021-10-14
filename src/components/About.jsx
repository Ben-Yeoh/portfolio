import React from "react";
import styled from "styled-components";
import headshot from "../assets/Headshot.png";

const Title = styled.h1`
  color: ${(props) => props.theme.primary};
  font-weight: 600;
  font-size: 2.5em;
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

const Bold = styled.b`
  color: ${(props) => props.theme.content};
`;

const Frame = styled.div`

`;

const Image = styled.img`
  width: 15vw;
  // filter: grayscale(100%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const AboutSection = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;
`;

const Box = styled.div`
  background-color: ${(props) => props.theme.content};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 5% 20px;
  -webkit-transform: skewY(-5deg);
  -moz-transform: skewY(-5deg);
  -ms-transform: skewY(-5deg);
  -o-transform: skewY(-5deg);
  transform: skewY(-5deg);
  margin-left: 2vw;
`;

const Wrapper = styled.div`
  -webkit-transform: skewY(5deg);
  -moz-transform: skewY(5deg);
  -ms-transform: skewY(5deg);
  -o-transform: skewY(5deg);
  transform: skewY(5deg);
`;

const About = () => {
  return (
    <div id="about">
      <AboutSection>
        <Main>
          <Title>About Me</Title>
          <Description>
          Hello! My name's Ben. I'm an avid software developer who enjoys challenging myself with new ways to improve my craft.
          I strive to connect with clients, teammates and colleagues to create a collaborative environment, allowing me to produce well rounded products and experiences.
          </Description>
          <Description>
          Specialising in <Bold>web development</Bold> and <Bold>user experience</Bold>, I am constantly learning to create bigger, bolder, customer focused products.
          </Description>
          <Description>
          So far I've been able to do this through <a href="/#projects"><Bold>keylogger.app</Bold></a>, enabling users of all types to better access scripting learning resources and take preventative cyber security measures against keylogging.
          </Description>
          <Description>
          Currently I'm working on a <Bold>Multimedia Ranking app</Bold>, where I have been tinkering with GraphQL, Node.js and Express.
          </Description>
        </Main>
        <Frame>
          <Box>
            <Wrapper>
              <Image src={headshot} alt="Headshot photo" />
            </Wrapper>
          </Box>
        </Frame>
      </AboutSection>
    </div>
  );
};

export default About;
