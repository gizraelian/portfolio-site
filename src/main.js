import React, { Component } from 'react';
import Projects from './Projects';
import LandingPage from './LandingPage';
import Jumbotron from './Jumbotron';
import Skills from './Skills';
import { Link } from 'react-router-dom';

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <LandingPage />
        <Jumbotron />
        <Skills />
        <Projects />
      </div>
    )
  }
}