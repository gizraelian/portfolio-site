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
          <Link to={'/about'} className="navbar__linksBox--links">{'About'}</Link>
           {/* <button className="navbar__linksBox--dropMenuBtn" onClick={this.showMenu}>Button</button> */}
           <button className="navbar__linksBox--dropMenuBtn" onClick={this.showMenu}>Button</button>
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
                <Link to={'/about'}>
                  <button className="navbar__linksBox--dropMenuBtn__container--button"> About </button>
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
