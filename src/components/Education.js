import React, { Component } from 'react';
import '../css/education.css';

export default class Education extends Component {
	render() {
		return (
			<section className="education" id="education">
          <h2 className="heading"><i className="fas fa-graduation-cap"></i>Education</h2>
      
          <div className="timeline">
      
              <div className="container left">
                  <div className="content">
                      <div className="tag">
                          <h2>SugarCRM</h2>
                      </div>
                      <div className="desc">
                          <h3>Sugar Developer Specialist Certification</h3>
                          <p>09/2019</p>
                      </div>
                  </div>
              </div>
      
              <div className="container right">
                  <div className="content">
                      <div className="tag">
                          <h2>Università Degli Studi di Padova</h2>
                      </div>
                      <div className="desc">
                          <h3>Bachelor's degree in computer engineering</h3>
                          <p>09/2017 - 03/2019</p>
                      </div>
                  </div>
              </div>
      
              <div className="container left">
                  <div className="content">
                      <div className="tag">
                          <h2>Universidad Simón Bolívar</h2>
                      </div>
                      <div className="desc">
                          <h3>Computer engineering student</h3>
                          <p>09/2012 - 07/2017</p>
                      </div>
                  </div>
              </div>
      
          </div>
      
      </section>
		);
	}
}