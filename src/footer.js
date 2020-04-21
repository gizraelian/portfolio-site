import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './css/footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__container">

          <div className="footer__container--sloganBox">
            {/* <img src="../assets/placeholder2.jpg"
              className="footer__container--sloganBox__logo"
              alt='myImg'/> */}
            {/* <p className="footer__container--sloganBox__text">Contact</p> */}
          </div>

          <div className="footer__container--contactBox">
            <ul className="footer__container--contactBox__column">
              <a className="footer__container--contactBox__column--row"
                href="mailto:g.izraelian@gmail.com">Email</a>
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
          </div>

          <div className="footer__container--signatureBox">
            <p className="footer__container--signatureBox__signature">Site by George Izraelian</p>
          </div>

      </div>
    </div>
    )
  }
}
