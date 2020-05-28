import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/FooterStyles";
import { filmReel } from "./utils";

class Footer extends Component {
	render() {
		return (
			<div>
				<footer className={this.props.classes.footer}>
					<h3>
						CinemaPalettes
						{filmReel}
					</h3>
					<p>
						Designed and bulit by:{" "}
						<a
							style={{ color: "black" }}
							href="mailto: jason.a.mckenzie@gmail.com"
						>
							Jason McKenzie
						</a>
					</p>
				</footer>
			</div>
		);
	}
}

export default withStyles(styles)(Footer);
