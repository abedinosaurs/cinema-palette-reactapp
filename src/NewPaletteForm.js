import React, { Component } from "react";
import PaletteFormNav from "./PaletteFormNav";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import ColorGenerate from "./ColorGenerateDisplay";
import axios from "axios";
import Carousel from "react-material-ui-carousel";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import styles from "./styles/NewPaletteFormStyles";

class NewPaletteForm extends Component {
	static defaultProps = {
		maxColors: 20,
	};
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
			noInput: false,
			title: "",
			movieID: "",
			poster: "",
			release: "",
			backdrop: "",
			moreImages: [],
			morePosters: [],
			colors: [],
		};
		this.handleChange = this.handleChange.bind(this);
		this.savePalette = this.savePalette.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.moreScreenShots = this.moreScreenShots.bind(this);
	}
	// ON Load choose a random movie
	componentDidMount = () => {
		this.randomMovie();
	};

	//chooses the random movies
	randomMovie = async () => {
		//chooses random page (in the range that is full of movies)
		let randPage = Math.floor(Math.random() * 100);
		//chooses random entry on page
		let randIdx = Math.floor(Math.random() * 20);
		//finds page
		let startingMovie = await axios.get(
			`https://api.themoviedb.org/3/discover/movie?api_key=d5c94178df3eba5299cbb75cffff17b3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${randPage}&with_original_language=en`
		);
		//uses the random index on that page
		let info = startingMovie.data.results[randIdx];
		this.setState({
			movieID: info.id,
			title: info.title,
			poster: info.poster_path,
			release: info.release_date,
			backdrop: info.backdrop_path,
			isLoading: true,
		});
		//causes loading animation for 1.2 seconds to let page catch up
		setTimeout(() => {
			this.setState({ isLoading: false });
		}, 1200);
		// loads more screenshots now that we have the movie ID
		this.moreScreenShots(this.state.movieID);
	};
	//this is for the search bar.
	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}

	savePalette(newPaletteName) {
		const newPalette = {
			colors: [],
			title: this.state.title,
			movieID: this.state.movieID,
			poster: this.state.poster,
			release: this.state.release,
			backdrop: this.state.backdrop,
			moreImages: this.state.moreImages,
			morePosters: this.state.morePosters,
			id: newPaletteName.toLowerCase().replace(/[^\w\s]/gi, ""),
		};
		//saves palette to array and then redirects to homepage
		this.props.savePalette(newPalette);
		this.props.history.push("/");
	}
	//now that we have the movie ID we can look up more screenshots on separate call.
	async moreScreenShots(id) {
		let screenShots = await axios.get(
			`https://api.themoviedb.org/3/movie/${id}/images?api_key=d5c94178df3eba5299cbb75cffff17b3`
		);
		let info = screenShots.data;
		if (info.backdrops.length > 1) {
			this.setState({
				moreImages: [...info.backdrops.slice(0, 4)],
				morePosters: [...info.posters.slice(0, 4)],
			});
			//if the movie that the user or the random movie function chooses doesn't have screenshots it will choose a new random movie.
		} else {
			this.randomMovie();
		}
	}

	async componentDidUpdate() {
		let screenShots = await axios.get(
			`https://api.themoviedb.org/3/movie/${this.state.movieID}/images?api_key=d5c94178df3eba5299cbb75cffff17b3`
		);
		let info = screenShots.data;
		this.setState({
			moreImages: [...info.backdrops],
			morePosters: [...info.posters],
		});
	}
	//this is coming from the search
	handleInput = (movie) => {
		this.setState({
			title: movie.title,
			movieID: movie.id,
			poster: movie.poster_path,
			release: movie.release_date,
			backdrop: movie.backdrop_path,
			isLoading: true,
		});
		setTimeout(() => {
			this.setState({ isLoading: false });
		}, 1200);
	};

	render() {
		const { classes } = this.props;
		let loadingClass = classes.loader;
		if (!this.state.isLoading) {
			loadingClass = classes.hideLoader;
		}
		let displayLoad;
		if (this.state.isLoading) {
			displayLoad = classes.displayLoader;
		}
		return (
			<div className={classes.root}>
				{/*
			 ==================PALETTE NAV Starts========================== 
			 */}
				<PaletteFormNav
					title={this.state.title}
					handleInput={this.handleInput}
					year={this.state.release}
					randomMovie={this.randomMovie}
					handleSubmit={this.savePalette}
				/>

				{/* 				
			 ================= MAIN CONTENT STARTS ========================== 
			  */}
				<main className={classNames(classes.content)}>
					<div className={loadingClass}>
						<Loader
							type="Oval"
							color="#c4cace"
							height={300}
							width={300}
							timeout={3000} //3 secs
						/>
					</div>

					<div className={displayLoad}>
						{this.state.moreImages === [] ? (
							<h1 style={{ margin: "15% 30%" }}>
								Something has gone wrong,
								<br /> please search for a new movie above
							</h1>
						) : (
							<Carousel
								autoPlay={false}
								animation="fade"
								indicators={false}
								navButtonsAlwaysVisible={true}
							>
								{this.state.moreImages.map((item) => (
									<ColorGenerate
										image={item.file_path}
										title={this.state.title}
									/>
								))}
							</Carousel>
						)}
					</div>
				</main>
			</div>
		);
	}
}

export default withStyles(styles)(NewPaletteForm);
