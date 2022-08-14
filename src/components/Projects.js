import React, { Component } from 'react';
import '../css/projects.css';

export default class Projects extends Component {
	render() {
	  let projectsJson = this.props.projectsJson;

		return (
			<section className="projects" id="projects">
          <h2 className="heading"><i className="fas fa-laptop-code"></i> Projects</h2>
      
          <div className="box-container">
              {
                  projectsJson.projects && projectsJson.projects.map((project) => {
                      return(
                          <div className="box tilt" key={project.id}>
                              <img src={project.image} alt={project.name} />
                              <div className="content">
                                  <div className="tag">
                                      <h3>{project.name}</h3>
                                  </div>
                                  <div className="desc">
                                      <p>{project.desc}</p>
                                      <div className="btns">
                                          {project.links.view != null &&
                                              <a href={project.links.view} className="btn" target="_blank" rel="noopener noreferrer">
                                                  <i className="fas fa-eye"></i>
                                                    View
                                              </a>
                                          }
                                          {project.links.code != null &&
                                              <a href={project.links.code} className="btn" target="_blank" rel="noopener noreferrer">
                                                  <i className="fas fa-code"></i>
                                                  Code
                                              </a>
                                          }
                                      </div>
                                  </div>
                              </div>
                          </div>
                      )
                  })
              }

          </div>

      </section>
		);
	}
}