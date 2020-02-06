import React, { Component } from 'react'
import { Link } from 'react-router-dom';

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
    return (
      <div className="navbar">
        <div className="navbar__topImgBox">
        </div>
        <div className="navbar__linksBox">
          <Link to={'/'} className="navbar__links">{'Home'}</Link>
          <Link to={'/about'} className="navbar__links">{'About'}</Link>
           <button className="navbar__dropMenu" onClick={this.showMenu}>Button</button>
          {
          this.state.showMenu
            ? (
              <div
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
                id="dropMenu_container"
              >
                <Link to={'/'}>
                  <button className="navbar__dropMenu__button"> Home </button>
                </Link>
                <Link to={'/about'}>
                  <button className="navbar__dropMenu__button"> About </button>
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
