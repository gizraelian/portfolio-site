import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class navbar extends Component {
  constructor() {
    super();
    this.state = {
        showMenu: false,
        scrolled: false,
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    }
    showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
        document.addEventListener('click', this.closeMenu);
    });
    }
    closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
        this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
        });  
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true){
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  componentWillUnmount(){
    window.removeEventListener('scroll');
  }

  render() {
    return (

      <div className={this.state.scrolled ? 'navbar scrolled' : 'navbar' }>
        <div className="navbar__topImgBox">
        </div>
        <div className="navbar__linksBox">
          <Link to={'/'} className="navbar__linksBox--links">{'Home'}</Link>
          <button className="navbar__linksBox--dropMenuBtn" onClick={this.showMenu}>Projects</button>
          {
          this.state.showMenu
            ? (
              <div
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
                className="navbar__linksBox--dropMenuBtn__container"
              >
                <Link to={'/bandpage'}>
                  <button className="navbar__linksBox--dropMenuBtn__container--button"> Bandpage </button>
                </Link>

                <Link to={'/brainflix'}>
                  <button className="navbar__linksBox--dropMenuBtn__container--button"> Brainflix </button>
                </Link>

                <Link to={'/portfolio'}>
                  <button className="navbar__linksBox--dropMenuBtn__container--button"> Portfolio Site </button>
                </Link>

                <Link to={'/ivg'}>
                  <button className="navbar__linksBox--dropMenuBtn__container--button"> IVG Fiber </button>
                </Link>

              </div>
            )
            : (
              null
            )
        }
        </div>
      </div>
    )
  }
}
