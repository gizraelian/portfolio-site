import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class BandpageInfo extends Component {
  render() {
    return (
      <div className="projectInfo">
        <div className="projectInfo__background" />

        <div className="projectInfo__linkBox">
          <Link to={'/bandpage'} className="projectInfo__linkBox--link">
              <img className="projectInfo__linkBox--link__img" id="bandDemo" />
              <h2 className="projectInfo__linkBox--link__header">Bandpage</h2>
          </Link>
        </div>

        <div className="projectInfo__textSection">
            <div className="projectInfo__textSection--row">
                <h3>About</h3>
                <p className="projectInfo__textSection--row__text">
                    A responsive portfolio site for a hypothetical music band, the "Bees Knees"
                </p>
                <p className="projectInfo__textSection--row__text">
                    Built with HTML5, CSS3, and Javascript
                </p>
            </div>
            <div className="projectInfo__textSection--imgBox">
                <img src="../assets/html5.png" className="projectInfo__textSection--imgBox__img"/>

                <img src="../assets/css3.svg" className="projectInfo__textSection--imgBox__img"/>

                <img src="../assets/javascript.png" className="projectInfo__textSection--imgBox__img"/>
            </div>
        </div>

      </div>
    )
  }
}
