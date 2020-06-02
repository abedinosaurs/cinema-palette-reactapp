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
import styles from "./styles/PaletteListStyles";

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
					<div className={classes.titlePageHeader}>
						<Carousel1
							autoPlay={false}
							interval={3000}
							animation="fade"
							timeout={600}
							indicators={false}
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
								600: {
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
										<h1>Click here to add your first movie!</h1>
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
