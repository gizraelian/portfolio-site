import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__container">
          <div className="footer__container--sloganBox">
            <img src="../assets/fast.gif"
              className="footer__container--sloganBox__logo"
              alt='myImg'/>
            <p className="footer__container--sloganBox__text">{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'}</p>
          </div>
          <div className="footer__container--contactBox">
            <ul className="footer__container--contactBox__column">
              <li className="footer__container--contactBox__column--row">Lorem Ipsum</li>
              <li className="footer__container--contactBox__column--row">Lorem Ipsum</li>
              <a className="footer__container--contactBox__column--row"
              href="mailto:g.izraelian@gmail.com">
                {'g.izraelian@gmail.com'}
              </a>
            </ul>
            <ul className="footer__container--contactBox__column">
              <li className="footer__container--contactBox__column--row">Lorem Ipsum</li>
              <li className="footer__container--contactBox__column--row">Lorem Ipsum</li>
              <li className="footer__container--contactBox__column--row">Lorem Ipsum</li>
            </ul>
          </div>
          <div className="footer__container--linkBox">
            <Link to={'/'} className="footer__container--linkBox__link">HOME</Link>
            <Link to={'/about'} className="footer__container--linkBox__link">ABOUT</Link>
            
          </div>
      </div>
    </div>
    )
  }
}
