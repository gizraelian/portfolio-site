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
            <p className="footer__container--sloganBox__text">Contact</p>
          </div>
          <div className="footer__container--contactBox">
            <ul className="footer__container--contactBox__column">
              <a className="footer__container--contactBox__column--row"
                href="mailto:g.izraelian@gmail.com">
                {/* {'g.izraelian@gmail.com'} */}Email
              </a>
              <a className="footer__container--contactBox__column--row"
            target="_blank" href="https://www.linkedin.com/in/george-izraelian">LinkedIn</a>

            </ul>
            <ul className="footer__container--contactBox__column">
              <a className="footer__container--contactBox__column--row"
              target="_blank" href="https://github.com/gizraelian/">GitHub</a>
              <li className="footer__container--contactBox__column--row">Resume</li>
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
