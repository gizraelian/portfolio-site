import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class IvgInfo extends Component {
  render() {
    return (

    <div className="projectInfo">

        <div className="projectInfo__linkBox">
          <Link to={'/ivg'} className="projectInfo__linkBox--link">
              <img className="projectInfo__linkBox--link__img" alt='myImg' id="ivgDemo" ></img>
              {/* <h2 className="projectInfo__linkBox--link__header"></h2> */}
          </Link>
        </div>

        <div className="projectInfo__textSection">
            <div className="projectInfo__textSection--row">
                <h3>IVG Fiber</h3>
                <p className="projectInfo__textSection--row__text">
                    A private marketing site
                </p>
                <p className="projectInfo__textSection--row__text">
                    In development with React and CSS3
                </p>
            </div>
            <div className="projectInfo__textSection--imgBox">

                <img src="../assets/react.svg" className="projectInfo__textSection--imgBox__img" alt='myImg' />

                {/* <img src="../assets/node.png" className="projectInfo__textSection--imgBox__img"/> */}

                <img src="../assets/css3.png" className="projectInfo__textSection--imgBox__img" alt='myImg' />

            </div>
        </div>

    </div>

    )
  }
}
