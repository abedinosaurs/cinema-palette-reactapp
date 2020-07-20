import React, { Component } from "react";
import styles from "./styles/ColorBoxStyles";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

class ColorBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			copied: false,
		};
		this.changeCopyState = this.changeCopyState.bind(this);
	}

	//Change state to show the COPIED animation
	changeCopyState() {
		this.setState({ copied: true }, () => {
			setTimeout(() => this.setState({ copied: false }), 1500);
		});
	}

	render() {
		const {
			name,
			paletteId,
			colorId,
			showingFullPalette,
			classes,
		} = this.props;
		const backgroundColor = this.props.style.backgroundColor.trim();
		const { copied } = this.state;

		return (
			<CopyToClipboard text={backgroundColor} onCopy={this.changeCopyState}>
				<div
					style={{ backgroundColor: backgroundColor }}
					className={classes.ColorBox}
				>
					<div
						style={{ backgroundColor: backgroundColor }}
						className={`${classes.copyOverlay} ${
							copied && classes.showOverlay
						}`}
					/>
					<div
						className={`${classes.copyMessage} ${
							copied && classes.showMessage
						}`}
					>
						<h1>copied!</h1>
						<p className={classes.copyText}>{backgroundColor}</p>
					</div>
					<div>
						<div className={classes.boxContent}>
							<span className={classes.colorName}>{name}</span>
						</div>
						<button className={classes.copyButton}>Copy</button>
					</div>
					{showingFullPalette && (
						<Link
							to={`/palette/${paletteId}/${colorId}`}
							onClick={(e) => e.stopPropagation()}
						>
							<span className={classes.seeMore}>MORE</span>
						</Link>
					)}
				</div>
			</CopyToClipboard>
		);
	}
}

export default withStyles(styles)(ColorBox);
