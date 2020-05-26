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
