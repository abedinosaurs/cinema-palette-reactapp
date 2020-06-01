export default {
	container: {
		display: "flex",
		position: "relative",
		zIndex: "-5",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		height: "100vh",
		width: "100%",
	},
	image: {
		width: "70%",
		marginBottom: 4,
		"@media screen and (max-width: 600px)": {
			width: "100%",

			height: "calc(96vh/7)",
		},
	},
	swatches: {
		display: "flex",
		width: "100%",
		wrap: "none",
	},
};
