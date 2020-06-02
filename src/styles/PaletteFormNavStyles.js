export default {
	root: {
		display: "flex",
	},
	appBar: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		height: "64px",
		fontFamily: "Roboto,Helvetica, Arial, sans-serif",

		"@media only screen and (max-width: 600px)": {
			width: "100vw",
			height: "35px",
		},
	},

	navControls: {
		marginRight: "1rem",
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		"& a": {
			textDecoration: "none",
		},
		"@media only screen and (max-width: 600px)": {
			backgroundColor: "#F4F4F4",
			zIndex: 20,
			width: "100vw",
			height: "35px",
			position: "absolute",
			top: 35,
		},
		"& .MuiButton-root": {
			"@media only screen and (max-width: 600px)": {
				lineHeight: "0.70",
				fontWeight: 400,
				textTransform: "none",
			},
		},
	},
	button: {
		display: "inlineBlock",
		margin: "0 0.5rem",
	},
	searchBox: {
		alignItems: "center",
		width: "400px",
		marginBottom: "1.6rem",
		marginRight: "1rem",
	},
	titleText: {
		alignSelf: "center",
		marginLeft: "1rem",
		"@media only screen and (max-width: 600px)": {
			fontSize: "large",
		},
	},
};
