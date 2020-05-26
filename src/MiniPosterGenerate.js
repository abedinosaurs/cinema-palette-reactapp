import React from "react";
import { ColorExtractor } from "react-color-extractor";
import { withStyles } from "@material-ui/core/styles";

const styles = {
	root: {},
	movieImage: {
		background: "none",
		width: "450px",
		height: "90%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexWrap: "wrap",
		boxShadow: "-10px 10px 7px 2px rgba(0,0,0,0.7)",
		marginBottom: 15,
		"& img": {
			width: "100%",
			position: "relative",
			zIndex: -1,
			display: "block",
			borderRadius: "10px 10px 0px 0px",
		},
		"& h2": {
			color: "white",
			position: "absolute",
			top: "35%",
			left: "50%",
			transform: "translate(-50%, -50%)",
			fontFamily: "Notable, sans-serif",
			textAlign: "center",
			textShadow: "-3px 3px 3px #000000",
		},
	},
	swatchContainer: {
		display: "flex",
		justifyContent: "space-between",
		width: "100%",
		height: 50,
	},
	paletteSwatches: {
		height: "100%",
		width: "calc(100%/6)",
		justifyContent: "center",
	},
};

class ColorGenerate extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			colors: [],
		};
		this.renderSwatches = this.renderSwatches.bind(this);
		this.getColors = this.getColors.bind(this);
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

	getColors(colors) {
		this.setState((state) => ({ colors: [...colors] }));
	}

	render() {
		return (
			<div className={this.props.classes.root}>
				<div className={this.props.classes.movieImage}>
					<h2>{this.props.title}</h2>
					<ColorExtractor getColors={this.getColors} maxColors={256}>
						<img
							src={`https://image.tmdb.org/t/p/w780${this.props.image}`}
							alt={`from the movie ${this.props.title}`}
						/>
					</ColorExtractor>
					<div className={this.props.classes.swatchContainer}>
						{this.renderSwatches()}
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(ColorGenerate);
