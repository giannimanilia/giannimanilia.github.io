import React, { Component } from 'react';
export default class About extends Component {
	render() {
		let resumeData = this.props.resumeData;
		return (
			<section id="about">
		 		<div className="row">
					<div className="main-col">
						<img className="profile-pic" src={require("../assets/profile-pic.jpg")} alt="" />
						<h2>About Me</h2>
						<p>{resumeData.aboutme}</p>
					</div>
		 		</div>
			</section>
		);
	}
}