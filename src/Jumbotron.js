import React, { Component } from 'react'

export default class Jumbotron extends React.Component {

  render() {
    return (

<div className="main__jumbotron" id="jumbotron">
    <div className="main__jumbotron--leftBox">
    <h1 className="main__jumbotron--leftBox__textContainer">
      Front-end focused web-developer with full stack experience
    </h1>
    <h1 className="main__jumbotron--leftBox__textContainer">
        Here to create websites you can be proud of
    </h1>
    </div>
    <div className="main__jumbotron--rightBox">
    {/* <img src="../assets/javascript.png" className="main__jumbotron--rightBox__img" />
    <img src="../assets/nodejs.png" className="main__jumbotron--rightBox__img" />
    <img src="../assets/react.png" className="main__jumbotron--rightBox__img" /> */}

    <h2 className="main__jumbotron--rightBox__textContainer">
      Toronto-based tenacious web-developer with a strong appreciation for elegant,   succint code.
    </h2>
    <h2 className="main__jumbotron--rightBox__textContainer">
      My attention to detail translates into logical, manageable product.
      I build pages that showcase your unique vision.

      {/* As a true Torontonian, friendly and approachable, I create pages that showcase your unique vision. */}
    </h2>
    </div>
</div>

    )
  }
}