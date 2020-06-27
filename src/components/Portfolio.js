import React, { Component } from 'react';
import {Row, Column} from './Portfolio.style';
import './Portfolio.css';

export default class Portfolio extends Component {
	render() {
		return (
			<section id="portfolio">
				<h1>Check Out Some of My Projects.</h1>
				<Row>
					<Column>
						<div className="grid">
							<div className="effect-zoe">
								<img src={require("../assets/uniapp-usb.png")} alt="uniapp-usb"/>
								<figcaption>
									<h2 className="project-name hidden-xs">UniApp USB</h2>
									<p className="icon-links">
										<a href="https://play.google.com/store/apps/details?id=com.gmail.gmaniliapp" target="_blank" rel="noopener noreferrer">
											<i className="fa fa-android"></i>
										</a>
									</p>
								</figcaption>
							</div>
						</div>
						<div className="grid">
							<div className="effect-zoe">
								<img src={require("../assets/sudoku-solver.png")} alt="sudoku-solver"/>
								<figcaption>
									<h2 className="project-name hidden-xs">Sudoku Solver</h2>
									<p className="icon-links">
										<a href="https://play.google.com/store/apps/details?id=com.gmaniliapp.sudokusolver" target="_blank" rel="noopener noreferrer">
											<i className="fa fa-android"></i>
										</a>
										<a href="https://bitbucket.org/GManiliapp/sudoku-solver" target="_blank" rel="noopener noreferrer">
											<i className="fa fa-bitbucket"></i>
										</a>
									</p>
								</figcaption>
							</div>
						</div>
					</Column>
					<Column>
						<div className="grid">
							<div className="effect-zoe">
								<img src={require("../assets/pokedata.png")} alt="pokedata"/>
								<figcaption>
									<h2 className="project-name hidden-xs">PokeData</h2>
									<p className="icon-links">
										<a href="https://play.google.com/store/apps/details?id=com.gmaniliapp.pokedata" target="_blank" rel="noopener noreferrer">
											<i className="fa fa-android"></i>
										</a>
										<a href="https://bitbucket.org/GManiliapp/pokedata" target="_blank" rel="noopener noreferrer">
											<i className="fa fa-bitbucket"></i>
										</a>
									</p>
								</figcaption>
							</div>
						</div>
						<div className="grid">
							<div className="effect-zoe">
								<img src={require("../assets/portfolio.png")} alt="portfolio"/>
								<figcaption>
									<h2 className="project-name hidden-xs">Portfolio</h2>
									<p className="icon-links">
										<a href="https://github.com/giannimanilia/giannimanilia.github.io" target="_blank" rel="noopener noreferrer">
											<i className="fa fa-github"></i>
										</a>
									</p>
								</figcaption>
							</div>
						</div>
					</Column>
				</Row>
			</section>
		);
	}
}