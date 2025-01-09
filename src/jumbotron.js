import React from 'react';
import './css/jumbotron.css';

export default class Jumbotron extends React.Component {

  render() {
    return (

<div className="main__jumbotron" id="jumbotron">

    <div className="main__jumbotron--leftBox">

    <h1 className="main__jumbotron--leftBox__textContainer">
        Here to build awesome full stack apps and websites
    </h1>
    </div>
    <div className="main__jumbotron--rightBox">

    <h2 className="main__jumbotron--rightBox__textContainer">
      Toronto-based full stack web developer with a strong appreciation for elegant, efficient code.
    </h2>
    <h2 className="main__jumbotron--rightBox__textContainer">
      My attention to detail translates into logical, manageable product.
      I build pages that showcase your unique vision.
    </h2>
    </div>
</div>
    )
  }
}