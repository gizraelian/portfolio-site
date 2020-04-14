import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class LandingPage extends React.Component {

  render() {
    return (

<div className="main__splashBox" >
    <div className="main__splashBox--background">
          {/* <div className="main__splashBox--background__filter" /> */}
    </div>
    <div className="main__splashBox--container">
        <h1 className="main__splashBox--container__header">George Izraelian</h1>
        <h1 className="main__splashBox--container__subHeader">Web Developer</h1>
    </div>
</div>

    )
  }
}