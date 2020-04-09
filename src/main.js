import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class main extends Component {
  render() {
    return (
      <div className="main">


        <div className="main__demoBox">
          <div className="main__demoBox--splashBox">
            <h1 className="main__demoBox--splashBox__header">George Izraelian</h1>
            <img src="../assets/body-of-water-2276928.jpg"
                  className="main__demoBox--splashBox__img"
                  alt='myImg'/>
          </div>
        </div>

        <div className="main__demoBox">
          <div className="main__demoBox--jumbotron">
Jumbotron
          </div>
        </div>

        <div className="main__demoBox">
          <div  className="main__demoBox--skills">
Skills
          </div>
        </div>

        <div className="main__demoBox">
          <div className="main__demoBox--projects">
Projects
          </div>
        </div>


      </div>
    )
  }
}
