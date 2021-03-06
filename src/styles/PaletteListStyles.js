export default {
	root: {
		backgroundColor: "#E8E8E8",
		backgroundSize: "cover",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
		fontFamily: "Roboto,Helvetica, Arial, sans-serif",
	},
	container: {
		width: "100%",
		display: "flex",
		alignItems: "space-between",
		flexDirection: "column",
		flexWrap: "wrap",
	},
	palettes: {
		alignSelf: "center",
		postion: "absolute",
		zIndex: 1,
		marginTop: "90vh",
		height: "100%",
		boxSizing: "border-box",
		display: "flex",
		flexWrap: "wrap",
		width: "90%",
		justifyContent: "flex-start",
		"@media only screen and (max-width: 600px)": {
			marginTop: "27vh",
		},
		"& h3": {
			marginBottom: 0,
			color: "black",
			alignItems: "flex-start",
			textDecoration: "underline",
			"@media only screen and (max-width: 600px)": {
				fontSize: "inherit",
			},
		},
	},
	titlePageHeader: {
		zIndex: 1,
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "85vh",
		overflow: "hidden",
	},
	Carousel2: {
		zIndex: 1,
		position: "absolute",
		// left: 0,
		height: "55vh",
		// width: "100%",
		cursor: "pointer",
		width: "90%",
	},
	Carousel3: {
		zIndex: 1,
		position: "absolute",
		left: 0,
		height: "55vh",
		width: "100%",
		cursor: "pointer",
		// width: "90%",
	},

	yourpalletes: {
		position: "relative",
		zIndex: 1,
		height: "100%",
		boxSizing: "border-box",
		display: "flex",
		flexWrap: "wrap",
		width: "100%",
		justifyContent: "flex-start",
		paddingBottom: 200,
	},

	yourText: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		"@media only screen and (max-width: 600px)": {
			fontSize: "small",
		},
		"& h3": {
			color: "black",
			textDecoration: "underline",
		},
		"& a": {
			textDecorationColor: "black",
			position: "relative",
			zIndex: "100",
			padding: 0,
			margin: 0,
		},
	},
	buttonFull: {
		"@media only screen and (max-width: 600px)": {
			display: "none",
		},
	},
	buttonSmall: {
		display: "none",
		"@media only screen and (max-width: 600px)": {
			display: "inline-block",
		},
	},
};
