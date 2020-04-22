import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './css/navbar.css'

export default class navbar extends Component {
  constructor() {
    super();
    this.state = {
        showMenu: false,
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

  render() {
    // console.log(this.props.scrolled);
    return (

      <div className={this.props.scrolled ? 'navbar scrolled' : 'navbar' }>
        <div className="navbar__topImgBox">
        </div>
        <div className="navbar__linksBox">
          <Link to={'/'} className="navbar__linksBox--links">
            <img src="./assets/arrow-down-empty-circle_White_500x500.png" className="navbar__linksBox--links__backImg" alt='myImg'/>
          </Link>
          <button className="navbar__linksBox--dropMenuBtn" onClick={this.showMenu}>
            <img src="./assets/menu-dots.png" className="navbar__linksBox--dropMenuBtn__img" alt='myImg'/>
          </button>
          {
          this.state.showMenu
            ? (
              <div
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
                className="navbar__linksBox--dropMenuBtn__container"
              >

                <Link to={'/'}>
                  <button className="navbar__linksBox--dropMenuBtn__container--button"> Home </button>
                </Link>

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
