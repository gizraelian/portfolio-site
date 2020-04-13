import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class main extends Component {
  render() {
    return (

      <div className="main">

        <div className="main__splashBox" >
          <div className="main__splashBox--background">
            {/* <div className="main__splashBox--background__filter" /> */}
          </div>
          <div className="main__splashBox--container">
            <h1 className="main__splashBox--container__header">George Izraelian</h1>
            <h1 className="main__splashBox--container__subHeader">Web Developer</h1>
          </div>
        </div>

{/* Jumbotron Section */}
        <div className="main__jumbotron">
          <div className="main__jumbotron--leftBox">
            <h1 className="main__jumbotron--leftBox__textContainer">
              Motivated front-end focused web-developer, with full stack experience.
            </h1>
            <h1 className="main__jumbotron--leftBox__textContainer">
              Delivering superior results through challenging projects.
            </h1>
          </div>
          <div className="main__jumbotron--rightBox">
            <img src="../assets/javascript.png" className="main__jumbotron--rightBox__img" />
            <img src="../assets/nodejs.png" className="main__jumbotron--rightBox__img" />
            <img src="../assets/react.png" className="main__jumbotron--rightBox__img" />

            {/* <h2 className="main__jumbotron--rightBox__textContainer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit. Habitant morbi tristique senectus et.
            </h2>
            <h2 className="main__jumbotron--rightBox__textContainer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit. Habitant morbi tristique senectus et.
            </h2> */}
          </div>
        </div>

{/* Skills section */}
        <div className="main__skillsBox">



          <div className="main__skillsBox--card">
            <img src="../assets/html5.png" 
             className="main__skillsBox--card__img"/>
            <h2 className="main__skillsBox--card__header">HTML5</h2>
          </div>

          <div className="main__skillsBox--card">
            <img src="../assets/css3.svg" 
             className="main__skillsBox--card__img"/>
            <h2 className="main__skillsBox--card__header">CSS3 | SASS</h2>
          </div>

          <div className="main__skillsBox--card">
            <img src="../assets/javascript.png" 
             className="main__skillsBox--card__img"/>
            <h2 className="main__skillsBox--card__header">JavaScript</h2>
          </div>

          <div className="main__skillsBox--card">
            <img src="../assets/react.svg" 
             className="main__skillsBox--card__img"/>
            <h2 className="main__skillsBox--card__header">React</h2>
          </div>

          <div className="main__skillsBox--card">
            <img src="../assets/node.png" 
             className="main__skillsBox--card__img"/>
            <h2 className="main__skillsBox--card__header">NodeJS</h2>
          </div>

        </div>

{/* Project portfolio section */}
        <div className="main__projectsBox">

          <div className="main__projectsBox--card">
            <img src="../assets/placeholder2.jpg" className="main__projectsBox--card__img"/>
            <div className="main__projectsBox--card__textBox">
              <h2 className="main__projectsBox--card__textBox--header">Portfolio site</h2>
              <a className="main__projectsBox--card__textBox--link"
              target="_blank" href="https://github.com/gizraelian/portfolio-site">Source Code</a>
            </div>
          </div>

          <div className="main__projectsBox--card">
            <img src="../assets/band.gif" className="main__projectsBox--card__img"/>
            <div className="main__projectsBox--card__textBox">
              <h2 className="main__projectsBox--card__textBox--header">Bandpage</h2>
              <a className="main__projectsBox--card__textBox--link"
              target="_blank" href="https://github.com/gizraelian/bandpage">Source Code</a>
            </div>
          </div>

          <div className="main__projectsBox--card">
            <img src="../assets/fast.gif" className="main__projectsBox--card__img"/>
            <div className="main__projectsBox--card__textBox">
              <h2 className="main__projectsBox--card__textBox--header">BrainFlix</h2>
              <a className="main__projectsBox--card__textBox--link"
              target="_blank" href="https://github.com/gizraelian/brainflix">Source Code</a>
            </div>
          </div>

          <div className="main__projectsBox--card">
            <img src="../assets/placeholder2.jpg" className="main__projectsBox--card__img"/>
            <div className="main__projectsBox--card__textBox">
              <h2 className="main__projectsBox--card__textBox--header">Placeholder</h2>
              <a className="main__projectsBox--card__textBox--link"
              target="_blank" href="">Source Code</a>
            </div>
          </div>

        </div>
      </div>
    )
  }
}