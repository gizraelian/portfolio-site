// import React, { Component } from 'react'
import React from 'react';
import { Link } from 'react-router-dom';
import './css/projects.css';
var GifPlayer = require('react-gif-player');

export default class Projects extends React.Component {

    constructor(props) {
        super(props);
      this.state = {
        playing: true
      };
    }

  render() {
    return (

// Project portfolio section

<div className="main__pageBox">

<h2 className="main__pageBox--header">PROJECTS</h2>

<div className="main__pageBox--projectsBox" id="projects">


{/* -------------------------------------------------------------- */}


    <div className="main__pageBox--projectsBox__card">

        {/* <div className="main__projectsBox--card__img" id="bandDemo" /> */}

        <GifPlayer
          gif="../assets/band.gif"
          still="../assets/band-still.jpg"
          className="main__pageBox--projectsBox__card--img"
          id="bandDemo"
          pauseRef={pause => this.pauseGif = pause}
          onTogglePlay={playing => this.setState({ playing })}
        //   autoplay
        
        />

        <div
          className="main__pageBox--projectsBox__card--playBtn"
          disabled={!this.state.playing}
          onClick={() => this.pauseGif()}
        >
          {/* {this.state.playing ? 'Play GIF' : 'GIF Paused'} */}
        </div>


        <div className="main__pageBox--projectsBox__card--textBox">
            <Link to={'/bandpage'} className="main__pageBox--projectsBox__card--textBox__header">"Bandpage"</Link>
            <a className="main__pageBox--projectsBox__card--textBox__link"
            target="_blank" href="https://github.com/gizraelian/bandpage">Code</a>
            <h3 className="main__pageBox--projectsBox__card--textBox__subHeader">JS/HTML5/CSS</h3>
        </div>
    </div>

{/* -------------------------------------------------------------- */}

    <div className="main__pageBox--projectsBox__card">

        <GifPlayer
          gif="../assets/brainflix.gif"
          still="../assets/brainflix-still.jpg"
          className="main__pageBox--projectsBox__card--img"
          id="brainFlixDemo"
          pauseRef={pause => this.pauseGif = pause}
          onTogglePlay={playing => this.setState({ playing })}
        //   autoplay
        />

        {/* <button */}
        <div
          className="main__pageBox--projectsBox__card--playBtn"
          disabled={!this.state.playing}
          onClick={() => this.pauseGif()}
          >
        </div>
        {/* </button> */}

        <div className="main__pageBox--projectsBox__card--textBox">
            <Link to={'/brainflix'} className="main__pageBox--projectsBox__card--textBox__header">"BrainFlix"</Link>
            <a className="main__pageBox--projectsBox__card--textBox__link"
            target="_blank" href="https://github.com/gizraelian/brainflix">Code</a>
            <h3 className="main__pageBox--projectsBox__card--textBox__subHeader">React/Node/Express</h3>
        </div>
    </div>

{/* -------------------------------------------------------------- */}

    <div className="main__pageBox--projectsBox__card">
        {/* <div className="main__projectsBox--card__img" id="portfolioDemo"/> */}

        <GifPlayer
          gif="../assets/portfolio.gif"
          still="../assets/github.jpg"
          className="main__pageBox--projectsBox__card--img"
          id="portfolioDemo"
          pauseRef={pause => this.pauseGif = pause}
          onTogglePlay={playing => this.setState({ playing })}
        //   autoplay
        />

        <div
          className="main__pageBox--projectsBox__card--playBtn"
          disabled={!this.state.playing}
          onClick={() => this.pauseGif()}
          >
        </div>

        <div className="main__pageBox--projectsBox__card--textBox">
            <Link to={'/portfolio'} className="main__pageBox--projectsBox__card--textBox__header">"Portfolio"</Link>
            <a className="main__pageBox--projectsBox__card--textBox__link"
            target="_blank" href="https://github.com/gizraelian/portfolio-site">Code</a>
            <h3 className="main__pageBox--projectsBox__card--textBox__subHeader">React/CSS</h3>
        </div>
    </div>

{/* -------------------------------------------------------------- */}

    <div className="main__pageBox--projectsBox__card">

        <GifPlayer
          gif="../assets/ivg2.gif"
          still="../assets/ivg-still.jpg"
          className="main__pageBox--projectsBox__card--img"
          id="ivgDemo"
          pauseRef={pause => this.pauseGif = pause}
          onTogglePlay={playing => this.setState({ playing })}
        //   autoplay
        />

        <div
          className="main__pageBox--projectsBox__card--playBtn"
          disabled={!this.state.playing}
          onClick={() => this.pauseGif()}
          >
        </div>

        <div className="main__pageBox--projectsBox__card--textBox">
            <Link to={'/ivg'} 
             className="main__pageBox--projectsBox__card--textBox__header">"IVG Fiber"</Link>
            <h3 className="main__pageBox--projectsBox__card--textBox__subHeader">React/CSS</h3>
            {/* <a className="main__projectsBox--card__textBox--link">Coming soon</a> */}
        </div>
    </div>

</div>

</div>

    )
  }
}
