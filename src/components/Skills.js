import React, { Component } from 'react';
import '../css/skills.css';

export default class Skills extends Component {
	render() {
		return (
			<section className="skills" id="skills">
          <h2 className="heading"><i className="fas fa-laptop-code"></i> Skills</h2>
      
          <div className="container">
      
              <div className="row">
                  <div className="col">
                      <div className="bar">
                          <div className="info">
                              <i className="fab fa-java">
                                  <span>Java</span>
                              </i>
                          </div>
                          <div className="line language"></div>
                      </div>
      
                      <div className="bar">
                          <div className="info">
                              <i className="fab fa-android">
                                  <span>Kotlin</span>
                              </i>
                          </div>
                          <div className="line language"></div>
                      </div>
      
                      <div className="bar">
                          <div className="info">
                              <i className="fab fa-php">
                                  <span>PHP</span>
                              </i>
                          </div>
                          <div className="line language"></div>
                      </div>
      
                      <div className="bar">
                          <div className="info">
                              <i className="fab fa-js-square">
                                  <span>Javascript</span>
                              </i>
                          </div>
                          <div className="line language"></div>
                      </div>
      
                      <div className="bar">
                          <div className="info">
                              <i className="fab fa-git">
                                  <span>Git</span>
                              </i>
                          </div>
                          <div className="line tool"></div>
                      </div>
                  </div>
      
                  <div className="col">
                      <div className="bar">
                          <div className="info">
                              <i className="fas fa-database">
                                  <span>PostgreSQL</span>
                              </i>
                          </div>
                          <div className="line database"></div>
                      </div>
      
                      <div className="bar">
                          <div className="info">
                              <i className="fas fa-database">
                                  <span>Oracle Database</span>
                              </i>
                          </div>
                          <div className="line database"></div>
                      </div>
      
                      <div className="bar">
                          <div className="info">
                              <i className="fas fa-database">
                                  <span>MySQL</span>
                              </i>
                          </div>
                          <div className="line database"></div>
                      </div>
      
                      <div className="bar">
                          <div className="info">
                              <i className="fab fa-android">
                                  <span>Android</span>
                              </i>
                          </div>
                          <div className="line framework"></div>
                      </div>
      
                      <div className="bar">
                          <div className="info">
                              <i className="fa fa-leaf">
                                  <span>Spring Boot</span>
                              </i>
                          </div>
                          <div className="line framework"></div>
                      </div>
                  </div>
              </div>
      
          </div>
      </section>
		);
	}
}