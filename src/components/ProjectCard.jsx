import React from "react";
import styled from "styled-components";

const Subtitle = styled.h2`
  color: ${(props) => props.theme.primary};
  font-weight: 600;
  font-size: 2em;
`;

const Description = styled.p`
  color: ${(props) => props.theme.secondary};
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
  height: 450px;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: filter 0.3s;
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

const Project = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
`;

const HR = styled.hr`
  border: 0;
  height: 1px;
  margin-top: 25px;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.75),
    rgba(255, 255, 255, 0)
  );
`;

const TechUsed = styled.p`
  font-family: Consolas;
  font-size: 0.9em;
`;

const Info = styled.div`
  display: flex;
  margin: 2%;
`;

const Link = styled.a`
  font-size: 0.8em;
  color: ${(props) => props.theme.secondary};
  font-family: Consolas;
`;

const ProjectCard = ({
  url,
  shortUrl,
  title,
  desc,
  aside,
  techUsed,
  image,
  imageDesc,
}) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <Project>
      <Info>
        <Card>
          <Subtitle>{title}</Subtitle>
          <Description>
            <p>{desc}</p>
            <p>{aside}</p>
            <HR />
            <TechUsed>» {techUsed}</TechUsed>
          </Description>
        </Card>
        <a href={url}>
          <Display
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
            {visible ? (
              <>
                <Image
                  style={{ filter: "blur(2px)" }}
                  src={image}
                  alt={imageDesc}
                />
                <Overlay>
                  <Link href={url}>{shortUrl}</Link>
                </Overlay>
              </>
            ) : (
              <Image src={image} alt={imageDesc} />
            )}
          </Display>
        </a>
      </Info>
    </Project>
  );
};

export default ProjectCard;
