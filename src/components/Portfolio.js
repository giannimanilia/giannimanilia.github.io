import React, { Component } from 'react';
import {Row, Column} from '../style/Portfolio.style';
import '../css/Portfolio.css';

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
										<a href="https://github.com/giannimanilia/sudoku-solver" target="_blank" rel="noopener noreferrer">
											<i className="fa fa-github"></i>
										</a>
									</p>
								</figcaption>
							</div>
						</div>
						<div className="grid">
							<div className="effect-zoe">
								<img src={require("../assets/notes.png")} alt="notes"/>
								<figcaption>
									<h2 className="project-name hidden-xs">Notes</h2>
									<p className="icon-links">
										<a href="https://github.com/giannimanilia/notes-android" target="_blank" rel="noopener noreferrer">
											<i className="fa fa-github"></i>
										</a>
										<a href="https://github.com/giannimanilia/notes-backend" target="_blank" rel="noopener noreferrer">
											<i className="fa fa-github"></i>
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
										<a href="https://github.com/giannimanilia/pokedata" target="_blank" rel="noopener noreferrer">
											<i className="fa fa-github"></i>
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
						<div className="grid">
							<div className="effect-zoe">
								<img src={require("../assets/flappy-hermes.png")} alt="flappy-hermes"/>
								<figcaption>
									<h2 className="project-name hidden-xs">Flappy Hermes</h2>
									<p className="icon-links">
										<a href="https://play.google.com/store/apps/details?id=com.gmaniliapp.flappyhermes" target="_blank" rel="noopener noreferrer">
											<i className="fa fa-android"></i>
										</a>
										<a href="https://github.com/giannimanilia/flappy-hermes" target="_blank" rel="noopener noreferrer">
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