import React, { Component } from "react";
import "rc-slider/assets/index.css";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/NavbarStyles";
import { filmReel } from "./utils";

class Navbar extends Component {
	render() {
		const { classes } = this.props;
		return (
			<nav className={classes.Navbar}>
				<div className={classes.logo}>
					<Link to="/">CinemaPalettes {filmReel}</Link>
				</div>
				<h1>
					{this.props.title} {` (${this.props.year.substring(0, 4)})`}
				</h1>
			</nav>
		);
	}
}

export default withStyles(styles)(Navbar);
