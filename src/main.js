import React, { Component } from 'react';
import Projects from './projects';
import LandingPage from './landingpage';
import Jumbotron from './jumbotron';
import Skills from './skills';
// import ReadyToScroll from './ReadyToScroll';
// import { Link } from 'react-router-dom';

export default class Main extends Component {
  render() {
    
    return (
      <div className="main">

        <div className="longBackgroundContainer"/>

        <LandingPage />

        <Jumbotron />

        <Skills />

        <Projects />

      </div>
    )
  }
}