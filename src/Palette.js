import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import { withStyles } from "@material-ui/styles";
import Carousel from "react-material-ui-carousel";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "./styles/PaletteStyles";
import ColorExtractorFull from "./ColorExtractorForMain";

class Palette extends Component {
	constructor(props) {
		super(props);

		this.state = {
			level: 500,
			format: "hex",
			colors: [],
			moreImages: [],
		};
		this.getColors = this.getColors.bind(this);
		this.renderSwatches = this.renderSwatches.bind(this);
		this.moreScreenShots = this.moreScreenShots.bind(this);
	}

	componentDidMount() {
		this.moreScreenShots();
		console.log(this.props.palette);
	}
	getColors(colors) {
		this.setState(() => ({
			colors: [...colors],
		}));
	}
	renderSwatches() {
		const { colors } = this.state;
		return colors.map((color) => {
			return (
				<div>
					<CopyToClipboard>
						<ColorBox
							style={{ backgroundColor: color }}
							name={color.name}
							className={this.props.classes.paletteSwatches}
						/>
					</CopyToClipboard>
				</div>
			);
		});
	}

	async moreScreenShots() {
		let screenShots = await axios.get(
			`https://api.themoviedb.org/3/movie/${this.props.palette.movieID}/images?api_key=d5c94178df3eba5299cbb75cffff17b3`
		);
		let info = screenShots.data;

		this.setState({
			moreImages: [...info.backdrops],
			morePosters: [...info.posters],
		});
	}

	setColor(color) {
		return `backgroundColor:${color}`;
	}

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.Palette}>
				<Navbar
					title={this.props.palette.title}
					changeLevel={this.changeLevel}
					handleChange={this.changeFormat}
					year={this.props.palette.release}
					showSlider
				/>
				<div className={classes.carousel}></div>
				<Carousel
					autoPlay={false}
					animation="fade"
					indicators={false}
					navButtonsAlwaysVisible={true}
				>
					{this.state.moreImages.map((item) => (
						<ColorExtractorFull
							IMAGE={`https://image.tmdb.org/t/p/original${item.file_path}`}
							title={this.state.title}
						/>
					))}
				</Carousel>
			</div>
		);
	}
}

export default withStyles(styles)(Palette);
