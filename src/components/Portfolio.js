import React, { Component } from 'react';
import {Row, Column, Project} from './Portfolio.style';

export default class Portfolio extends Component {
	render() {
		return (
			<Row>
				<Column>
					<Project>
						<img src={require("../assets/uniapp-usb.png")}/>
					</Project>
          <Project>
            <img src={require("../assets/sudoku-solver.png")}/>
          </Project>
				</Column>
				<Column>
          <Project>
            <img src={require("../assets/pokemon-list.png")}/>
          </Project>
          <Project>
            <img src={require("../assets/portfolio.png")}/>
          </Project>
				</Column>
			</Row>
		);
	}
}