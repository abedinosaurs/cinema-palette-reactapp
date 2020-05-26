import React, { Component } from "react";
import MiniColorGenerate from "./MiniPosterGenerate";
import { withStyles } from "@material-ui/styles";
// import styles from "./styles/MiniPaletteStyles";

const styles = {
	root: {
		width: "30%",
	},
	title: {},
	generator: {},
};

class MiniPalette extends Component {
	constructor(props) {
		super(props);

		this.state = {
			colors: [],
		};
		this.setMiniColors = this.setMiniColors.bind(this);
	}

	setMiniColors(colors) {
		this.setState((state) => ({ colors: [...colors] }));
	}

	render() {
		return (
			<div className={this.props.root} onClick={this.props.handleClick}>
				<MiniColorGenerate
					className={this.props.generator}
					image={this.props.image}
					title={this.props.title}
					setMiniColors={this.setMiniColors}
				/>
			</div>
		);
	}
}

export default withStyles(styles)(MiniPalette);
