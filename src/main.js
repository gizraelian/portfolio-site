import React, { Component } from 'react';
import Projects from './projects';
import Jumbotron from './jumbotron';
import Skills from './skills';
import { Link } from "react-scroll";
import './css/main.css';

// import { Link } from 'react-router-dom';

export default class Main extends Component {

  render() {
    // console.log(this.props.scrolled);
    return (
      <div className="main">
        
        {/* <div className="longBackgroundContainer"/> */}

        

        <div className="main__splashBox" id="landingPage">

        <Link
            className={this.props.scrolled ? 'main__goUp' : 'main__goUp scrolled'}
            to="landingPage"
            spy={true}
            smooth={true}
            offset={0}
            duration= {1500} >
            <img src="../assets/arrows-darkgrey.png" className="main__goUp--imgUp" alt='myImg' />
             
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

        <Projects />

        <Skills />

      </div>
    )
  }
}