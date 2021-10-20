import React from "react";
import styled from "styled-components";

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

const Heading = styled.div`
  background-color: rgba(33, 19, 43, 0.5);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 15px;
  border-radius: 3px;
  padding: 20px;
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

const Job = ({ subtitle, company, time, descriptions }) => {
  return (
    <Job>
      <Heading>
        <Subtitle>{subtitle}</Subtitle>
        <CompanyTitle>{company}</CompanyTitle> <Time>{time}</Time>
      </Heading>
      <Description>
        <List>
            {descriptions.map(d => <ListItem>{d}</ListItem>)}
        </List>
      </Description>
    </Job>
  );
};

export default Job;
