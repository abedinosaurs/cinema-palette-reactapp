import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";

export default class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this._shades = this.gatherShades(this.props.palette, this.props.colorId);
		this.state = {
			format: "hex",
		};
		this.changeFormat = this.changeFormat.bind(this);
	}

	gatherShades(palette, colorId) {
		let shades = [];
		let allColors = palette.colors;

		for (let color in allColors) {
			shades.push(allColors[color].find((color) => color.id === colorId));
		}
		return shades.slice(1);
	}

	changeFormat(val) {
		this.setState({ format: val });
	}

	render() {
		const { format } = this.state;
		const { paletteName, emoji, id } = this.props.palette;
		const colorBoxes = this._shades.map((color) => (
			<ColorBox
				key={color.name}
				name={color.name}
				background={color[format]}
				showLink={false}
			/>
		));
		console.log(this._shades);
		return (
			<div className="SingleColorPalette Palette">
				<Navbar handleChange={this.changeFormat} showSlider={false} />
				<div className="Palette-colors">
					{colorBoxes}
					<div className="go-back ColorBox">
						<Link to={`/palette/${id}`} className="back-button">
							GO BACK
						</Link>
					</div>
				</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}
