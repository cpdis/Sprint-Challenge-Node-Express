import React, { Component } from "react";

import Project from "./Project";

import styled from "styled-components";

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const ProjectContainer = styled.div`
  flex: 0 1 20%;
  min-width: 300px;
  height: 300px;
  background-color: royalblue;
  border: 1px solid rgb(0, 0, 0, 0.12);
  border-radius: 0px;
  box-shadow: 5px 7px rgb(0, 0, 0, 0.12);
  cursor: pointer;
  margin: 10px;
  padding: 15px;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 20px;
  color: red;
  text-align: center;
`;

class Projects extends Component {
  render() {
    return (
      <div>
        <ProjectsContainer>
          {this.props.projects.map(project => {
            return (
              <ProjectContainer>
                <Project
                  name={project.name}
                  description={project.description}
                />
              </ProjectContainer>
            );
          })}
        </ProjectsContainer>
      </div>
    );
  }
}

export default Projects;
