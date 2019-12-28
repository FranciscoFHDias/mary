/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faPhone
} from '@fortawesome/free-solid-svg-icons'
import { 
  faLinkedin, 
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'



class Footer extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <hr />
        <div className="row">
          <div className="col-sm-6">
            <div className="footer-widget">
              <h3 className="footer-title">Stay in touch</h3>
              <div className="footer-widget-content">
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
                <a href="mailto:maryk@the-people-element.com" className="link">
                  maryk@the-people-element.com
                </a>
                <br />
                <FontAwesomeIcon className="icon" icon={faPhone} />
                <a href="tel:+447771641464" className="link">
                  +44 (0) 7771 641464
                </a>
                <div className="footer-social">
                  <a
                    className="link"
                    href="https://www.linkedin.com/in/mary-kirman-a4209a4/"
                  >
                    <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
                  </a>
                  <a
                    className="link"
                    href="https://www.linkedin.com/in/mary-kirman-a4209a4/"
                  >
                    <FontAwesomeIcon className="icon" icon={faLinkedin} />
                  </a>
                  <a
                    className="link"
                    href="https://www.linkedin.com/in/mary-kirman-a4209a4/"
                  >
                    <FontAwesomeIcon className="icon" icon={faTwitterSquare} />
                  </a>
                  <a
                    className="link"
                    href="https://www.linkedin.com/in/mary-kirman-a4209a4/"
                  >
                    <FontAwesomeIcon className="icon" icon={faYoutubeSquare} />
                  </a>
                  <a
                    className="link"
                    href="https://www.linkedin.com/in/mary-kirman-a4209a4/"
                  >
                    <FontAwesomeIcon className="icon" icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="footer-widget">
              <h3 className="footer-title">Upcoming Events</h3>
              <div className="footer-widget-content">
                <div className="media">
                  <div className="media-left">
                    <img
                      className="media-object"
                      src="https://pbs.twimg.com/profile_images/956119874522243072/xzubzTdB_400x400.jpg"
                      alt="HRD Summit"
                    />
                  </div>
                  <div className="media-body">
                    <p className="link">
                      <a
                        target="_blank"
                        href="https://www.hrdsummit.com/"
                        className="link"
                      >
                        HRD Summit UK
                      </a>
                    </p>
                    <span>4 to 5 Feb 2020</span>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      className="media-object"
                      src="https://pbs.twimg.com/profile_images/1146416872189022209/5RLK6fas_400x400.png"
                      alt="CIPD Festival of Work"
                    />
                  </div>
                  <div className="media-body">
                    <p>
                      <a
                        target="_blank"
                        href="https://www.festivalofwork.com/"
                        className="link"
                      >
                        CIPD Festival of Work
                      </a>
                    </p>
                    <span>10 to 11 Jun 2020 </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="copyright">{'\u00a9 The People Element 2019-2020'}</p>
      </div>
    )
  }
}

export default Footer 
