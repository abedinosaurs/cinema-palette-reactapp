import React from "react";
import chroma from "chroma-js";
import { ColorExtractor } from "./react-color-extractor";
import { withStyles } from "@material-ui/styles";
import { Swatches, renderSwatches } from "./utils";
import { generatePalette } from "./ColorHelpers";

const styles = {
	container: {
		// postion: "absolute",
		// top: 30,
		display: "flex",
		// justifyContent: "center",
		// flexWrap: "wrap",
		alignItems: "center",
		flexDirection: "column",
		height: "100vh",
		width: "100%",
	},
	image: {
		height: "80%",
		width: "70%",
		marginBottom: 4,
	},
	swatches: {
		display: "flex",
		width: "100%",
		wrap: "none",
	},
};
class ColorExtractorFull extends React.Component {
	state = { colors: [] };

	getColors = (colors) =>
		this.setState((state) => ({ colors: [...state.colors, ...colors] }));

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<React.Fragment>
					<img className={classes.image} src={this.props.IMAGE} alt="" />
					<ColorExtractor src={this.props.IMAGE} getColors={this.getColors} />
					<Swatches
						classname={classes.swatches}
						colors={this.state.colors}
						renderSwatches={renderSwatches}
					/>
				</React.Fragment>
			</div>
		);
	}
}

export default withStyles(styles)(ColorExtractorFull);
