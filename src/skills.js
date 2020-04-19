// import React, { Component } from 'react'
import React from 'react'

export default class Skills extends React.Component {

  render() {
    return (

<div className="main__skillsBox" id="skills">

    <div className="main__skillsBox--background" />

    <div className="main__skillsBox--card">
        <img src="../assets/html5.png"
            alt='myImg'
            className="main__skillsBox--card__img"/>
        <h2 className="main__skillsBox--card__header">HTML5</h2>
    </div>

    <div className="main__skillsBox--card">
        <img src="../assets/css3.png"
            alt='myImg'
            className="main__skillsBox--card__img"/>
        <h2 className="main__skillsBox--card__header">CSS3 | SASS</h2>
    </div>

    <div className="main__skillsBox--card">
        <img src="../assets/javascript.png" 
            alt='myImg'
            className="main__skillsBox--card__img"/>
        <h2 className="main__skillsBox--card__header">JavaScript</h2>
    </div>

    <div className="main__skillsBox--card">
        <img src="../assets/react.svg" 
            alt='myImg'
            className="main__skillsBox--card__img"/>
        <h2 className="main__skillsBox--card__header">React</h2>
    </div>

    <div className="main__skillsBox--card">
        <img src="../assets/nodejs.png"
            alt='myImg'
            className="main__skillsBox--card__img"/>
        <h2 className="main__skillsBox--card__header">NodeJS</h2>
    </div>

    <div className="main__skillsBox--card">
        <img src="../assets/node.png"
            alt='myImg'
            className="main__skillsBox--card__img"/>
        <h2 className="main__skillsBox--card__header">ExpressJS</h2>
    </div>


</div>

    )
  }
}