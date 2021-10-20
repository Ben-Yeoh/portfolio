import React from "react";
import styled from "styled-components";
import Job from "./Job";
import PDF from "../assets/BenYeoh.pdf";

const Title = styled.h1`
  color: white;
  font-size: 3em;
  font-weight: 600;
`;

const Main = styled.div`
  width: 75vw;
  background: ${(props) => props.theme.accent};
`;

const Jobs = styled.div`
  display: flex;
  justify-content: space-between;
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

const jobs = [
  {
    subtitle: "Consultant Intern",
    company: "HSBC",
    time: "(2021 Feb - May)",
    descriptions: [
      "Collaborated with 6 consultants, aiming to improve intergenerational cohesion within the firm",
      "Innovated multiple operational plans addressing team communication",
      "Developed a successful team communication plan to be implemented within the Asia-Pacific region in 2022",
    ]
  },
  {
    subtitle: "Private Tutor",
    company: "Self-employed",
    time: "(2019 - Present)",
    descriptions: [
      "Instructed 15 HSC students in Software Design & Development, Mathematics and Physics.",
      "Independently managed personal and teaching schedules",
      "Developed individualised learning and development plans",
    ]
  }
];

const Experience = () => {
  return (
    <div id="experience">
      <Background>
        <Box style={{ marginTop: "10vh" }}>
          <Wrapper>
            <Main>
              <Title>Experience</Title>
              <Jobs>
                {jobs.map(job => <Job {...job} />)}
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
