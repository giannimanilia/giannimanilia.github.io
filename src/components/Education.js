import React, { Component } from 'react';
import '../css/education.css';

export default class Education extends Component {
    timelineItems = [
        {
            title: "SugarCRM",
            subtitle: "Sugar Developer Specialist Certification",
            date: "09/2019",
            side: "left"
        },
        {
            title: "Università Degli Studi di Padova",
            subtitle: "Bachelor's degree in computer engineering",
            date: "09/2017 - 03/2019",
            side: "right"
        },
        {
            title: "Universidad Simón Bolívar",
            subtitle: "Computer engineering student",
            date: "09/2012 - 07/2017",
            side: "left"
        }
    ];
	render() {
		return (
			<section className="education" id="education">
                <h2 className="heading">
                    <i className="fas fa-graduation-cap"></i> Education
                </h2>
      
                <div className="timeline">
                    {this.timelineItems.map((item, index) => (
                        <div key={index} className={`container ${item.side}`}>
                            <div className="content">
                                <div className="tag">
                                    <h2>{item.title}</h2>
                                </div>
                                <div className="desc">
                                    <h3>{item.subtitle}</h3>
                                    <p>{item.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
		);
	}
}