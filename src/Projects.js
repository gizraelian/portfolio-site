import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Projects extends React.Component {

  render() {
    return (

// Project portfolio section

<div className="main__projectsBox" id="projects">

    <div className="main__projectsBox--card">
        <img className="main__projectsBox--card__img" id="bandDemo" />
        <div className="main__projectsBox--card__textBox">
            <h2 className="main__projectsBox--card__textBox--header">Bandpage</h2>
            <a className="main__projectsBox--card__textBox--link"
            target="_blank" href="https://github.com/gizraelian/bandpage">Source Code</a>
        </div>
    </div>

    <div className="main__projectsBox--card">
        <img className="main__projectsBox--card__img" id="brainFlixDemo" />
        <div className="main__projectsBox--card__textBox">
            <h2 className="main__projectsBox--card__textBox--header">BrainFlix</h2>
            <a className="main__projectsBox--card__textBox--link"
            target="_blank" href="https://github.com/gizraelian/brainflix">Source Code</a>
        </div>
    </div>

    <div className="main__projectsBox--card">
        {/* <img src="../assets/placeholder2.jpg" className="main__projectsBox--card__img"/> */}
        <img className="main__projectsBox--card__img" id="portfolioDemo" />
        <div className="main__projectsBox--card__textBox">
            <h2 className="main__projectsBox--card__textBox--header">Portfolio site</h2>
            <a className="main__projectsBox--card__textBox--link"
            target="_blank" href="https://github.com/gizraelian/portfolio-site">Source Code</a>
        </div>
    </div>

    {/* <div className="main__projectsBox--card">
        <img className="main__projectsBox--card__img" id="placeholderDemo" />
        <div className="main__projectsBox--card__textBox">
            <h2 className="main__projectsBox--card__textBox--header">Placeholder</h2>
            <a className="main__projectsBox--card__textBox--link"
            target="_blank" href="">Source Code</a>
        </div>
    </div> */}

</div>

    )
  }
}
