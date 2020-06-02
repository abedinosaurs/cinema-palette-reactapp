export default {
	root: {
		height: "100vh",
		overflow: "hidden",
	},
	movieImage: {
		marginTop: "45px",
		width: "100%",
		height: "80%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexWrap: "wrap",
		"@media screen and (max-width: 600px)": {
			width: "100%",
			position: "relative",
			height: "40vh",
		},
		"& img": {
			width: "65%",
			display: "block",
			"@media screen and (max-width: 600px)": {
				paddingTop: 12,
				width: "100%",
				position: "absolute",
				height: "100%",
			},
		},
	},
	swatchContainer: {
		display: "flex",
		justifyContent: "space-between",
		width: "65%",
		height: 100,
		paddingTop: 2,
		"@media screen and (max-width: 600px)": {
			flexDirection: "column",
			position: "absolute",
			marginTop: "44vh",
			width: "100%",
			justifyContent: "flex-end",
			height: "50vh",
		},
	},
	paletteSwatches: {
		height: "100%",
		width: "calc(98%/6)",
		justifyContent: "center",
		"@media screen and (max-width: 600px)": {
			width: "100%",
			height: "calc(100vh/10)",
		},
	},
};
