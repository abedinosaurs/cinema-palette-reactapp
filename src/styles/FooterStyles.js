export default {
	footer: {
		zIndex: 2,
		position: "relative",
		display: "flex",
		left: 0,
		bottom: 0,
		width: "100%",
		backgroundColor: "#F8F9FA",
		color: " black",
		clear: "both",
		"& p": {
			position: "absolute",
			right: 10,
		},
		"& h3": {
			margin: 0,
			paddingLeft: "3rem",
			paddingBottom: 10,
			fontFamily: "Oswald, sans-serif",
			letterSpacing: "2px",

			"& svg": {
				position: "relative",
				paddingLeft: "0.5rem",
				top: 8,
				height: "2rem",
				margin: "none",
			},
		},
	},
};
