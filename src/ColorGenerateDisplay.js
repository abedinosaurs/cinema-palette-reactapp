import React from "react";
import { ColorExtractor } from "react-color-extractor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/ColorGenerateDisplayStyles";

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
			console.log(color);
			return (
				<div
					key={id}
					name={color.name}
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
