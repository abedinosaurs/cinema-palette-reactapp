export default {
	root: {},
	movieImage: {
		marginTop: "45px",
		width: "100%",
		height: "80%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexWrap: "wrap",
		"& img": {
			width: "65%",
			display: "block",
		},
	},
	swatchContainer: {
		display: "flex",
		justifyContent: "space-between",
		width: "65%",
		height: 100,
		paddingTop: 2,
	},
	paletteSwatches: {
		height: "100%",
		width: "calc(98%/6)",
		justifyContent: "center",
	},
};
