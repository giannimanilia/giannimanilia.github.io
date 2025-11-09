import React, { Component } from 'react';
import '../css/experience.css';

export default class Experience extends Component {
	render() {
		return (
      <section className="experience" id="experience">
          <h2 className="heading"><i className="fas fa-briefcase"></i> Experience</h2>
      
          <div className="timeline">
              <div className="container left">
                  <div className="content">
                      <div className="tag">
                          <h2>N26</h2>
                      </div>
                      <div className="desc">
                          <h3>Backend Engineer</h3>
                          <p>03/2024 - Present</p>
                      </div>
                  </div>
              </div>

              <div className="container right">
                  <div className="content">
                      <div className="tag">
                          <h2>eDreams ODIGEO</h2>
                      </div>
                      <div className="desc">
                          <h3>Java Senior Software Engineer</h3>
                          <p>10/2022 - 02/2024</p>
                      </div>
                      <div className="desc">
                          <h3>Java Software Engineer</h3>
                          <p>08/2021 - 09/2022</p>
                      </div>
                  </div>
              </div>
      
              <div className="container left">
                  <div className="content">
                      <div className="tag">
                          <h2>IFIN Sistemi</h2>
                      </div>
                      <div className="desc">
                          <h3>Java Software Engineer</h3>
                          <p>06/2020 - 07/2021</p>
                      </div>
                  </div>
              </div>
      
              <div className="container right">
                  <div className="content">
                      <div className="tag">
                          <h2>Opensymbol</h2>
                      </div>
                      <div className="desc">
                          <h3>CRM Software Developer</h3>
                          <p>10/2018 - 03/2020</p>
                      </div>
                  </div>
              </div>
      
              <div className="container left">
                  <div className="content">
                      <div className="tag">
                          <h2>Kratos & 2WaySports</h2>
                      </div>
                      <div className="desc">
                          <h3>Junior Android Developer</h3>
                          <p>06/2017 - 08/2017</p>
                      </div>
                  </div>
              </div>
      
          </div>
      
      </section>
		);
	}
}