export default {
	footer: {
		zIndex: 2,
		position: "relative",
		display: "flex",
		left: 0,
		bottom: 0,
		width: "100vw",
		backgroundColor: "#F8F9FA",
		color: " black",
		clear: "both",
		"@media only screen and (max-width: 600px)": {
			height: 80,
		},
		"& p": {
			position: "absolute",
			right: 10,
			"@media only screen and (max-width: 600px)": {
				position: "absolute",
				bottom: 40,
			},
		},
		"& h3": {
			margin: 0,
			paddingLeft: "3rem",
			paddingBottom: 10,
			fontFamily: "Oswald, sans-serif",
			letterSpacing: "2px",
			"@media only screen and (max-width: 600px)": {
				display: "none",
			},

			"& svg": {
				position: "relative",
				paddingLeft: "0.5rem",
				top: 8,
				height: "2rem",
				margin: "none",
				"@media only screen and (max-width: 600px)": {
					display: "inline-block",
					height: "1rem",
					paddingLeft: 0,
					top: 4,
					right: 0,
				},
			},
		},
	},
};
