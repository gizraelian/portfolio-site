import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class main extends Component {
  render() {
    return (
      <div className="main">

        <div className="main__splashBox" >
          <div className="main__splashBox--background" />
          <h1 className="main__splashBox--header">George Izraelian</h1>
          <h1 className="main__splashBox--subHeader">Web Developer</h1>
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
            <h2 className="main__jumbotron--rightBox__textContainer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit. Habitant morbi tristique senectus et.
            </h2>
            <h2 className="main__jumbotron--rightBox__textContainer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit. Habitant morbi tristique senectus et.
            </h2>
          </div>
        </div>

{/* Skills section */}
        <div className="main__skillsBox">

          <div className="main__skillsBox--card">
            <img src="../assets/react.png" 
             className="main__skillsBox--card__img"/>
            <h1 className="main__skillsBox--card__header">React</h1>
          </div>

          <div className="main__skillsBox--card">
            <img src="../assets/react.png" 
             className="main__skillsBox--card__img"/>
            <h1 className="main__skillsBox--card__header">JavaScript</h1>
          </div>

          <div className="main__skillsBox--card">
            <img src="../assets/react.png" 
             className="main__skillsBox--card__img"/>
            <h1 className="main__skillsBox--card__header">HTML5</h1>
          </div>

          <div className="main__skillsBox--card">
            <img src="../assets/react.png" 
             className="main__skillsBox--card__img"/>
            <h2 className="main__skillsBox--card__header">CSS3 | SASS</h2>
          </div>

          <div className="main__skillsBox--card">
            <img src="../assets/react.png" 
             className="main__skillsBox--card__img"/>
            <h1 className="main__skillsBox--card__header">NodeJS</h1>
          </div>

        </div>

{/* Project portfolio section */}
        <div className="main__projectsBox">

        </div>
      </div>
    )
  }
}