import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

export default class Navbar extends Component {
	render() {
		const { level, changeLevel } = this.props;
		return (
			<nav className="Navbar">
				<div className="logo">
					<a href="/">ColorPicker</a>
				</div>
				<div className="slider-container">
					<span>Level:{level}</span>
					<div className="slider">
						<Slider
							step={100}
							defaultValue={level}
							min={100}
							max={900}
							onAfterChange={changeLevel}
						/>
					</div>
				</div>
			</nav>
		);
	}
}
