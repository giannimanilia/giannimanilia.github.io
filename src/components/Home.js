import React, { Component } from 'react';
import '../css/home.css';

export default class Home extends Component {
	render() {
		return (
			<section className="home" id="home">
          <div id="particles-js"></div>

          <div className="content">
              <h3>Hi there,<br/> I'm Gianni</h3>
      
              <a href="#about" className="btn"><span>About me</span></a>
      
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
                          <a className="resume" href="../assets/documents/cv_gianni_antonio_manilia.pdf" download="" rel="noopener noreferrer">
                              <i className="fas fa-file-pdf"></i>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      
          <div className="image">
              <img src={require("../assets/images/profile-photo.jpg")} alt="Profile"/>
          </div>
      </section>
		);
	}
}