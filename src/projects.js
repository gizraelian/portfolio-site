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

<div className="main__projectsBox" id="projects">

{/* -------------------------------------------------------------- */}

    <div className="main__projectsBox--card">

        {/* <div className="main__projectsBox--card__img" id="bandDemo" /> */}

        <GifPlayer
          gif="../assets/band.gif"
          still="../assets/band-still.jpg"
          className="main__projectsBox--card__img"
          id="bandDemo"
          pauseRef={pause => this.pauseGif = pause}
          onTogglePlay={playing => this.setState({ playing })}
        //   autoplay
        />

        <div
          className="main__projectsBox--card__playBtn"
          disabled={!this.state.playing}
          onClick={() => this.pauseGif()}
        >
            Click to play
          {/* {this.state.playing ? 'Play GIF' : 'GIF Paused'} */}
        </div>


        <div className="main__projectsBox--card__textBox">
            <Link to={'/bandpage'} className="main__projectsBox--card__textBox--header">"Bandpage"</Link>
            <a className="main__projectsBox--card__textBox--link"
            target="_blank" href="https://github.com/gizraelian/bandpage">Code</a>
            <h3 className="main__projectsBox--card__textBox--subHeader">JS/HTML5/CSS</h3>
        </div>
    </div>

{/* -------------------------------------------------------------- */}

    <div className="main__projectsBox--card">
        {/* <div className="main__projectsBox--card__img" id="brainFlixDemo" /> */}

        <GifPlayer
          gif="../assets/brainflix.gif"
          still="../assets/brainflix-still.jpg"
          className="main__projectsBox--card__img"
          id="brainFlixDemo"
          pauseRef={pause => this.pauseGif = pause}
          onTogglePlay={playing => this.setState({ playing })}
        //   autoplay
        />

        <button
          className="main__projectsBox--card__playBtn"
          disabled={!this.state.playing}
          onClick={() => this.pauseGif()}
          >
          Click to play
        </button>

        <div className="main__projectsBox--card__textBox">
            <Link to={'/brainflix'} className="main__projectsBox--card__textBox--header">"BrainFlix"</Link>
            <a className="main__projectsBox--card__textBox--link"
            target="_blank" href="https://github.com/gizraelian/brainflix">Code</a>
            <h3 className="main__projectsBox--card__textBox--subHeader">React/Node/Express</h3>
        </div>
    </div>

{/* -------------------------------------------------------------- */}

    <div className="main__projectsBox--card">
        {/* <div className="main__projectsBox--card__img" id="portfolioDemo"/> */}

        <GifPlayer
          gif="../assets/portfolio.gif"
          still="../assets/github.jpg"
          className="main__projectsBox--card__img"
          id="portfolioDemo"
          pauseRef={pause => this.pauseGif = pause}
          onTogglePlay={playing => this.setState({ playing })}
        //   autoplay
        />

        <button
          className="main__projectsBox--card__playBtn"
          disabled={!this.state.playing}
          onClick={() => this.pauseGif()}
          >
          Click to play
        </button>

        <div className="main__projectsBox--card__textBox">
            <Link to={'/portfolio'} className="main__projectsBox--card__textBox--header">"Portfolio"</Link>
            <a className="main__projectsBox--card__textBox--link"
            target="_blank" href="https://github.com/gizraelian/portfolio-site">Code</a>
            <h3 className="main__projectsBox--card__textBox--subHeader">React/CSS</h3>
        </div>
    </div>

{/* -------------------------------------------------------------- */}

    <div to={'/ivg'} className="main__projectsBox--card">
        {/* <div className="main__projectsBox--card__img" id="ivgDemo"/> */}

        <GifPlayer
          gif="../assets/ivg2.gif"
          still="../assets/ivg-still.jpg"
          className="main__projectsBox--card__img"
          id="ivgDemo"
          pauseRef={pause => this.pauseGif = pause}
          onTogglePlay={playing => this.setState({ playing })}
        //   autoplay
        />

        <button
          className="main__projectsBox--card__playBtn"
          disabled={!this.state.playing}
          onClick={() => this.pauseGif()}
          >
          Click to play
        </button>

        <div className="main__projectsBox--card__textBox">
            <Link to={'/ivg'} className="main__projectsBox--card__textBox--header">"IVG Fiber"</Link>
            <h3 className="main__projectsBox--card__textBox--subHeader">React/CSS</h3>
            {/* <a className="main__projectsBox--card__textBox--link">Coming soon</a> */}
        </div>
    </div>

</div>

    )
  }
}
