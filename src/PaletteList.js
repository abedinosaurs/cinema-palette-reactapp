import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import Carousel1 from "react-material-ui-carousel";
import FrontPageCarosuel from "./FrontPageCarosuel";
import Carousel2 from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Button from "@material-ui/core/Button";
import Footer from "./Footer";
const styles = {
	root: {
		backgroundColor: "#fffff2",
		// position: "relative",
		backgroundSize: "cover",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
		fontFamily: "Roboto,Helvetica, Arial, sans-serif",
	},
	container: {
		width: "100%",
		display: "flex",
		alignItems: "space-between",
		flexDirection: "column",
		flexWrap: "wrap",
	},
	// nav: {
	// 	zIndex: 20,
	// 	position: "relative",
	// 	top: 0,
	// 	display: "flex",
	// 	width: "100%",
	// 	justifyContent: "space-between",
	// 	color: "white",
	// 	alignItems: "center",
	// 	"& a": {
	// 		postion: "relative",
	// 		top: 10,
	// 		color: "white",
	// 		fontWeight: "600",
	// 	},
	// 	"& svg": {
	// 		position: "relative",
	// 		paddingLeft: "0.5rem",
	// 		top: 12,

	// 		fill: "white",
	// 		height: "3rem",
	// 		margin: "none",
	// 	},
	// },
	palettes: {
		postion: "absolute",
		zIndex: 1,
		marginTop: "90vh",
		height: "100%",
		boxSizing: "border-box",
		display: "flex",
		flexWrap: "wrap",
		width: "90%",
		justifyContent: "flex-start",
		// paddingBottom: "50vh",
		"& h3": {
			marginBottom: 0,
			color: "black",
			alignItems: "flex-start",
			textDecoration: "underline",
		},
	},
	titlePageHeader: {
		zIndex: 1,
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "85vh",
		overflow: "hidden",
	},
	Carousel2: {
		zIndex: 1,
		position: "absolute",
		left: 0,
		height: "55vh",
		width: "100%",
		cursor: "pointer",
	},
	yourpalletes: {
		position: "relative",
		zIndex: 1,
		height: "100%",
		boxSizing: "border-box",
		display: "flex",
		flexWrap: "wrap",
		width: "100%",
		justifyContent: "flex-start",
		paddingBottom: 200,
	},

	yourText: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",

		"& h3": {
			// marginBottom: 0,
			color: "black",
			textDecoration: "underline",
		},
		"& a": {
			padding: 0,
			margin: 0,
		},
	},
};

class PaletteList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			backgroundImage: "",
		};
	}

	goToPalette(id) {
		this.props.history.push(`/palette/${id}`);
	}

	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}
	findSlidesPerPage() {
		return (this.props.newPalettes.length = 0
			? 1
			: (this.props.newPaletteslength = 1
					? 1
					: (this.props.newPaletteslength = 2 ? 2 : 3)));
	}

	render() {
		const { sitePalettes, classes, newPalettes } = this.props;
		const titlePalettes = [
			...this.props.newPalettes,
			...this.props.sitePalettes,
		];
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						{/* <h1>
							CinemaPalettes
							{filmReel}
						</h1>
						<Link to="/palette/new">Find your Favourite Movie!</Link> */}
					</nav>
					<div className={classes.titlePageHeader}>
						<Carousel1
							autoPlay={true}
							interval={3000}
							animation="fade"
							timeout={600}
							// indicators={true}
							// navButtonsAlwaysVisible={true}
						>
							{titlePalettes.map((p) => (
								<FrontPageCarosuel
									{...p}
									key={p.id}
									handleClick={() => this.goToPalette(p.id)}
								/>
							))}
						</Carousel1>
					</div>
					<div className={classes.palettes}>
						<h3>Explore Some of Our Favourite Palettes : </h3>
						<Carousel2
							className={classes.Carousel2}
							centered
							stopAutoPlayOnHover
							infinite
							slidesPerPage={3}
							addArrowClickHandler
							arrowRight={<i class="fas fa-forward fa-2x"></i>}
							arrowLeft={<i class="fas fa-backward fa-2x"></i>}
							breakpoints={{
								640: {
									slidesPerPage: 1,
									arrows: false,
								},
								900: {
									slidesPerPage: 2,
									arrows: false,
								},
							}}
						>
							{sitePalettes.map((p) => (
								<MiniPalette
									image={p.backdrop}
									title={p.title}
									handleClick={() => this.goToPalette(p.id)}
									key={p.id}
								/>
							))}
						</Carousel2>
					</div>
					<div className={classes.yourText}>
						<h3>Your Saved Palettes:</h3>
						<Link to="/palette/new">
							<Button size="small" variant="contained">
								Add New Movie to Your List
							</Button>{" "}
						</Link>
					</div>
					<div className={classes.yourpalletes}>
						<Carousel2
							className={classes.Carousel2}
							centered
							stopAutoPlayOnHover
							infinite
							slidesPerPage={newPalettes.length >= 3 ? 3 : 1}
							addArrowClickHandler
							arrowRight={<i class="fas fa-forward fa-2x"></i>}
							arrowLeft={<i class="fas fa-backward fa-2x"></i>}
							breakpoints={{
								640: {
									slidesPerPage: 1,
									arrows: false,
								},
								900: {
									slidesPerPage: 2,
									arrows: false,
								},
							}}
						>
							{newPalettes.length >= 1 ? (
								newPalettes.map((p) => (
									<MiniPalette
										image={p.backdrop}
										title={p.title}
										handleClick={() => this.goToPalette(p.id)}
										key={p.id}
									/>
								))
							) : (
								<div
									style={{
										height: "100%",
										width: "100%",

										textAlign: "center",
									}}
								>
									<Link style={{ color: "black" }} to="/palette/new">
										<h1>Click here to add your favourite movies!</h1>
									</Link>
								</div>
							)}
						</Carousel2>
					</div>

					<Footer className={classes.footer} />
				</div>
			</div>
		);
	}
}
export default withStyles(styles)(PaletteList);
