export default {
	container: {
		display: "flex",
		position: "relative",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		height: "-webkit-fill-available",
		width: "100%",
		overflow: "hidden",
	},
	image: {
		width: "70%",
		marginBottom: 4,
		"@media screen and (max-width: 600px)": {
			width: "100%",
			position: "absolute",
			top: 10,
			height: "40vh",
		},
	},
	swatches: {
		position: "relative",
		zIndex: 5,
		display: "flex",
		width: "100%",
		wrap: "none",
	},
};
