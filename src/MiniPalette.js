import React, { Component } from "react";
import MiniColorGenerate from "./MiniColorGenerate";
import { withStyles } from "@material-ui/styles";

const styles = {
	// root: {
	// 	width: "30%",
	// },
	// title: {},
	// generator: {},
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
		const { handleClick, generator, image, title } = this.props;
		return (
			<div onClick={handleClick}>
				<MiniColorGenerate
					className={generator}
					image={image}
					title={title}
					setMiniColors={this.setMiniColors}
				/>
			</div>
		);
	}
}

export default withStyles(styles)(MiniPalette);
