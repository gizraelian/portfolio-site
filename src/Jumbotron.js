import React, { Component } from 'react'

export default class Jumbotron extends React.Component {

  render() {
    return (

<div className="main__jumbotron" id="jumbotron">
    <div className="main__jumbotron--leftBox">
    <h2 className="main__jumbotron--leftBox__textContainer">
        Awesome front-end focused web-developer with full stack experience
    </h2>
    {/* <h2 className="main__jumbotron--leftBox__textContainer">
        Delivering superior results through challenging projects
    </h2> */}
    </div>
    <div className="main__jumbotron--rightBox">
    {/* <img src="../assets/javascript.png" className="main__jumbotron--rightBox__img" />
    <img src="../assets/nodejs.png" className="main__jumbotron--rightBox__img" />
    <img src="../assets/react.png" className="main__jumbotron--rightBox__img" /> */}

    <h3 className="main__jumbotron--rightBox__textContainer">
      Toronto-based web-developer with a strong appreciation for elegant, succint code. I am here to create websites that you can proud of.
    </h3>
    <h3 className="main__jumbotron--rightBox__textContainer">
      My attention to detail translates into logical, managable product.
      I build pages that showcase your unique vision.

      {/* As a true Torontonian, friendly and approachable, I create pages that showcase your unique vision. */}
    </h3>
    </div>
</div>

    )
  }
}