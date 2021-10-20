import React from "react";

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
