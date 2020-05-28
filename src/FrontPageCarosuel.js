import React from "react";
import { Link } from "react-router-dom";
import { ColorExtractor } from "react-color-extractor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/FrontPageCarosuelStyles";
import { filmReel } from "./utils";

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
		const { classes, poster, backdrop, title, handleClick } = this.props;
		return (
			<div className={classes.root} onClick={this.handleClick}>
				<div className={classes.swatchContainer}>{this.renderSwatches()}</div>
				<div className={classes.movieImage}>
					<div className="overlay"></div>
					<ColorExtractor
						getColors={this.getColors}
						maxColors={256}
						onChnage={this.handleChange}
					>
						<img
							src={`https://image.tmdb.org/t/p/w780${backdrop}`}
							alt={`From the movie ${title}`}
						/>
					</ColorExtractor>

					<h1 onClick={handleClick}>{title}</h1>
				</div>
				<img
					className={classes.posterImage}
					src={`https://image.tmdb.org/t/p/w780${poster}`}
					alt=""
				/>
				<div className={classes.cinemaPalette}>
					<h1>Welcome to CinemaPalettes {filmReel}</h1>
					<h4>
						Easily explore the color palettes from your favourite films.
						<span>
							<Link to="/palette/new">Click here </Link>
						</span>
						to start searching, or see below for some of our favourites.
					</h4>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(FrontPageCaosuel);
