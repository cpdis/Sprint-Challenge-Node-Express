import React, { Component } from "react";
import axios from "axios";
import { Route, withRouter } from "react-router-dom";

import styled from "styled-components";

import Nav from "./components/Nav";
import Projects from "./components/Projects";

const Container = styled.div`
  font-family: "IBM Plex Sans", sans-serif;
  background: royalblue;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      actions: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/api/project/")
      .then(res => {
        this.setState({ projects: res.data });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("http://localhost:3000/api/action/")
      .then(res => {
        this.setState({ actions: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addProject = newProject => {
    axios
      .post("http://localhost:3000/api/project", newProject)
      .then(res => {
        this.setState({ projects: res.data });
      })
      .catch(err => {
        console.log(err);
      });

    this.props.history.push("/");
  };

  deleteProject = id => {
    axios
      .delete(`http://localhost:3000/api/project/${id}`)
      .then(res => {
        this.setState({ projects: res.data });
      })
      .catch(err => {
        console.log(err);
      });

    this.props.history.push("/");
  };

  render() {
    return (
      <Container>
        <Nav />
        <Route
          exact
          path="/"
          render={props => (
            <Projects {...props} projects={this.state.projects} />
          )}
        />
      </Container>
    );
  }
}

export default withRouter(App);
