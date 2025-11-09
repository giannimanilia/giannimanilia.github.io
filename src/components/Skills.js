import React, { Component } from 'react';
import '../css/skills.css';

export default class Skills extends Component {
	render() {
		return (
			<section className="skills" id="skills">
			    <h2 className="heading">
                    <i className="fas fa-laptop-code"></i> Skills
                </h2>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <SkillsBar title="Languages" items={[
                              { icon: "fab fa-java", label: "Java" },
                              { icon: "fas fa-code", label: "Kotlin" },
                              { icon: "fab fa-php", label: "PHP" },
                              { icon: "fab fa-js-square", label: "JavaScript" },
                            ]} />

                            <SkillsBar title="Tools" items={[
                              { icon: "fab fa-git", label: "Git" },
                              { icon: "fas fa-code", label: "SonarQube" }
                            ]} />
                        </div>
                        <div className="col">
                            <SkillsBar title="Databases" items={[
                              { icon: "fas fa-database", label: "PostgreSQL" },
                              { icon: "fas fa-database", label: "Oracle" },
                              { icon: "fas fa-database", label: "MySQL" },
                            ]} />
                            <SkillsBar title="Frameworks" items={[
                              { icon: "fab fa-android", label: "Android" },
                              { icon: "fa fa-leaf", label: "Spring Boot" }
                            ]} />
                        </div>
                    </div>
                </div>
            </section>
		);
	}
}

function SkillsBar({ title, items }) {
  return (
    <div className="bar">
      <div className="title-wrapper">
        <span className="bar-title">{title}</span>
        <div className="line"></div>
      </div>

      <ul className="skill-list">
        {items.map((item, index) => (
          <li key={index}>
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
