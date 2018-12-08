import React from "react";

import styled from "styled-components";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const Description = styled.em`
  margin-top: 50px;
`;

const Project = props => {
  return (
    <ProjectContainer>
      <strong>{props.name}</strong>
      <Description>{props.description}</Description>
    </ProjectContainer>
  );
};

export default Project;
