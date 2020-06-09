import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item) => {
                return(
                  <div className="row item" key={item.university}>
                    <div className="twelve columns">
                      <h3>{item.university}, ({item.location})</h3>
                      <p className="info">
                        {item.career}
                        <span>&bull;</span> <em className="date">{item.startDate} - {item.endDate}</em>
                      </p>
                      <p>
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                return(
                  <div className="row item" key={item.company}>
                    <div className="twelve columns">
                      <h3>{item.company}, ({item.location})</h3>
                      <p className="info">
                        {item.position}
                        <span>&bull;</span> <em className="date">{item.startDate} - {item.endDate}</em>
                      </p>
                      <p>
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div> 
        </div>
      </section>
    );
  }
}