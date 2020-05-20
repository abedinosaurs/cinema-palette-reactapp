import React from "react";
import { ColorExtractor } from "react-color-extractor";
import { withStyles } from "@material-ui/core/styles";

const styles = {
	root: {
		background:
			"linear-gradient(90deg, rgba(3,2,3,1) 8%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 77%, rgba(0,0,0,1) 100%)",
	},
	movieImage: {
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",

		"& img": {
			zIndex: -1,
			position: "relative",
			right: 0,
			paddingTop: "",
			width: "75%",
			height: "",
		},
		"& h1": {
			position: "absolute",
			left: "5vw",
			top: "60vh",
			color: "white",
			textShadow: "2px 2px 2px #9C9C9C",
			zIndex: 20,
		},
	},
	swatchContainer: {
		zIndex: 20,

		border: "5px solid white",
		backgroundColor: "white",
		position: "absolute",
		top: "70vh",
		display: "flex",
		justifyContent: "space-between",
		width: "100%",
		height: 100,
	},
	paletteSwatches: {
		height: "100%",
		width: "calc(98%/6)",
		justifyContent: "center",
	},
	overlay: {
		position: "absolute",
		zIndex: 100,
		top: 40,
		background: "rgb(0, 0, 0)",
		background: " rgba(0, 0, 0, 0.5)",
		color: "#f1f1f1",
		width: "100%",
	},
	posterImage: {
		position: "absolute",
		zIndex: -1,
		left: 150,
		top: 0,
		height: "70vh",
	},
};

class FrontPageCaosuel extends React.Component {
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
		this.setState((state) => ({
			colors: [...colors],
		}));
	}

	render() {
		return (
			<div className={this.props.classes.root} onClick={this.handleClick}>
				<div className={this.props.classes.swatchContainer}>
					{this.renderSwatches()}
				</div>
				<div className={this.props.classes.movieImage}>
					<div className="overlay"></div>
					<ColorExtractor
						getColors={this.getColors}
						maxColors={256}
						onChnage={this.handleChange}
					>
						<img
							src={`https://image.tmdb.org/t/p/w780${this.props.backdrop}`}
							alt={`From the movie ${this.props.title}`}
						/>
					</ColorExtractor>
					<h1>{this.props.title}</h1>
				</div>
				<img
					className={this.props.classes.posterImage}
					src={`https://image.tmdb.org/t/p/w780${this.props.poster}`}
					alt=""
				/>
			</div>
		);
	}
}

export default withStyles(styles)(FrontPageCaosuel);
