import React, { Component } from 'react';
import { Link } from "react-scroll";

export default class LandingPage extends React.Component {

  render() {
    return (

<div className="main__splashBox" id="landingPage">

        <Link
            className="main__goUp"
            to="landingPage"
            spy={true}
            smooth={true}
            offset={0}
            duration= {800} >
            <img src="../assets/arrows-left_500x500.png" className="main__goUp--img"/>
        </Link>

    <div className="main__splashBox--background">
          {/* <div className="main__splashBox--background__filter" /> */}
    </div>

    <div className="main__splashBox--container">
        <h1 className="main__splashBox--container__header">George Izraelian</h1>
        <h1 className="main__splashBox--container__subHeader">Web Developer</h1>
        <Link
            className="main__splashBox--container__scrollToProjects"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration= {800} >
            <img src="../assets/arrows-left_500x500.png" className="main__splashBox--container__scrollDown--img"/>
        </Link>
    </div>

</div>

    )
  }
}