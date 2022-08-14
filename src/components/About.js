import React, { Component } from 'react';
import '../css/about.css';

export default class About extends Component {
	render() {
		return (
			<section className="about" id="about">
          <h2 className="heading"><i className="fas fa-user-alt"></i> About me</h2>
      
          <div className="container">
      
              <div className="image">
                  <img src={require("../assets/images/about-me-photo.jpg")} alt="About Me"/>
              </div>
      
              <div className="content">
                  <h2>Gianni Antonio Manilia</h2>
                  <h3>Java Software Engineer</h3>
                  <p>I’m a computer engineer with a strong passion for software development. I always keep in mind the customer while
                      designing and implementing optimized, clean and testable solutions. Both from a professional and personal point of view,
                      I'm always looking forward to continuing learning and improving.</p>
              </div>
      
          </div>
      </section>
		);
	}
}