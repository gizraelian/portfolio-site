// import React, { Component } from 'react'
import React from 'react';
import { Link } from 'react-router-dom';
import './css/projects.css';

export default class Projects extends React.Component {

  render() {
    return (

// Project portfolio section

<div className="main__projectsBox" id="projects">

    <div className="main__projectsBox--card">
        <div className="main__projectsBox--card__img" id="bandDemo"/>
        <div className="main__projectsBox--card__textBox">
            <Link to={'/bandpage'} className="main__projectsBox--card__textBox--header">Bandpage</Link>
            <a className="main__projectsBox--card__textBox--link"
            target="_blank" href="https://github.com/gizraelian/bandpage">Source Code</a>
            <h3 className="main__projectsBox--card__textBox--subHeader">JS/HTML5/CSS</h3>
        </div>
    </div>

    <div className="main__projectsBox--card">
        <div className="main__projectsBox--card__img" id="brainFlixDemo"/>
        <div className="main__projectsBox--card__textBox">
            <Link to={'/brainflix'} className="main__projectsBox--card__textBox--header">BrainFlix</Link>
            <a className="main__projectsBox--card__textBox--link"
            target="_blank" href="https://github.com/gizraelian/brainflix">Source Code</a>
            <h3 className="main__projectsBox--card__textBox--subHeader">React/Node/Express</h3>
        </div>
    </div>

    <div className="main__projectsBox--card">
        {/* <img src="../assets/placeholder2.jpg" className="main__projectsBox--card__img"/> */}
        <div className="main__projectsBox--card__img" id="portfolioDemo"/>
        <div className="main__projectsBox--card__textBox">
            <Link to={'/portfolio'} className="main__projectsBox--card__textBox--header">Portfolio site</Link>
            <a className="main__projectsBox--card__textBox--link"
            target="_blank" href="https://github.com/gizraelian/portfolio-site">Source Code</a>
            <h3 className="main__projectsBox--card__textBox--subHeader">React/CSS</h3>
        </div>
    </div>

    <div to={'/ivg'} className="main__projectsBox--card">
        <div className="main__projectsBox--card__img" id="ivgDemo"/>
        <div className="main__projectsBox--card__textBox">
            <Link to={'/ivg'} className="main__projectsBox--card__textBox--header">IVG Fiber</Link>
            <h3 className="main__projectsBox--card__textBox--subHeader">React/CSS</h3>
            {/* <a className="main__projectsBox--card__textBox--link">Coming soon</a> */}
        </div>
    </div>

</div>

    )
  }
}
