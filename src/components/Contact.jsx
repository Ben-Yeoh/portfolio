import React from "react";
import styled from "styled-components";
import LinkedIn from "../assets/linkedin.png";
import GitHub from "../assets/github.png";

const Title = styled.h1`
  color: ${(props) => props.theme.highlight};
  font-size: 4em;
  font-weight: 700;
`;

const Icon = styled.img`
  height: 30px;
  margin: 10px;
`;

const Icons = styled.div`
  margin-top: 15px;
  display: flex;
`;

const Actions = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.content};
`;

const Contact = () => {
  return (
    <Main id="contact">
      <Actions>
        <Title>Contact Me</Title>
        <a href="mailto:ben.yeoh@outlook.com">
          <button className="buttons offset" style={{ cursor: "pointer" }}>
            <b>Get in Touch</b>
          </button>
        </a>
        <Icons>
          <a href="https://www.linkedin.com/in/ben-yeoh-7472a4190/">
            <Icon src={LinkedIn} alt="LinkedIn Logo" />
          </a>
          <a href="https://github.com/Ben-Yeoh/">
            <Icon src={GitHub} alt="GitHub Logo" />
          </a>
        </Icons>
      </Actions>
    </Main>
  );
};

export default Contact;
