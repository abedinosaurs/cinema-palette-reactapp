export default {
	root: {
		backgroundColor: "black",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
	},
	container: {
		width: "90%",
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column",
		flexWrap: "wrap",
	},
	nav: {
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		color: "white",
		alignItems: "center",
		"& a": {
			color: "white",
		},
	},
	palettes: {
		height: "90vh",
		boxSizing: "border-box",
		display: "flex",
		flexWrap: "wrap",
		width: "90%",
		justifyContent: "space-around",
	},
};
