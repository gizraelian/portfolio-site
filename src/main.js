import React, { Component } from 'react';
import Projects from './projects';
import Jumbotron from './jumbotron';
import Skills from './skills';
import { Link } from "react-scroll";
import './css/main.css';

// import ReadyToScroll from './ReadyToScroll';
// import { Link } from 'react-router-dom';

export default class Main extends Component {

//   constructor() {
//     super();
//     this.state = {
//         scrolled: false,
//     };

//   }

//   componentDidMount(){
//     window.addEventListener('scroll', () => {
//       const isTop = window.scrollY > 500;
//       if (isTop !== true){
//         this.setState({ scrolled: true });
//       } else {
//         this.setState({ scrolled: false });
//       }
//     });
//   }

//   componentWillUnmount(){
//     window.removeEventListener('scroll');
//   }

  render() {
    
    return (
      <div className="main">

        <div className="longBackgroundContainer"/>

        <div className="main__splashBox" id="landingPage">

        <Link
            // className={this.state.scrolled ? 'main__goUp scrolled' : 'main__goUp' }
            // to="landingPage"
            className="main__goUp scrolled"
            spy={true}
            smooth={true}
            offset={0}
            duration= {1500} >
            {/* <img src="../assets/arrows-grey.png" className="main__goUp--img" alt='myImg' /> */}
            <img src="../assets/arrows-darkgrey.png" className="main__goUp--imgUp" alt='myImg' />
             
        </Link>

    <div className="main__splashBox--background"></div>

    <div className="main__splashBox--container">
        <h1 className="main__splashBox--container__header">George Izraelian</h1>
        <h1 className="main__splashBox--container__subHeader">Web Developer</h1>
        <Link
            className="main__splashBox--container__scrollToProjects"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration= {1500} >
            {/* <img src="../assets/arrows-left_500x500.png" className="main__splashBox--container__scrollDown--img" alt='myImg' /> */}
            <div className="main__splashBox--container__scrollDown--toProjects">PROJECTS</div>
        </Link>
    </div>

</div>

        <Jumbotron />

        <Skills />

        <Projects />

      </div>
    )
  }
}