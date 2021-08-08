import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.secondary};
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
  font-size: 1.8em;
  font-weight: 500;
  margin: 0;
`;

const Time = styled.span`
  color: ${(props) => props.theme.secondary};
  font-size: 1.8em;
  margin: 0;
  padding-left: 6px;
`;

const Description = styled.p`
  color: ${(props) => props.theme.tertiary};
  width: 80%;
  font-size: 1.2em;
`;

const Main = styled.div`
  width: 50%;
  padding-left: 10%;
  background: ${(props) => props.theme.accent};
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
  margin-top: 50px;
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
`;

const Background = styled.div`
  background-color: ${(props) => props.theme.content};
`;

const Experience = () => {
  return (
    <Background>
      <Box>
        <Wrapper>
          <Main>
            <span id="experience" />
            <Title>Experience</Title>
            <div>
              <Subtitle>Operations/HR Consultant Intern</Subtitle>
              <CompanyTitle>HSBC</CompanyTitle> <Time>(2021 Feb - May)</Time>
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
              <Subtitle>Private Tutor</Subtitle>
              <CompanyTitle>Self-employed</CompanyTitle>{" "}
              <Time>(2019 - Present)</Time>
              <Description>
                <List>
                  <ListItem>
                    Instructed 15 HSC students in Software Design & Development,
                    Mathematics and Physics.
                  </ListItem>
                  <ListItem>
                    Independently managed personal and teaching schedules
                  </ListItem>
                  <ListItem>
                    Developed individualised learning and development plans
                  </ListItem>
                </List>
              </Description>
            </div>
          </Main>
        </Wrapper>
      </Box>
    </Background>
  );
};

export default Experience;
