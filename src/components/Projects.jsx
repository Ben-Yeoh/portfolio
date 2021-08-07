import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.secondary};
`;

const Description = styled.p`
  color: ${(props) => props.theme.tertiary};
  width: 80%;
  font-size: 1.2em;
`;

const Main = styled.div`
  width: 50%;
  padding-left: 10%;
`;

const Projects = () => {
  return (
    <Main>
      <span id="projects" />
      <Title>My Projects</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus
        bibendum ante eget sodales. Sed volutpat justo sit amet imperdiet
        condimentum. Duis sed mauris eu diam tincidunt cursus. Duis id euismod
        libero, quis imperdiet sapien. Vivamus lobortis dapibus maximus. Sed
        tristique tellus et semper malesuada. Praesent quis odio eu diam viverra
        tempor. Aliquam vitae justo dignissim, vehicula justo eu, molestie
        libero. Aliquam sed odio ut orci ornare sollicitudin. In bibendum risus
        in mauris semper, a cursus purus tristique. Donec consectetur, nisi
        vitae placerat iaculis, justo libero efficitur erat, at ultrices justo
        purus eget purus. Vivamus congue rutrum feugiat. Nulla facilisi. Nunc
        porttitor justo nec tellus posuere, vel tincidunt mauris ultricies.
        Morbi nec tortor nec tortor volutpat rhoncus. Phasellus id purus in orci
        tempus ornare et sed magna.
      </Description>
    </Main>
  );
};

export default Projects;
