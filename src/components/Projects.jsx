import React from "react";
import styled from "styled-components";
import Keylogger from "../assets/keylogger.png";

const Title = styled.h1`
  color: ${(props) => props.theme.secondary};
`;

const Subtitle = styled.h2`
  color: ${(props) => props.theme.body};
  font-weight: 600;
  font-size: 1.7em;
`;

const Description = styled.p`
  color: ${(props) => props.theme.secondary};
  width: 80%;
  font-size: 1.2em;
`;

const Card = styled.div`
  padding: 1%;
  padding-left: 3%;
  width: 50%;
  background-color: ${(props) => props.theme.highlight};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 3px;
`;

const Image = styled.img`
  height: 100%;
  height: 450px;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2em;
`;

const Display = styled.div`
  position: relative;
  text-align: center;
  color: black;
  height: 100%;
`;

const Main = styled.div`
  padding-left: 10%;
  background-color: ${(props) => props.theme.content};
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
`;

const HR = styled.hr`
  border: 0;
  height: 1px;
  margin-top: 25px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
`;

const TechUsed = styled.p`

`;

const Info = styled.div`
  display: flex;
`;

const Projects = () => {
  const [visible, setVisible] = React.useState(false);
  const MouseEnter = () => setVisible(true);
  const MouseOut = () => setVisible(false);

  return (
    <Main>
      <span id="projects" />
      <Title>My Projects</Title>
      <Project>
        <Subtitle>keylogger.app</Subtitle>
        <Info>
          <Card>
            <Description>
              A source of knowledge covering the world of keylogging exploits and the countermeasures you can take. Learn to also design your very own keylogging scripts with in an indepth step-by-step guide.
              <HR />
                <TechUsed>
                  React.js, Gatsby, Firebase
                </TechUsed>
            </Description>
          </Card>
          <a href="https://www.keylogger.app/">
            <Display onMouseEnter={MouseEnter} onMouseLeave={MouseOut}>
            {visible ? (
              <>
                <Image
                  style={{ filter: "blur(5px)" }}
                  src={Keylogger}
                  alt="keylogger.app screenshot"
                />
                <Overlay>
                  <a href="https://www.keylogger.app/"><i>www.keylogger.app</i></a>
                </Overlay>
              </>
            ) : (
              <Image src={Keylogger} alt="keylogger.app screenshot" />
            )}
            </Display>
          </a>
        </Info>
      </Project>
    </Main>
  );
};

export default Projects;
