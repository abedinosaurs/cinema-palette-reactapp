import React from "react";
import { ColorExtractor } from "react-color-extractor";
import { withStyles } from "@material-ui/core/styles";

const styles = {
	root: {},
	movieImage: {
		marginTop: "45px",
		width: "100%",
		height: "80%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexWrap: "wrap",
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

class ColorGenerate extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			colors: [],
			backgroundImage: "",
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
			backgroundImage: `https://image.tmdb.org/t/p/w780${this.props.backdrop}`,
		}));
	}

	render() {
		return (
			<div className={this.props.classes.root}>
				<div className={this.props.classes.movieImage}>
					<ColorExtractor getColors={this.getColors} maxColors={256}>
						<img
							src={`https://image.tmdb.org/t/p/original${this.props.image}`}
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
