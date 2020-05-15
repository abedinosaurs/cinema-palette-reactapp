import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteStyles";
import { Link } from "react-router-dom";

class SingleColorPalette extends Component {
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
		const { classes } = this.props;
		const { format } = this.state;
		const { paletteName, emoji, id } = this.props.palette;
		const colorBoxes = this._shades.map((color) => (
			<ColorBox
				key={color.name}
				name={color.name}
				background={color[format]}
				showingFullPalette={false}
			/>
		));
		console.log(this._shades);
		return (
			<div className={classes.Palette}>
				<Navbar handleChange={this.changeFormat} showSlider={false} />
				<div className={classes.Colors}>
					{colorBoxes}
					<div className={classes.goBack}>
						<Link to={`/palette/${id}`}>GO BACK</Link>
					</div>
				</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default withStyles(styles)(SingleColorPalette);
