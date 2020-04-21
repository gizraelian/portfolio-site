import React, { Component } from 'react';
import Projects from './projects';
import Jumbotron from './jumbotron';
import Skills from './skills';
import { Link } from "react-scroll";
import './css/main.css';

// import ReadyToScroll from './ReadyToScroll';
// import { Link } from 'react-router-dom';

export default class Main extends Component {
  render() {
    
    return (
      <div className="main">

        <div className="longBackgroundContainer"/>

        <div className="main__splashBox" id="landingPage">

        <Link
            className="main__goUp"
            to="landingPage"
            spy={true}
            smooth={true}
            offset={0}
            duration= {1500} >
            {/* <img src="../assets/arrows-grey.png" className="main__goUp--img" alt='myImg' /> */}
            <img src="../assets/arrow-down-empty-circle_LightBlue_500x500.png" className="main__goUp--imgBlue" alt='myImg' />
            <img src="../assets/arrow-down-empty-circle_White_500x500.png" className="main__goUp--imgWhite" alt='myImg' />
            
             
        </Link>

    <div className="main__splashBox--background"></div>

    <div className="main__splashBox--container">
        <h1 className="main__splashBox--container__header">George Izraelian</h1>
        <h1 className="main__splashBox--container__subHeader">Web Developer</h1>
        <Link
            className="main__splashBox--container__scrollToProjects"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration= {1500} >
            {/* <img src="../assets/arrows-left_500x500.png" className="main__splashBox--container__scrollDown--img" alt='myImg' /> */}
            <div className="main__splashBox--container__scrollDown--toProjects">PROJECTS</div>
        </Link>
    </div>

</div>

        <Jumbotron />

        <Skills />

        <Projects />

      </div>
    )
  }
}