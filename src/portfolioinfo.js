import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class PortfolioInfo extends Component {
  render() {
    return (

    <div className="projectInfo">

        <div className="projectInfo__linkBox">
          <Link to={'/portfolio'} className="projectInfo__linkBox--link">
              <img className="projectInfo__linkBox--link__img" alt='myImg' id="portfolioDemo" ></img>
              <h2 className="projectInfo__linkBox--link__header">Portfolio Site</h2>
          </Link>
        </div>

        <div className="projectInfo__textSection">
            <div className="projectInfo__textSection--row">
                <h3>About</h3>
                <p className="projectInfo__textSection--row__text">
                    Personal portfolio site
                </p>
                <p className="projectInfo__textSection--row__text">
                    Built with React and CSS3. Integrating NodeJS
                </p>
                <p className="projectInfo__textSection--row__text">
                    Updating regularly
                </p>
                <a className="projectInfo__textSection--row__link"
            target="_blank" href="https://github.com/gizraelian/portfolio-site">Source Code</a>
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
