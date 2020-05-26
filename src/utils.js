import React from "react";
import ColorBox from "./ColorBox";
import chroma from "chroma-js";

export const SWATCHES_STYLES = {
	display: "flex",
	justifyContent: "around",
	width: "70%",
};

export const renderSwatches = (type, colors) => {
	return colors.map((color, id) => {
		return (
			<ColorBox
				key={id++}
				style={{
					backgroundColor: `
						${
							Array.isArray(color) && type === "rgb"
								? `rgb(${color[0]}, ${color[1]}, ${color[2]})`
								: color.trim()
						}`,
				}}
			/>
		);
	});
};

export const Swatches = (props) => (
	<div style={SWATCHES_STYLES}>{props.renderSwatches("rgb", props.colors)}</div>
);
