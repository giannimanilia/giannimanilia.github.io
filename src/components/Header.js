import React, { Component } from 'react';
import '../css/header.css';

export default class Header extends Component {
	render() {
		return (
				<React.Fragment>
            <header>
                <div id="menu" className="fas fa-bars"></div>
                <nav className="navbar">
                    <ul>
                        <li><a className="active" href="/">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#experience">Experience</a></li>
                    </ul>
                </nav>
            </header>
				</React.Fragment>
		);
	}
}