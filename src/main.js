import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class main extends Component {
  render() {
    return (
      <div className="main">

        <div className="main__splashBox" >
          <h1 className="main__splashBox--header">George Izraelian</h1>
          <h1 className="main__splashBox--subHeader">Web Developer</h1>
        </div>

{/* Jumbotron Section */}
        <div className="main__jumbotron">
          <h1 className="main__jumbotron--leftBox">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </h1>
          <h3 className="main__jumbotron--rightBox">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit. Habitant morbi tristique senectus et. At auctor urna nunc id cursus metus aliquam eleifend. Et molestie ac feugiat sed lectus vestibulum. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. 
          </h3>
        </div>

{/* Skills section */}
        <div className="main__skillsBox">

          <div className="main__skillsBox--card">
            <img src="../assets/react.png" 
             className="main__skillsBox--card__img"/>
            <h2 className="main__skillsBox--card__header">React</h2>
          </div>

          <div className="main__skillsBox--card">
            <img src="../assets/react.png" 
             className="main__skillsBox--card__img"/>
            <h2 className="main__skillsBox--card__header">JavaScript</h2>
          </div>

          <div className="main__skillsBox--card">
            <img src="../assets/react.png" 
             className="main__skillsBox--card__img"/>
            <h2 className="main__skillsBox--card__header">HTML5</h2>
          </div>

          <div className="main__skillsBox--card">
            <img src="../assets/react.png" 
             className="main__skillsBox--card__img"/>
            <h2 className="main__skillsBox--card__header">CSS3 | SASS</h2>
          </div>

          <div className="main__skillsBox--card">
            <img src="../assets/react.png" 
             className="main__skillsBox--card__img"/>
            <h2 className="main__skillsBox--card__header">NodeJS</h2>
          </div>

        </div>

{/* Project portfolio section */}
        <div className="main__projectsBox">

        </div>
      </div>
    )
  }
}