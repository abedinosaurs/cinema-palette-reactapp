import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import Carousel1 from "react-material-ui-carousel";
import FrontPageCarosuel from "./FrontPageCarosuel";
import Icon from "@material-ui/core/Icon";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import Carousel2 from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
// import styles from "./styles/PaletteListStyles";

const styles = {
	root: {
		backgroundColor: "black",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
	},
	container: {
		width: "90%",
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column",
		flexWrap: "wrap",
	},
	nav: {
		zIndex: 20,
		position: "relative",
		top: 0,
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		color: "white",
		alignItems: "center",
		"& a": {
			color: "white",
			fontWeight: "600",
		},
	},
	palettes: {
		postion: "absolute",
		zIndex: 20,
		marginTop: "80vh",
		height: "100%",
		boxSizing: "border-box",
		display: "flex",
		flexWrap: "wrap",
		width: "90%",
		justifyContent: "flex-start",
		paddingBottom: "50vh",
		"& h3": {
			color: "white",
			alignItems: "flex-start",
			textDecoration: "underline",
		},
	},
	titlePageHeader: {
		zIndex: 0,
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "85vh",
		overflow: "hidden",
	},
	Carousel2: {
		position: "absolute",
		left: 0,
		width: "calc(100vw-10px)",
		height: "55vh",
		width: "100%",
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

	render() {
		const { palettes, classes } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1>
							CinemaPalettes <i class="fas fa-ticket-alt"></i>
						</h1>
						<Link to="/palette/new">Find your Favourite Movie!</Link>
					</nav>
					<div className={classes.titlePageHeader}>
						<Carousel1
							autoPlay={true}
							animation="fade"
							indicators={true}
							navButtonsAlwaysVisible={true}
						>
							{palettes.map((p) => (
								<FrontPageCarosuel
									{...p}
									handleClick={() => this.goToPalette(p.id)}
									// onChange={this.handleChange}
									key={p.id}
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
							arrows
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
							{palettes.map((p) => (
								<MiniPalette
									image={p.backdrop}
									title={p.title}
									handleClick={() => this.goToPalette(p.id)}
									key={p.id}
								/>
							))}
						</Carousel2>
					</div>
				</div>
			</div>
		);
	}
}
export default withStyles(styles)(PaletteList);
