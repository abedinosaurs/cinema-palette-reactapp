import React from "react";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/styles";
import { SortableElement } from "react-sortable-hoc";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = {
	root: {
		width: "20%",
		height: "25%",
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
		textTransform: " upprcase",
		marginBottom: "-4px",
		"&:hover svg": {
			color: "white",
			transform: "scale(1.3)",
		},
	},
	boxConent: {
		position: "absolute",
		width: "100%",
		left: "0px",
		bottom: "0px",
		padding: "10px",
		color: (props) =>
			0.06 >= chroma(props.color).luminance() ? "white" : "black",
		letterSpacing: "1px",
		textTransform: "uppercase",
		fontSize: "12px",
		display: "flex",
		justifyContent: "space-between",
	},
	deleteIcon: {
		transition: "all 0.2s ease-in-out",
	},
};

const DraggableColorBox = SortableElement((props) => {
	const { classes, handleClick, name, color } = props;
	return (
		<div className={classes.root} style={{ backgroundColor: color }}>
			<div className={classes.boxConent}>
				<span>{name}</span>
				<span className={classes.deleteIcon}>
					<DeleteIcon onClick={handleClick} />
				</span>
			</div>
		</div>
	);
});

export default withStyles(styles)(DraggableColorBox);
