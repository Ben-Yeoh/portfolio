import React from "react";
import styled from "styled-components";
import Keylogger from "../assets/keylogger.png";
import Portfolio from "../assets/Portfolio.png";
import ProjectCard from "./ProjectCard";

const Title = styled.h1`
  color: ${(props) => props.theme.highlight};
  font-size: 3em;
  font-weight: 700;
`;

const Main = styled.div`
  padding-top: 5vh;
  padding-left: 10%;
  background-color: ${(props) => props.theme.content};
  margin-bottom: 80px;
`;

const projects = [
  {
    url: "https://www.keylogger.app/",
    shortUrl: "www.keylogger.app",
    title: "keylogger.app ⌨️",
    desc: "A source of knowledge covering the world of keylogging exploits and the countermeasures you can take.",
    aside: "Learn to also design your very own keylogging scripts with in an indepth step-by-step guide.",
    techUsed: "React.js, Gatsby, Firebase, Netlify",
    image: Keylogger,
    imageDesc: "keylogger.app screenshot",
  },
  {
    url: "https://www.yeoh.io/",
    shortUrl: "www.yeoh.io",
    title: "Portfolio 👋",
    desc: "I also happened to develop this very website!",
    aside: "I hope you enjoy your time here ❤️",
    techUsed: "React.js, Netlify",
    image: Portfolio,
    imageDesc: "yeoh.io screenshot",
  }
];

const Projects = () => {
  return (
    <div id="projects">
      <Main>
        <Title>My Projects</Title>
        { projects.map(p => <ProjectCard {...p} /> ) }
      </Main>
    </div>
  );
};

export default Projects;
