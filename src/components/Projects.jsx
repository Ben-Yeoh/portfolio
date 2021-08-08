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
  color: ${(props) => props.theme.tertiary};
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
`;

const Project = styled.div`
  display: flex;
  width: 80%;
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
        <div>
          <Subtitle>keylogger.app</Subtitle>
          <Card>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              faucibus bibendum ante eget sodales. Sed volutpat justo sit amet
              imperdiet condimentum. Sed volutpat justo sit amet imperdiet
              condimentum.
              <hr />
              <ul>
                <li>React.js</li>
                <li>Gatsby</li>
                <li>Firebase</li>
              </ul>
            </Description>
          </Card>
        </div>
        <Display onMouseEnter={MouseEnter} onMouseLeave={MouseOut}>
          {visible ? (
            <>
              <Image
                style={{ filter: "blur(3px)" }}
                src={Keylogger}
                alt="keylogger.app screenshot"
              />
              <Overlay>
                <a href="https://www.keylogger.app/">www.keylogger.app</a>
              </Overlay>
            </>
          ) : (
            <Image src={Keylogger} alt="keylogger.app screenshot" />
          )}
        </Display>
      </Project>
    </Main>
  );
};

export default Projects;
