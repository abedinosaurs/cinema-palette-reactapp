import React from "react";
import { ColorExtractor } from "./react-color-extractor";
import { withStyles } from "@material-ui/styles";
import { Swatches, renderSwatches } from "./utils";
import styles from "./styles/ColorExtractorForMainStyles";
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
