import React from "react";
import { Link } from "react-router-dom";
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
			top: 0,
			paddingTop: "",
			width: "75%",
			height: "90%",
		},
		"& h1": {
			position: "absolute",
			right: "10vw",
			top: "60vh",
			color: "white",
			textShadow: "-2px 2px 2px #000000",
			zIndex: 20,
			fontFamily: "Notable, sans-serif",
			letterSpacing: "4px",
			cursor: "pointer",
		},
	},
	swatchContainer: {
		zIndex: 20,

		border: "5px solid white",
		backgroundColor: "white",
		position: "absolute",
		top: "calc(100% - 167px)",
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
		background: " rgba(0, 0, 0, 0.5)",
		color: "#f1f1f1",
		width: "100%",
	},
	posterImage: {
		position: "absolute",
		zIndex: -1,
		left: 150,
		top: 0,
		height: "80%",
	},
	cinemaPalette: {
		position: "absolute",
		color: "white",
		top: 310,
		left: 20,
		zIndex: 20,
		textShadow: "-3px 3px 3px #000000",
		width: "30%",

		"& h1": {
			marginBottom: 0,
			fontFamily: "Oswald, sans-serif",
			letterSpacing: "2px",
		},
		"& h4": {
			marginTop: ".33rem",
			marginLeft: ".25rem",
			width: "90%",
		},
		"& svg": {
			position: "relative",
			paddingLeft: ".25rem",
			top: 12,
			fill: "white",
			height: "3rem",
			margin: "none",
		},
		"& a": {
			color: "white",
		},
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
		const filmReel = (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="499"
				viewBox="0 0 498.6 498.6"
			>
				<path d="M43.7 223c-0.9-1.3-1.3-3-1-4.6 5.5-29.4 21.6-56.3 44.9-75 1.3-1 2.9-1.5 4.5-1.3 1.6 0.2 3.1 1.1 4.1 2.4l30.3 40.8c1.5 2 1.5 4.6 0.4 6.6 -0.3 0.6-0.8 1.1-1.3 1.6 -10.6 8.9-18 21.2-20.8 35 -0.6 3.1-3.6 5.2-6.8 4.7l-50.1-7.7C46.1 225.2 44.7 224.3 43.7 223zM102.4 264.9c-0.1-0.7-0.4-1.4-0.7-2 -1.2-2-3.4-3.2-5.9-3l-50.4 5.8c-1.6 0.2-3.1 1-4.1 2.3 -1 1.3-1.4 2.9-1.1 4.6 4.5 29.5 19.8 56.9 42.5 76.4 1.2 1.1 2.8 1.6 4.5 1.4 1.6-0.2 3.1-1 4.1-2.2l31.7-39.6c2-2.5 1.7-6.1-0.7-8.2C111.8 291.1 104.8 278.6 102.4 264.9zM201 324.6c-1.2-3-4.5-4.5-7.5-3.5 -13.4 4.5-27.7 4.2-40.7-0.5 -0.7-0.3-1.4-0.4-2-0.4 -2.3 0-4.5 1.4-5.5 3.6l-20.2 46.6c-0.6 1.5-0.7 3.2 0 4.7 0.6 1.5 1.8 2.7 3.4 3.3 27.8 10.8 59.2 11.3 87.4 1.3 1.5-0.5 2.8-1.7 3.5-3.1 0.7-1.5 0.7-3.2 0.1-4.7L201 324.6zM308 275.2c-0.9-1.3-2.4-2.2-4-2.5l-50.1-7.7c-3.2-0.5-6.2 1.6-6.8 4.7 -2.8 13.8-10.2 26.1-20.8 35 -0.6 0.5-1 1-1.3 1.6 -1.2 2-1.1 4.6 0.4 6.6l30.3 40.8c1 1.3 2.4 2.2 4.1 2.4 1.6 0.2 3.2-0.3 4.5-1.3 23.3-18.7 39.4-45.6 44.9-75C309.3 278.2 308.9 276.6 308 275.2zM249.3 233.3c0.1 0.7 0.4 1.4 0.7 2 1.2 2 3.4 3.2 5.9 3l50.4-5.8c1.6-0.2 3.1-1 4.1-2.3 1-1.3 1.4-2.9 1.2-4.5 -4.5-29.5-19.8-56.9-42.5-76.4 -1.2-1.1-2.8-1.6-4.5-1.4 -1.6 0.2-3.1 1-4.1 2.2l-31.7 39.6c-2 2.5-1.7 6.1 0.7 8.2C239.9 207.1 246.9 219.7 249.3 233.3zM150.7 173.6c1.2 3 4.5 4.5 7.5 3.5 13.4-4.4 27.7-4.2 40.7 0.5 0.7 0.2 1.4 0.4 2 0.4 2.3 0 4.5-1.4 5.5-3.6l20.2-46.6c0.7-1.5 0.7-3.2 0-4.7 -0.6-1.5-1.8-2.7-3.4-3.3 -27.8-10.8-59.2-11.3-87.4-1.3 -1.5 0.5-2.8 1.7-3.5 3.2 -0.7 1.5-0.7 3.2-0.1 4.7L150.7 173.6zM176.7 218.3c-16.8 0-30.4 13.6-30.4 30.4 0 16.8 13.6 30.4 30.4 30.4 16.8 0 30.5-13.6 30.5-30.4C207.1 231.9 193.5 218.3 176.7 218.3zM498.6 386.9l-22.4 36.3h-302.3C78 423.2 0 345.2 0 249.3 0 153.4 78 75.4 173.9 75.4c95.9 0 173.9 78 173.9 173.9 0 55.9-26.6 105.8-67.7 137.6H498.6zM441.5 395.9h13.1l5.5-6.5h-13.1L441.5 395.9zM412.4 395.9h13.1l5.5-6.5h-13.1L412.4 395.9zM385.9 395.9h13.1l5.5-6.5h-13.1L385.9 395.9zM385.6 409.6h76l8.4-12.6H394L385.6 409.6zM357.8 395.9h13.1l5.4-6.5h-13.1L357.8 395.9zM328.7 395.9h13.1l5.4-6.5h-13.1L328.7 395.9zM298.1 395.9h13.1l5.4-6.5h-13.1L298.1 395.9zM173.9 411.2c89.3 0 161.9-72.6 161.9-161.9 0-89.3-72.6-161.9-161.9-161.9 -89.3 0-161.9 72.6-161.9 161.9C12 338.6 84.6 411.2 173.9 411.2zM262.7 413.1h-14l-5.6 6.9h14L262.7 413.1zM268.9 395.9h13.1l5.4-6.5h-13.1L268.9 395.9zM293.7 413.1h-14l-5.6 6.9h14L293.7 413.1zM326.5 413.1h-14l-5.6 6.9h14L326.5 413.1zM357.5 413.1h-14l-5.6 6.9h14L357.5 413.1zM364 397h-76l-8.4 12.6h76L364 397zM387.4 413.1h-14l-5.6 6.9h14L387.4 413.1zM415.7 413.1H401.7l-5.6 6.9h14L415.7 413.1zM446.8 413.1h-14l-5.6 6.9h14L446.8 413.1zM477.8 413.1H463.9l-5.6 6.9h14L477.8 413.1zM483.8 395.9l5.4-6.5h-13.1l-5.4 6.5H483.8z" />
			</svg>
		);

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

					<h1 onClick={this.props.handleClick}>{this.props.title}</h1>
				</div>
				<img
					className={this.props.classes.posterImage}
					src={`https://image.tmdb.org/t/p/w780${this.props.poster}`}
					alt=""
				/>
				<div className={this.props.classes.cinemaPalette}>
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
