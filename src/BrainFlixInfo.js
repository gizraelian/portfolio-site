import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class BrainFlixInfo extends Component {
  render() {
    return (

    <div className="projectInfo">

        <div className="projectInfo__linkBox">
          <Link to={'/brainflix'} className="projectInfo__linkBox--link">
              <img className="projectInfo__linkBox--link__img" id="brainFlixDemo" />
              <h2 className="projectInfo__linkBox--link__header">BrainFlix</h2>
          </Link>
        </div>

        <div className="projectInfo__textSection">
            <div className="projectInfo__textSection--row">
                <h3>About</h3>
                <p className="projectInfo__textSection--row__text">
                    A proof-of-concept YouTube clone, with videos served by NodeJS
                </p>
                <p className="projectInfo__textSection--row__text">
                    Built with React, CSS3, and NodeJS
                </p>
            </div>
            <div className="projectInfo__textSection--imgBox">

                <img src="../assets/react.svg" className="projectInfo__textSection--imgBox__img"/>

                <img src="../assets/node.png" className="projectInfo__textSection--imgBox__img"/>

                <img src="../assets/css3.svg" className="projectInfo__textSection--imgBox__img"/>

            </div>
        </div>

    </div>

    )
  }
}
