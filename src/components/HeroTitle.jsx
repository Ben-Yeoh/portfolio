import React from "react";
import styled from "styled-components";
import "../styles/buttons.scss";

const Title = styled.h1`
  color: ${props => props.theme.primary};
  font-size: 5em;
  margin: 0;
`;

const Subtitle = styled.h2`
  color: ${props => props.theme.secondary};
  font-size: 3em;
  margin: 0;
  margin-bottom: 2%;
`;

const Aside = styled.p`
  color: ${props => props.theme.tertiary};
  margin: 0;
  font-size: 1.2em;
  width: 50%;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  padding-top: 20vh;
`;

const HeroTitle = () => {
  const mailTo = (e) => {
    window.location = "mailto:ben.yeoh@outlook.com";
    e.preventDefault();
  };

  return (
    <>
      <Main>
        <div>
          <Title>Ben Yeoh</Title>
          <Subtitle>Software Developer</Subtitle>
          <Aside>Hi there! I'm an aspiring software engineer who's passionate about learning all things innovative. capable of making a tangible difference.</Aside>
          <button onClick={(e) => mailTo(e)} class="buttons offset" style={{marginTop: "60px"}}>Drop a Line</button>
        </div>
      </Main>
    </>
  );
};

export default HeroTitle;
