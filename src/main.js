import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class main extends Component {
  render() {
    return (
      <div className="main">

        <div className="main__demoBox">
          <h1 className="main__demoBox--header">George Izraelian</h1>
          <h1 className="main__demoBox--subHeader">Web Developer</h1>
          <img src="../assets/photo-of-cn-tower-during-golden-hour-2773226.jpg" className="main__demoBox--background"  alt='myImg'/>
        </div>

{/* Jumbotron Section */}
        <div className="main__demoBox">
          <div className="main__demoBox--jumbotron">
            <h1 className="main__demoBox--jumbotron__containerOne">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </h1>
            <h3 className="main__demoBox--jumbotron__containerTwo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit. Habitant morbi tristique senectus et. At auctor urna nunc id cursus metus aliquam eleifend. Et molestie ac feugiat sed lectus vestibulum. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.  
            </h3>
          </div>
        </div>

{/* Skills section */}
        <div className="main__demoBox">
          {/* <img src="../assets/photo-of-seaside-during-daytime-3511543.jpg" className="main__demoBox--background"  alt='myImg'/> */}
          <div className="main__demoBox--skillsBox">

            <div className="main__demoBox--skillsBox__card">
              <img src="../assets/react.png" className="main__demoBox--skillsBox__card--img" />
              <h2 className="main__demoBox--skillsBox__card--header">
                React
              </h2>
            </div>

            <div className="main__demoBox--skillsBox__card">
              <img src="../assets/react.png" className="main__demoBox--skillsBox__card--img" />
              <h2 className="main__demoBox--skillsBox__card--header">
                JavaScript
              </h2>
            </div>

            <div className="main__demoBox--skillsBox__card">
              <img src="../assets/react.png" className="main__demoBox--skillsBox__card--img" />
              <h2 className="main__demoBox--skillsBox__card--header">
                HTML5
              </h2>
            </div>

            <div className="main__demoBox--skillsBox__card">
              <img src="../assets/react.png" className="main__demoBox--skillsBox__card--img" />
              <h2 className="main__demoBox--skillsBox__card--header">
                CSS3 | SASS
              </h2>
            </div>

            <div className="main__demoBox--skillsBox__card">
              <img src="../assets/react.png" className="main__demoBox--skillsBox__card--img" />
              <h2 className="main__demoBox--skillsBox__card--header">
                NodeJS
              </h2>
            </div>

          </div>
       </div>

{/* React, JS, HTML5, CSS, node.js */}

{/* Project portfolio section */}
        <div className="main__demoBox">
          <img src="../assets/body-of-water-2276928.jpg" className="main__demoBox--background"  alt='myImg'/>
        </div>
      </div>
    )
  }
}

//Motivated To Produce Results
//As a tenacious self-taught programmer, I use continuous iteration to produce results quickly and continuously improve products.

//AN AGILE COLLABORATOR
//I have contributed to open source projects, worked on engineering teams, and always stay attuned to the newest frameworks.