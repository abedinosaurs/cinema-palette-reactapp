import React from "react";
import ColorBox from "./ColorBox";

export const renderSwatches = (type, colors) => {
	return colors.map((color, id) => {
		return (
			<ColorBox
				key={id++}
				style={{
					backgroundColor: color,
				}}
			/>
		);
	});
};

export const Swatches = (props) => (
	<div>{props.renderSwatches("rgb", props.colors)}</div>
);
