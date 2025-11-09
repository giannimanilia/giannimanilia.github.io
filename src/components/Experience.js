import React, { Component } from 'react';
import '../css/experience.css';

export default class Experience extends Component {
    timelineItems = [
        {
            company: "N26",
            roles: [
                {
                    name: "Backend Engineer",
                    date: "03/2024 - Present"
                }
            ],
            side: "left"
        },
        {
            company: "eDreams ODIGEO",
            roles: [
                {
                    name: "Senior Software Engineer",
                    date: "10/2022 - 02/2024"
                },
                {
                    name: "Software Engineer",
                    date: "08/2021 - 09/2022"
                }
            ],
            side: "right"
        },
        {
            company: "IFIN Sistemi",
            roles: [
                {
                    name: "Software Engineer",
                    date: "06/2020 - 07/2021"
                }
            ],
            side: "left"
        },
        {
            company: "Opensymbol",
            roles: [
                {
                    name: "Software Developer",
                    date: "10/2018 - 03/2020"
                }
            ],
            side: "right"
        }
    ];
	render() {
		return (
            <section className="experience" id="experience">
                <h2 className="heading">
                    <i className="fas fa-briefcase"></i> Experience
                </h2>

                <div className="timeline">
                    {this.timelineItems.map((item, index) => (
                        <div key={index} className={`container ${item.side}`}>
                            <div className="content">
                                <div className="tag">
                                    <h2>{item.company}</h2>
                                </div>
                                <div className="desc">
                                    {item.roles.map((role, i) => (
                                        <div key={i} className="role">
                                            <h3>{role.name}</h3>
                                            <p>{role.date}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
		);
	}
}