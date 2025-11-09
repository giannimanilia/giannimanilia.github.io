import React, { Component } from 'react';
import '../css/projects.css';

export default class Projects extends Component {
	render() {
	    const projects = this.props.projectsJson.projects || [];
		return (
			<section className="projects" id="projects">
                <h2 className="heading">
                    <i className="fas fa-laptop-code"></i> Projects
                </h2>
      
                <div className="box-container">
                    {
                        projects.map((project) => (
                            <div key={project.id} className={`box tilt ${!project.links.view && !project.links.code ? 'no-hover' : ''}`}>
                                <img src={project.image} alt={project.name} />
                                <div className="content">
                                    <div className="tag">
                                        <h3>{project.name}</h3>
                                    </div>
                                    <div className="desc">
                                        <p>{project.desc}</p>
                                        <div className="btns">
                                            {project.links.view &&
                                                <a href={project.links.view} className="btn" target="_blank" rel="noopener noreferrer">
                                                    <i className="fas fa-eye"></i>&nbsp;View
                                                </a>
                                            }
                                            {project.links.code &&
                                                <a href={project.links.code} className="btn" target="_blank" rel="noopener noreferrer">
                                                    <i className="fas fa-code"></i>&nbsp;Code
                                                </a>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </section>
		);
	}
}