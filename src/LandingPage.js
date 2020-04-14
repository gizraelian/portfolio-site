import React, { Component } from 'react';
import { Link } from "react-scroll";

export default class LandingPage extends React.Component {

  render() {
    return (

<div className="main__splashBox" id="landingPage">

        <Link
            // activeClass="active"
            className="main__goUp"
            // to="projects"
            to="landingPage"
            spy={true}
            smooth={true}
            offset={-70}
            // offset={0}
            duration= {800} >TOP
            {/* <img src="../assets/arrow1.gif" className="main__splashBox--container__scrollToProjects--img"/> */}
        </Link>

    <div className="main__splashBox--background">
          {/* <div className="main__splashBox--background__filter" /> */}
    </div>

    <div className="main__splashBox--container">
        <h1 className="main__splashBox--container__header">George Izraelian</h1>
        <h1 className="main__splashBox--container__subHeader">Web Developer</h1>
        {/* <button className="main__splashBox--container__scrollToProjects">PROJECTS</button> */}
        <Link
            // activeClass="active"
            className="main__splashBox--container__scrollToProjects"
            // to="projects"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            // offset={0}
            duration= {800} >PROJECTS
            {/* <img src="../assets/arrow1.gif" className="main__splashBox--container__scrollToProjects--img"/> */}
        </Link>
    </div>

</div>

    )
  }
}