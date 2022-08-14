import React, { Component } from 'react';
import '../css/footer.css';

export default class Footer extends Component {
	render() {
		return (
			<section className="footer">

          <div className="box-container">

              <div className="box">
                  <h3>Contact info</h3>
                  <p> <i className="fas fa-envelope"></i>giannimanilia@gmail.com</p>
                  <p> <i className="fas fa-map-marked-alt"></i>Barcelona, Spain</p>

                  <div className="round-btn">
                      <ul className="round-btn-icon">
                          <li>
                              <a className="linkedin" href="https://www.linkedin.com/in/gianni-antonio-manilia/" target="_blank" rel="noopener noreferrer">
                                  <i className="fab fa-linkedin"></i>
                              </a>
                          </li>
                          <li>
                              <a className="github" href="https://github.com/giannimanilia" target="_blank" rel="noopener noreferrer">
                                  <i className="fab fa-github"></i>
                              </a>
                          </li>
                          <li>
                              <a className="instagram" href="https://www.instagram.com/giannimanilia/" target="_blank" rel="noopener noreferrer">
                                  <i className="fab fa-instagram"></i>
                              </a>
                          </li>
                          <li>
                              <a className="mailto" href="mailto:giannimanilia@gmail.com" target="_blank" rel="noopener noreferrer">
                                  <i className="fas fa-envelope"></i>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>

          </div>

      </section>
		);
	}
}