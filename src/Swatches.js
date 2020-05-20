import React from "react";

export const renderSwatches = (type, colors) => {
	return colors.map((color, id) => {
		return (
			<div
				key={id++}
				style={{
					backgroundColor:
						Array.isArray(color) && type === "rgb"
							? `rgb(${color[0]}, ${color[1]}, ${color[2]})`
							: color,
				}}
			/>
		);
	});
};

export const Swatches = (props) => (
	<div>{props.renderSwatches("rgb", props.colors)}</div>
);
