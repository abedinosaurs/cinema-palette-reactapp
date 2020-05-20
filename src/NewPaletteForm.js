import React, { Component } from "react";
import PaletteFormNav from "./PaletteFormNav";
import DraggableColorList from "./DraggableColorList";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import { arrayMove } from "react-sortable-hoc";
import ColorPickerForm from "./ColorPickerForm";
import ColorGenerate from "./ColorGenerateDisplay";
import SearchBoxForMovie from "./SearchBoxForMovie";
import axios from "axios";
import Carousel from "react-material-ui-carousel";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const styles = (theme) => ({
	root: {
		display: "flex",
	},
	content: {
		flexGrow: 1,
		overflow: "hidden",
		height: "98vh",
		marginTop: "2vh",
		width: "100w",

		// padding: theme.spacing.unit * 3,
		// transition: theme.transitions.create("margin", {
		// 	easing: theme.transitions.easing.sharp,
		// 	duration: theme.transitions.duration.leavingScreen,
	},

	container: {
		width: "90%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
	},
	buttons: {
		width: "100%",
	},
	button: {
		width: "50%",
	},
	loader: {
		height: "98vh",
		width: "100vw",
		marginTop: "2vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
});

class NewPaletteForm extends Component {
	static defaultProps = {
		maxColors: 20,
	};
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
			noInput: false,
			open: false,
			title: "",
			movieID: "",
			original_title: "",
			overview: "",
			poster: "",
			genre: [],
			release: "",
			backdrop: "",
			moreImages: [],
			morePosters: [],
			imdbID: "",
			runTime: "",
			tagline: "",
			rating: "",
		};
		this.addNewColor = this.addNewColor.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.savePalette = this.savePalette.bind(this);
		this.removeColor = this.removeColor.bind(this);
		this.clearColors = this.clearColors.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.moreScreenShots = this.moreScreenShots.bind(this);
		// this.moreInfo = this.moreInfo.bind(this);
	}

	componentDidMount = () => {
		this.randomMovie();
	};

	randomMovie = async () => {
		let randPage = Math.floor(Math.random() * 100);
		let randIdx = Math.floor(Math.random() * 20);
		let startingMovie = await axios.get(
			`https://api.themoviedb.org/3/discover/movie?api_key=d5c94178df3eba5299cbb75cffff17b3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${randPage}&with_original_language=en`
		);
		let info = startingMovie.data.results[randIdx];
		this.setState({
			movieID: info.id,
			title: info.title,
			original_title: info.original_title,
			overview: info.overview,
			poster: info.poster_path,
			genre: info.genre_ids,
			release: info.release_date,
			backdrop: info.backdrop_path,
			isLoading: true,
		});
		setTimeout(() => {
			this.setState({ isLoading: false });
		}, 1000);
		this.moreScreenShots(this.state.movieID);
	};

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	addNewColor(newColor) {
		this.setState({
			colors: [...this.state.colors, newColor],
		});
	}

	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}

	savePalette(newPaletteName) {
		const newPalette = {
			title: this.state.title,
			movieID: this.state.movieID,
			original_title: this.state.original_title,
			overview: this.state.overview,
			poster: this.state.poster,
			genre: this.state.genre,
			release: this.state.release,
			backdrop: this.state.backdrop,
			moreImages: this.state.moreImages,
			morePosters: this.state.morePosters,
			imdbID: this.state.imdbID,
			runTime: this.state.runTime,
			tagline: this.state.tagline,
			rating: this.state.rating,
			id: newPaletteName.toLowerCase().replace(/ /g, "-"),
		};
		this.props.savePalette(newPalette);
		this.props.history.push("/");
	}

	removeColor(colorName) {
		this.setState({
			colors: this.state.colors.filter((color) => color.name !== colorName),
		});
	}

	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ colors }) => ({
			colors: arrayMove(colors, oldIndex, newIndex),
		}));
	};

	clearColors() {
		this.setState({ colors: [] });
	}

	async moreScreenShots(id) {
		let screenShots = await axios.get(
			`https://api.themoviedb.org/3/movie/${id}/images?api_key=d5c94178df3eba5299cbb75cffff17b3`
		);
		let info = screenShots.data;
		this.setState({
			moreImages: [...info.backdrops],
			morePosters: [...info.posters],
		});
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

	handleInput = (movie) => {
		{
			movie &&
				this.setState({
					title: movie.title,
					movieID: movie.id,
					original_title: movie.original_title,
					overview: movie.overview,
					poster: movie.poster_path,
					genre: movie.genre_ids,
					release: movie.release_date,
					backdrop: movie.backdrop_path,
				});
		}
	};

	render() {
		const { classes, maxColors, palettes } = this.props;
		const { open, colors } = this.state;

		return (
			<div className={classes.root}>
				{/*
			 ==================PALETTE NAV Starts========================== 
			 */}
				<PaletteFormNav
					open={open}
					title={this.state.title}
					handleInput={this.handleInput}
					year={this.state.release}
					randomMovie={this.randomMovie}
					handleSubmit={this.savePalette}
				/>
				{/*
			 ==================Drawer Starts========================== 
			 {/* */}
				{/* <Drawer
					className={classes.drawer}
					variant="persistent"
					anchor="left"
					open={open}
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<div>
						<IconButton onClick={this.handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />
					<div className={classes.container}>
						<Typography variant="h4" gutterBottom>
							Design Your Palette
						</Typography>
						<div className={classes.buttons}>
							<Button
								variant="contained"
								color="secondary"
								onClick={this.clearColors}
								className={classes.button}
							>
								Clear Palette
							</Button>
							<Button
								variant="contained"
								className={classes.button}
								color="primary"
								onClick={this.addRandomColor}
							>
								Random Color
							</Button>
						</div>
						<ColorPickerForm addNewColor={this.addNewColor} colors={colors} />
					</div>
				</Drawer> */}
				*/}
				{/*
			 ================= MAIN CONTENT STARTS ========================== 
			 */}
				<main className={classNames(classes.content)}>
					{this.state.isLoading === true ? (
						<div className={classes.loader}>
							<Loader
								type="Oval"
								color="#c4cace"
								height={300}
								width={300}
								timeout={3000} //3 secs
							/>
						</div>
					) : (
						<div className={classes.paletteContainer}>
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
					)}
				</main>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
