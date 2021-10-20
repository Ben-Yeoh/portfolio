import React from "react";
import styled from "styled-components";
import PDF from "../assets/BenYeoh.pdf";

const Title = styled.h1`
  color: white;
  font-size: 3em;
  font-weight: 600;
`;

const Subtitle = styled.h2`
  color: ${(props) => props.theme.primary};
  font-size: 1.8em;
  weight: 500;
  margin: 0;
`;

const CompanyTitle = styled.span`
  color: ${(props) => props.theme.secondary};
  font-size: 1.3em;
  font-weight: 500;
  margin: 0;
`;

const Time = styled.span`
  color: ${(props) => props.theme.secondary};
  font-size: 1.3em;
  margin: 0;
  padding-left: 6px;
`;

const Description = styled.p`
  color: ${(props) => props.theme.secondary};
  font-size: 1.2em;
  padding-left: 15px;
  padding-bottom: 10px;
`;

const Main = styled.div`
  width: 75vw;
  background: ${(props) => props.theme.accent};
`;

const Heading = styled.div`
  background-color: rgba(33, 19, 43, 0.5);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 15px;
  border-radius: 3px;
  padding: 20px;
`;

const Job = styled.div`
  width: 40%;
  background-color: rgba(33, 19, 43, 0.4);
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-bottom: 7vh;
`;

const Jobs = styled.div`
  display: flex;
  justify-content: space-between;
`;

const List = styled.ul`
  position: relative;
  list-style: none;
  margin-left: 0;
  padding-left: 1.2em;
`;

const ListItem = styled.li`
  &:before {
    content: "»";
    position: absolute;
    left: 0;
  }
  margin-bottom: 10px;
`;

const Box = styled.div`
  background-color: ${(props) => props.theme.highlight};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 5% 20px;
  -webkit-transform: skewY(-5deg);
  -moz-transform: skewY(-5deg);
  -ms-transform: skewY(-5deg);
  -o-transform: skewY(-5deg);
  transform: skewY(-5deg);
`;

const Wrapper = styled.div`
  -webkit-transform: skewY(5deg);
  -moz-transform: skewY(5deg);
  -ms-transform: skewY(5deg);
  -o-transform: skewY(5deg);
  transform: skewY(5deg);
  display: flex;
  justify-content: center;
`;

const Background = styled.div`
  background-color: ${(props) => props.theme.content};
`;

const Resume = styled.div`
  display: flex;
  justify-content: center;
`;

const Experience = () => {
  return (
    <div id="experience">
      <Background>
        <Box style={{ marginTop: "10vh" }}>
          <Wrapper>
            <Main>
              <Title>Experience</Title>
              <Jobs>
                <Job>
                  <Heading>
                    <Subtitle>Operations/HR Consultant Intern</Subtitle>
                    <CompanyTitle>HSBC</CompanyTitle>{" "}
                    <Time>(2021 Feb - May)</Time>
                  </Heading>
                  <Description>
                    <List>
                      <ListItem>
                        Collaborated with 6 consultants, aiming to improve
                        intergenerational cohesion within the firm
                      </ListItem>
                      <ListItem>
                        Innovated multiple operational plans addressing team
                        communication
                      </ListItem>
                      <ListItem>
                        Developed a successful team communication plan to be
                        implemented within the Asia-Pacific region in 2022
                      </ListItem>
                    </List>
                  </Description>
                </Job>
                <Job>
                  <Heading>
                    <Subtitle>Private Tutor</Subtitle>
                    <CompanyTitle>Self-employed</CompanyTitle>{" "}
                    <Time>(2019 - Present)</Time>
                  </Heading>
                  <Description>
                    <List>
                      <ListItem>
                        Instructed 15 HSC students in Software Design &
                        Development, Mathematics and Physics.
                      </ListItem>
                      <ListItem>
                        Independently managed personal and teaching schedules
                      </ListItem>
                      <ListItem>
                        Developed individualised learning and development plans
                      </ListItem>
                    </List>
                  </Description>
                </Job>
              </Jobs>
              <Resume>
                <a href={PDF} target="_blank">
                  <button
                    className="buttons offset"
                    style={{ cursor: "pointer" }}
                  >
                    <b>Get Resume</b>
                  </button>
                </a>
              </Resume>
            </Main>
          </Wrapper>
        </Box>
        <Box
          style={{
            backgroundColor: "#F28D8D",
            width: "35vw",
            padding: "2.5% 20px",
          }}
        >
          <Wrapper></Wrapper>
        </Box>
        <Box
          style={{
            backgroundColor: "#e6c5ff",
            width: "25vw",
            padding: "2% 20px",
          }}
        >
          <Wrapper></Wrapper>
        </Box>
      </Background>
    </div>
  );
};

export default Experience;
