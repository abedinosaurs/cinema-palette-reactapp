export default {
	root: {
		display: "flex",
	},
	appBar: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		height: "64px",
	},

	navControls: {
		marginRight: "1rem",
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		"& a": {
			textDecoration: "none",
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
	},
};
