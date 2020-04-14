import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Skills extends React.Component {

  render() {
    return (

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

    )
  }
}