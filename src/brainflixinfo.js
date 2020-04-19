import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class BrainFlixInfo extends Component {
  render() {
    return (

    <div className="projectInfo">

        <div className="projectInfo__linkBox">
          <Link to={'/brainflix'} className="projectInfo__linkBox--link">
              <img className="projectInfo__linkBox--link__img" alt='myImg' id="brainFlixDemo" />
              {/* <h2 className="projectInfo__linkBox--link__header">BrainFlix</h2> */}
          </Link>
        </div>

        <div className="projectInfo__textSection">
            <div className="projectInfo__textSection--row">
                <h3>BrainFlix</h3>
                <p className="projectInfo__textSection--row__text">
                    A proof-of-concept YouTube clone, with videos served by NodeJS
                </p>
                <p className="projectInfo__textSection--row__text">
                    Built with React, CSS3, Express and NodeJS
                </p>
                <a className="projectInfo__textSection--row__link"
            target="_blank" href="https://github.com/gizraelian/brainflix">Source Code</a>
            </div>
            <div className="projectInfo__textSection--imgBox">

                <img src="../assets/react.svg" className="projectInfo__textSection--imgBox__img" alt='myImg' />
                <img src="../assets/node.png" className="projectInfo__textSection--imgBox__img" alt='myImg' />
                <img src="../assets/css3.png" className="projectInfo__textSection--imgBox__img" alt='myImg' />

            </div>
        </div>

    </div>

    )
  }
}
