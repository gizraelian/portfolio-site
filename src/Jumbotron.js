import React, { Component } from 'react'

export default class Jumbotron extends React.Component {

  render() {
    return (

<div className="main__jumbotron">
    <div className="main__jumbotron--leftBox">
    <h1 className="main__jumbotron--leftBox__textContainer">
        Motivated front-end focused web-developer, with full stack experience.
    </h1>
    <h1 className="main__jumbotron--leftBox__textContainer">
        Delivering superior results through challenging projects.
    </h1>
    </div>
    <div className="main__jumbotron--rightBox">
    {/* <img src="../assets/javascript.png" className="main__jumbotron--rightBox__img" />
    <img src="../assets/nodejs.png" className="main__jumbotron--rightBox__img" />
    <img src="../assets/react.png" className="main__jumbotron--rightBox__img" /> */}

    <h2 className="main__jumbotron--rightBox__textContainer">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit. Habitant morbi tristique senectus et.
    </h2>
    <h2 className="main__jumbotron--rightBox__textContainer">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit. Habitant morbi tristique senectus et.
    </h2>
    </div>
</div>

    )
  }
}