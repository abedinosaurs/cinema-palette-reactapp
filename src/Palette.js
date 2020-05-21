import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@material-ui/styles";
// import styles from "./styles/PaletteStyles";
import { ColorExtractor } from "react-color-extractor";
import { generatePalette } from "./ColorHelpers";

const styles = {
	Palette: {
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		overflow: "hidden",
	},
	Colors: {
		height: "90%",
		"& img": {
			height: "50vh",
		},
	},
	goBack: {
		width: "20%",
		height: "50%",
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
		textTransform: " upprcase",
		marginBottom: "-4px",
		opacity: "1",
		backgroundColor: "black",
		"& a": {
			color: "white",
			width: "100px",
			height: "30px",
			position: "absolute",
			display: "inline-block",
			top: "50%",
			left: "50%",
			marginLeft: "-50px",
			marginTop: "-15px",
			textAlign: "center",
			outline: "none",
			background: "rgba(255, 255, 255, 0.3)",
			fontSize: "1rem",
			lineHeight: "30px",
			textTransform: "uppercase",
			border: "none",
			textDecoration: "none",
		},
	},
	root: {},
	movieImage: {
		"& img": {
			width: "65%",
			display: "block",
		},
	},
	swatchContainer: {
		display: "flex",
		justifyContent: "space-between",
		width: "65%",
		height: 100,
		paddingTop: 2,
	},
	paletteSwatches: {
		height: "100%",
		width: "calc(98%/6)",
		justifyContent: "center",
	},
};

class Palette extends Component {
	constructor(props) {
		super(props);

		this.state = {
			level: 500,
			format: "hex",
			colors: [],
		};
		this.changeLevel = this.changeLevel.bind(this);
		this.changeFormat = this.changeFormat.bind(this);
		this.getColors = this.getColors.bind(this);
		this.renderSwatches = this.renderSwatches.bind(this);
	}

	changeLevel(level) {
		this.setState({ level });
	}

	changeFormat(val) {
		this.setState({ format: val });
	}
	getColors(colors) {
		this.setState((state) => ({
			colors: [...colors],
		}));
	}
	renderSwatches() {
		const { colors } = this.state;
		return colors.map((color, id) => {
			return (
				<div
					key={id}
					style={{ backgroundColor: color }}
					className={this.props.classes.paletteSwatches}
				/>
			);
		});
	}

	render() {
		const { classes } = this.props;
		// const { colors, paletteName, emoji, id } = this.props.palette;
		// const { level, format } = this.state;

		// const colorBoxes = colors[level].map((color) => (
		// 	<ColorBox
		// 		background={color[format]}
		// 		name={color.name}
		// 		key={color.id}
		// 		colorId={color.id}
		// 		paletteId={id}
		// 		showingFullPalette
		// 	/>
		// ));

		return (
			<div className={classes.Palette}>
				<Navbar
					// level={level}
					changeLevel={this.changeLevel}
					handleChange={this.changeFormat}
					showSlider
				/>
				<div className={classes.Colors}>
					<ColorExtractor getColors={this.getColors} maxColors={256}>
						<img
							src={`https://image.tmdb.org/t/p/original${this.props.palette.backdrop}`}
							alt={`from the movie ${this.props.title}`}
						/>
					</ColorExtractor>
					<div className={this.props.classes.swatchContainer}>
						{this.renderSwatches()}
					</div>
				</div>
				{/* <PaletteFooter paletteName={paletteName} /> */}
			</div>
		);
	}
}

export default withStyles(styles)(Palette);
