import React from "react";
import { ColorExtractor } from "react-color-extractor";
import { withStyles } from "@material-ui/core/styles";
import ReactHoverObserver from "react-hover-observer";

const styles = {
	root: {},
	movieImage: {
		width: "450px",
		height: "",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexWrap: "wrap",
		"& img": {
			width: "100%",
			position: "relative",
			zIndex: -1,
			display: "block",
		},
	},
	hoveredImage: {
		position: "absolute",
		backgroundColor: "black",
		zIndex: 10,
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
	componentDidMount() {
		console.log(this.props);
	}

	getColors(colors) {
		this.setState((state) => ({ colors: [...colors] }));
	}

	render() {
		return (
			<div className={this.props.classes.root}>
				<div className={this.props.classes.movieImage}>
					>
					<ColorExtractor getColors={this.getColors} maxColors={256}>
						<img
							src={`https://image.tmdb.org/t/p/w780${this.props.image}`}
							alt={`Image from the movie ${this.props.title}`}
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
