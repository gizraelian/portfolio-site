import React, { Component } from 'react'

export default class Jumbotron extends React.Component {

  render() {
    return (

<div className="main__jumbotron" id="jumbotron">
    <div className="main__jumbotron--leftBox">
    <h2 className="main__jumbotron--leftBox__textContainer">
        Motivated front-end focused web-developer, with full stack experience.
    </h2>
    <h2 className="main__jumbotron--leftBox__textContainer">
        Delivering superior results through challenging projects.
    </h2>
    </div>
    <div className="main__jumbotron--rightBox">
    {/* <img src="../assets/javascript.png" className="main__jumbotron--rightBox__img" />
    <img src="../assets/nodejs.png" className="main__jumbotron--rightBox__img" />
    <img src="../assets/react.png" className="main__jumbotron--rightBox__img" /> */}

    <h3 className="main__jumbotron--rightBox__textContainer">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit. Habitant morbi tristique senectus et.
    </h3>
    <h3 className="main__jumbotron--rightBox__textContainer">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit. Habitant morbi tristique senectus et.
    </h3>
    </div>
</div>

    )
  }
}